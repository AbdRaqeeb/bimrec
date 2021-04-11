import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class SpecialtyInput {
  @Field()
  name: string;
}

@InputType()
export class SpecialtyDoctorInput {
  @Field(() => ID)
  specialtyId: string;

  @Field(() => ID)
  doctorId: string;
}

@InputType()
export class SpecialtyHospitalInput {
  @Field(() => ID)
  specialtyId: string;

  @Field(() => ID)
  hospitalId: string;
}

@InputType()
export class UpdateSpecialtyInput {
  @Field(() => ID)
  specialtyId: string;

  @Field()
  name: string;
}
