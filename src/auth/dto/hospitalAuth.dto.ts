import { Field, ObjectType } from '@nestjs/graphql';
import { HospitalDTO } from '../../hospitals/dto/hospital.dto';

@ObjectType()
export class HospitalToken {
  @Field()
  token: string;

  @Field()
  hospital: HospitalDTO;
}
