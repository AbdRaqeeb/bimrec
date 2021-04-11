import { ObjectType, Field } from '@nestjs/graphql';
import { TransactionDTO } from './transction.dto';

@ObjectType()
export class TransactionTypeDTO {
  @Field()
  trxTypeId: string;

  @Field()
  description: string;

  @Field(() => [TransactionDTO])
  transactions: TransactionDTO[];
}
