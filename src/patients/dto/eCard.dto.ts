import { ObjectType, Field } from '@nestjs/graphql';
import { PatientDTO } from './patient.dto';
import { NextOfKinDTO } from '../../nextOfKins/dto/kins.dto';

@ObjectType()
export class ECardDTO {
  @Field()
  eCardId: string;

  @Field()
  patientSlug?: string;

  @Field({ nullable: true })
  bloodGroup?: string;

  @Field({ nullable: true })
  genotype?: string;

  @Field({ nullable: true })
  weight?: number;

  @Field({ nullable: true })
  height?: number;

  @Field({ nullable: true })
  bpSystolic?: number;

  @Field({ nullable: true })
  bpDiastolic?: number;

  @Field({ nullable: true })
  nokName?: string;

  @Field({ nullable: true })
  nokNumber?: string;

  @Field(() => PatientDTO, { nullable: true })
  patient?: PatientDTO;

  @Field(() => NextOfKinDTO, { nullable: true })
  kin?: NextOfKinDTO;
}
