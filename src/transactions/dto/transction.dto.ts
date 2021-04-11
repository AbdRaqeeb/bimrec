import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { PatientDTO } from '../../patients/dto/patient.dto';
import { AppointmentDTO } from '../../appointments/dto/appointment.dto';
import { HospitalDTO } from '../../hospitals/dto/hospital.dto';
import { TransactionTypeDTO } from './transaction-type.dto';
import { TransactionResultDTO } from './transaction-result.dto';
import { WalletLogDTO } from '../../wallets/dto/wallet-log.dto';

enum Status {
  successful = 'successful',
  failed = 'failed',
  pending = 'pending',
}

@ObjectType()
export class TransactionDTO {
  @Field(() => ID)
  trxId: string;

  @Field({ nullable: true })
  extTrxRef: string;

  @Field(() => Float)
  amount: number;

  @Field()
  status: Status;

  @Field(() => PatientDTO, { nullable: true })
  patient: PatientDTO;

  @Field(() => AppointmentDTO, { nullable: true })
  appointment: AppointmentDTO;

  @Field(() => HospitalDTO, { nullable: true })
  hospital: HospitalDTO;

  @Field(() => TransactionTypeDTO)
  transactionType: TransactionTypeDTO;

  @Field(() => TransactionResultDTO, { nullable: true })
  transactionResult: TransactionResultDTO;

  @Field(() => WalletLogDTO, { nullable: true })
  walletLog: WalletLogDTO;
}
