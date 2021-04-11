import { InputType, Field, Int, ID } from '@nestjs/graphql';

type Status = 'ACTIVE' | 'DELETED' | 'PENDING';

@InputType()
export class UpdateDoctorInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  streetAndNumber?: string;

  @Field({ nullable: true })
  status?: Status;

  @Field({ nullable: true })
  twitter?: string;

  @Field({ nullable: true })
  facebook?: string;

  @Field({ nullable: true })
  registrationNumber?: string;

  @Field({ nullable: true })
  phoneNumber?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  instagram?: string;

  @Field({ nullable: true })
  image?: string;

  @Field(() => Int, { nullable: true })
  lgaId?: number;

  @Field(() => Int, { nullable: true })
  stateId?: number;

  @Field(() => [ID], { nullable: true })
  specialtyId?: string[];
}
