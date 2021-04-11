import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PatientDTO } from '../../patients/dto/patient.dto';
import { DoctorDTO } from '../../doctors/dto/doctor.dto';

@ObjectType()
export class LgaDTO {
  @Field(() => Int)
  lgaId: number;

  @Field()
  name: string;

  @Field(() => [PatientDTO], { nullable: 'items' })
  patients: PatientDTO[];

  @Field(() => [DoctorDTO], { nullable: 'items' })
  doctors: DoctorDTO[];
}
