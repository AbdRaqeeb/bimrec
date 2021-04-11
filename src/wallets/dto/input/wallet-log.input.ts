import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateWalletLog {
  @Field()
  trxId: string;

  @Field()
  balanceBefore: number;

  @Field()
  balanceAfter: number;

  @Field()
  amount: number;

  @Field({ nullable: true })
  remarks: string;

  @Field()
  walletLogTypeId: string;
}

@InputType()
export class UpdateWalletLog {
  @Field({ nullable: true })
  balanceBefore?: number;

  @Field({ nullable: true })
  balanceAfter?: number;

  @Field({ nullable: true })
  amount?: number;

  @Field({ nullable: true })
  remarks?: string;

  @Field({ nullable: true })
  walletLogTypeId?: string;
}
