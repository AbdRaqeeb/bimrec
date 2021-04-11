import { ObjectType, Field, ID } from '@nestjs/graphql';
import { HospitalDTO } from './hospital.dto';
import { DoctorDTO } from '../../doctors/dto/doctor.dto';

@ObjectType()
export class HospitalDoctorDTO {
  @Field(() => ID)
  id: string;

  @Field(() => HospitalDTO)
  hospitalId: HospitalDTO;

  @Field(() => DoctorDTO)
  doctorId: DoctorDTO;

  @Field()
  isConfirmedByHospital: boolean;
}
