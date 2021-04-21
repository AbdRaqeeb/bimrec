import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PatientDTO } from '../../patients/dto/patient.dto';

@ObjectType()
export class NextOfKinDTO {
  @Field(() => ID)
  nextOfKinId: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  phoneNumber: string;

  @Field()
  relationship: string;

  @Field()
  address: string;

  @Field(() => PatientDTO)
  patient: PatientDTO;
}
