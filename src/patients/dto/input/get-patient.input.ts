import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetPatientInput {
  @Field()
  patientId: string;
}
