import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTransactionInput {
  @Field({ nullable: true })
  extTrxRef?: string;

  @Field()
  appointmentId: string;

  @Field()
  hospitalId: string;

  @Field()
  patientId: string;

  @Field()
  amount: number;
}

enum Status {
  successful = 'successful',
  failed = 'failed',
  pending = 'pending',
}

@InputType()
export class UpdateTransactionInput {
  @Field({ nullable: true })
  extTrxRef?: string;

  @Field({ nullable: true })
  amount?: number;

  @Field({ nullable: true })
  status?: Status;
}
