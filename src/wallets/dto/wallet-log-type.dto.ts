import { ObjectType, Field } from '@nestjs/graphql';
import { WalletLogDTO } from './wallet-log.dto';

@ObjectType()
export class WalletLogTypeDTO {
  @Field()
  walletLogTypeId: string;

  @Field()
  description: string;

  @Field(() => [WalletLogDTO])
  walletLogs: WalletLogDTO[];
}
