import { ObjectType, Field, ID } from '@nestjs/graphql';
import { TransactionDTO } from './transction.dto';

@ObjectType()
export class TransactionResultDTO {
  @Field(() => ID)
  trxResultId: string;

  @Field()
  status: string;

  @Field()
  trxRef: string;

  @Field()
  flwRef: string;

  @Field()
  amount: number;

  @Field()
  chargedAmount: number;

  @Field()
  currency: string;

  @Field()
  processorResponse: string;

  @Field()
  paymentType: string;

  @Field()
  hospitalId: string;

  @Field()
  hospitalName: string;

  @Field()
  patientId: string;

  @Field()
  patientName: string;

  @Field(() => TransactionDTO)
  transaction: TransactionDTO;
}
