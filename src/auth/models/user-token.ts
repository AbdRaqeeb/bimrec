import { Field, ObjectType } from '@nestjs/graphql';
import { PatientDTO } from 'src/patients/dto/patient.dto';

@ObjectType()
export class UserToken {
  @Field()
  token: string;

  @Field()
  patient: PatientDTO;
}
