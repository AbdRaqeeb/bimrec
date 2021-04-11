import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  Default,
  AllowNull,
  ForeignKey,
  HasOne,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { TransactionType } from './transaction-type';
import { Patient } from '../../patients/models/patient.model';
import { Hospital } from '../../hospitals/models/hospital.model';
import { Appointment } from '../../appointments/models/appointment.model';
import { TransactionResult } from './transaction-result';
import { WalletLog } from '../../wallets/model/wallet-log';

enum Status {
  successful = 'successful',
  failed = 'failed',
  pending = 'pending',
}

@Table
export class Transaction extends Model<Transaction> {
  @AllowNull(false)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  trxId: string;

  @Column(DataType.STRING)
  extTrxRef: string;

  @Column(DataType.DECIMAL(10, 2))
  amount: number;

  @ForeignKey(() => TransactionType)
  @Column(DataType.STRING)
  trxTypeId: string;

  @ForeignKey(() => Patient)
  @Column(DataType.STRING)
  patientId: string;

  @ForeignKey(() => Hospital)
  @Column(DataType.STRING)
  hospitalId: string;

  @ForeignKey(() => Appointment)
  @Column(DataType.STRING)
  appointmentId: string;

  @Default(Status.pending)
  @Column(DataType.STRING)
  status: Status;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;

  @HasOne(() => TransactionResult)
  transactionResult: TransactionResult;

  @BelongsTo(() => Appointment)
  appointment: Appointment;

  @BelongsTo(() => Hospital)
  hospital: Hospital;

  @BelongsTo(() => Patient)
  patient: Patient;

  @BelongsTo(() => TransactionType)
  transactionType: TransactionType;

  @HasOne(() => WalletLog)
  walletLog: WalletLog;
}
