import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateTransactionResult {
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

  @Field()
  trxId: string;
}

@InputType()
export class UpdateTransactionResult {
  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  trxRef?: string;

  @Field({ nullable: true })
  flwRef?: string;

  @Field({ nullable: true })
  amount?: number;

  @Field({ nullable: true })
  chargedAmount?: number;

  @Field({ nullable: true })
  currency?: string;

  @Field({ nullable: true })
  processorResponse?: string;

  @Field({ nullable: true })
  paymentType?: string;

  @Field({ nullable: true })
  hospitalId?: string;

  @Field({ nullable: true })
  hospitalName?: string;

  @Field({ nullable: true })
  patientId?: string;

  @Field({ nullable: true })
  patientName?: string;

  @Field({ nullable: true })
  trxId?: string;
}
