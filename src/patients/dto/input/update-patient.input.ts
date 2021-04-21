import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePatientInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  dob?: Date;

  @Field({ nullable: true })
  gender?: string;

  @Field({ nullable: true })
  identityNumber?: string;

  @Field({ nullable: true })
  streetAndNumber?: string;

  @Field({ nullable: true })
  phoneNumber?: string;

  @Field({ nullable: true })
  twitter?: string;

  @Field({ nullable: true })
  facebook?: string;

  @Field({ nullable: true })
  instagram?: string;

  @Field({ nullable: true })
  image?: string;

  @Field(() => Int, { nullable: true })
  lgaId?: number;

  @Field({ nullable: true })
  nextOfKinId?: string;

  @Field(() => Int, { nullable: true })
  stateId?: number;
}
