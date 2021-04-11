import { Field, ObjectType } from '@nestjs/graphql';
import { DoctorDTO } from '../../doctors/dto/doctor.dto';

@ObjectType()
export class DoctorToken {
  @Field()
  token: string;

  @Field()
  doctor: DoctorDTO;
}
