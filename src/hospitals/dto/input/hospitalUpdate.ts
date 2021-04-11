import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateHospitalInput {
  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phoneNumber?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  registrationNumber?: string;

  @Field({ nullable: true })
  streetAndNumber?: string;

  @Field({ nullable: true })
  stateId: number;

  @Field({ nullable: true })
  lgaId: number;
}
