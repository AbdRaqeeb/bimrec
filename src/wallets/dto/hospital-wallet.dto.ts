import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { HospitalDTO } from '../../hospitals/dto/hospital.dto';

@ObjectType()
export class HospitalWalletDTO {
  @Field(() => ID)
  walletId: string;

  @Field(() => Float)
  balance: number;

  @Field(() => HospitalDTO, { nullable: true })
  hospital: HospitalDTO;
}
