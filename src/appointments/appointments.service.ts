import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Appointment } from './models/appointment.model';
import { AppointmentInput } from './dto/input/appointment.input';
import { Doctor } from '../doctors/models/doctor.model';
import { Patient } from '../patients/models/patient.model';
import { Hospital } from '../hospitals/models/hospital.model';
import { State } from '../states/models/state.model';
import { Lga } from '../lgas/models/lga.model';
import { BookAppointmentInput } from './dto/input/book-appointment.input';
import { AppointmentType } from './models/appointment-type.model';
import { Transaction } from '../transactions/model/transaction';
import { TransactionResult } from '../transactions/model/transaction-result';
import { TransactionsService } from '../transactions/transactions.service';
import { WalletsService } from '../wallets/wallets.service';
import { WalletLog } from '../wallets/model/wallet-log';
import { FlwInterface } from './dto/interfaces/flw';

const config = {
  headers: {
    Authorization: `Bearer ${process.env.FLW_KEY}`,
  },
};

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel(Appointment)
    private appointmentModel: typeof Appointment,
    @InjectModel(Transaction)
    private transactionModel: typeof Transaction,
    @InjectModel(TransactionResult)
    private transactionResultModel: typeof TransactionResult,
    @InjectModel(WalletLog)
    private walletLogModel: typeof WalletLog,
    private readonly transactionsService: TransactionsService,
    private readonly walletsService: WalletsService,
    private sequelize: Sequelize,
  ) {}

  async createAppointment(
    hospitalId: string,
    input: AppointmentInput,
  ): Promise<Appointment> {
    const appointment = new Appointment();
    appointment.hospitalId = hospitalId;

    await appointment.save();

    await appointment.update(input);

    await appointment.reload();

    return appointment;
  }

  async getAppointmentById(appointmentId: string): Promise<Appointment> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const appointment = await this.appointmentModel.findByPk(appointmentId, {
      include: [
        { model: Doctor },
        { model: Patient },
        {
          model: Hospital,
        },
        { model: AppointmentType },
      ],
    });

    if (!appointment) {
      throw new NotFoundException(`Appointment not found`);
    }

    return appointment;
  }

  async getAllAppointments(): Promise<Appointment[]> {
    return this.appointmentModel.findAll();
  }

  async getHospitalAppointments(hospitalId: string): Promise<Appointment[]> {
    return this.appointmentModel.findAll({
      where: {
        hospitalId,
      },
      include: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { model: Doctor },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { model: Patient },
      ],
    });
  }

  async getDoctorAppointments(doctorId: string): Promise<Appointment[]> {
    return this.appointmentModel.findAll({
      where: {
        doctorId,
      },
      include: [
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          model: Hospital,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          include: [{ model: State }, { model: Lga }],
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { model: Patient },
      ],
    });
  }

  async getPatientsAppointments(patientId: string): Promise<Appointment[]> {
    return this.appointmentModel.findAll({
      where: {
        patientId,
      },
      include: [
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          model: Hospital,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          include: [{ model: State }, { model: Lga }],
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { model: Doctor },
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          model: Patient,
          include: [
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            { model: State, attributes: ['stateId', 'name'] },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            { model: Lga, attributes: ['lgaId', 'name'] },
          ],
        },
      ],
    });
  }

  async bookAppointment(
    patientId: string,
    input: BookAppointmentInput,
  ): Promise<Appointment> {
    try {
      return this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const appointment = await this.getAppointmentById(input.appointmentId);

        await appointment.update(
          {
            ...input,
            patientId: patientId,
          },
          transactionHost,
        );

        // start transaction when appointment is booked.
        const transaction = new Transaction();
        transaction.appointmentId = appointment.appointmentId;
        transaction.hospitalId = appointment.hospitalId;
        transaction.patientId = appointment.patientId;
        transaction.amount = appointment.price;
        transaction.trxTypeId = 'Appointment payment';

        await transaction.save(transactionHost);

        await appointment.reload(transactionHost);

        return appointment;
      });
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async payForAppointment(
    trxId: string,
    extTrxRef: string,
    appointmentId: string,
  ): Promise<Appointment> {
    try {
      return this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const response: AxiosResponse<FlwInterface> = await axios.get(
          `https://api.flutterwave.com/v3/transactions/${extTrxRef}/verify`,
          config,
        );
        const { status, data } = response.data;

        if (status !== 'success') {
          throw new InternalServerErrorException(
            'Unable to confirm payment at the moment',
          );
        }

        // create transaction result
        const {
          tx_ref,
          amount,
          charged_amount,
          currency,
          customer: { hospitalId, hospitalName, patientId, patientName },
          flw_ref,
          payment_type,
          processor_response,
        } = data;
        const trxReq = new TransactionResult();
        trxReq.trxRef = tx_ref;
        trxReq.amount = amount;
        trxReq.chargedAmount = charged_amount;
        trxReq.currency = currency;
        trxReq.hospitalId = hospitalId;
        trxReq.hospitalName = hospitalName;
        trxReq.patientId = patientId;
        trxReq.patientName = patientName;
        trxReq.flwRef = flw_ref;
        trxReq.paymentType = payment_type;
        trxReq.processorResponse = processor_response;
        trxReq.status = data.status;
        trxReq.trxId = trxId;

        await trxReq.save(transactionHost);

        if (data.status === 'successful') {
          // update appointment to paid: true
          const appointment = await this.getAppointmentById(appointmentId);

          await appointment.update(
            {
              isPaid: true,
            },
            transactionHost,
          );

          // update transaction status to successful
          const transaction = await this.transactionsService.getTransactionById(
            trxId,
          );
          await transaction.update(
            {
              status: 'successful',
            },
            transactionHost,
          );

          const wallet = await this.walletsService.getBalance(hospitalId);
          // get old balance
          const oldBalance = wallet.balance;
          // add current balance to new amount paid for transaction
          const newBalance = amount + oldBalance;

          // update hospital wallet
          await wallet.update({
            balance: newBalance,
          });

          // wallet log
          const walletLog = new WalletLog();
          walletLog.walletLogTypeId = 'Wallet credit';
          walletLog.balanceBefore = oldBalance;
          walletLog.balanceAfter = newBalance;
          walletLog.trxId = trxId;
          walletLog.amount = amount;

          await walletLog.save(transactionHost);

          return appointment;
        }
      });
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException('Internal server error');
    }
  }
}
