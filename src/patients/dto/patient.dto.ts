import { Field, ObjectType } from '@nestjs/graphql';
import { LgaDTO } from '../../lgas/dto/lga.dto';
import { StateDTO } from '../../states/dto/state.dto';
import { NextOfKinDTO } from '../../nextOfKins/dto/kins.dto';
import { ECardDTO } from './eCard.dto';

@ObjectType()
export class PatientDTO {
  @Field()
  patientId: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  email?: string;

  @Field({ nullable: true })
  dob?: Date;

  @Field({ nullable: true })
  gender?: string;

  @Field({ nullable: true })
  streetAndNumber?: string;

  @Field({ nullable: true })
  identityNumber?: string;

  @Field({ nullable: true })
  twitter?: string;

  @Field({ nullable: true })
  facebook?: string;

  @Field({ nullable: true })
  instagram?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  role?: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;

  @Field(() => LgaDTO, { nullable: true })
  lga?: LgaDTO;

  @Field(() => NextOfKinDTO, { nullable: true })
  nok?: NextOfKinDTO;

  @Field(() => StateDTO, { nullable: true })
  state?: StateDTO;

  @Field(() => ECardDTO, { nullable: true })
  eCard?: ECardDTO;
}
