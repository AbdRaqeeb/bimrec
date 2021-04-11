import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddDoctorsToHospitalInput {
  @Field()
  doctor: string;
}
