import { ObjectType, Field, ID } from '@nestjs/graphql';
import { DoctorDTO } from '../../doctors/dto/doctor.dto';
import { HospitalDTO } from '../../hospitals/dto/hospital.dto';

@ObjectType()
export class SpecialtyDTO {
  @Field(() => ID)
  specialtyId: string;

  @Field()
  name: string;

  @Field(() => [DoctorDTO], { nullable: 'items' })
  doctors?: DoctorDTO[];

  @Field(() => [HospitalDTO], { nullable: 'items' })
  hospitals?: HospitalDTO[];
}
