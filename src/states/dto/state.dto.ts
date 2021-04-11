import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PatientDTO } from '../../patients/dto/patient.dto';
import { LgaDTO } from '../../lgas/dto/lga.dto';
import { DoctorDTO } from '../../doctors/dto/doctor.dto';

@ObjectType()
export class StateDTO {
  @Field(() => Int)
  stateId: number;

  @Field()
  name: string;

  @Field(() => [PatientDTO], { nullable: 'items' })
  patients: PatientDTO[];

  @Field(() => [LgaDTO], { nullable: 'items' })
  lgas: LgaDTO[];

  @Field(() => [DoctorDTO], { nullable: 'items' })
  doctors: DoctorDTO[];
}
