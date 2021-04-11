import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetPatientArgs {
  @Field()
  patientId?: string;

  @Field()
  email: string;
}
