import { ObjectType, Field, ID } from '@nestjs/graphql';
import { WalletLogTypeDTO } from './wallet-log-type.dto';
import { TransactionDTO } from '../../transactions/dto/transction.dto';
import { HospitalWalletDTO } from './hospital-wallet.dto';

@ObjectType()
export class WalletLogDTO {
  @Field(() => ID)
  walletLogId: string;

  @Field()
  balanceBefore: number;

  @Field()
  balanceAfter: number;

  @Field()
  amount: number;

  @Field({ nullable: true })
  remarks?: string;

  @Field(() => WalletLogTypeDTO)
  walletLogType: WalletLogTypeDTO;

  @Field(() => TransactionDTO)
  transaction: TransactionDTO;

  @Field(() => HospitalWalletDTO)
  wallet: HospitalWalletDTO;
}
