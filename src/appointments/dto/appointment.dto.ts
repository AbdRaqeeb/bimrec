import { ObjectType, Field, ID } from '@nestjs/graphql';
import { DoctorDTO } from '../../doctors/dto/doctor.dto';
import { PatientDTO } from '../../patients/dto/patient.dto';
import { AppointmentTypeDTO } from './appointment-type.dto';
import { HospitalDTO } from '../../hospitals/dto/hospital.dto';

type Status =
  | 'pending'
  | 'accepted'
  | 'canceled'
  | 'finished'
  | 'in-session'
  | 'available'
  | 'booked';

type Payment = 'Card' | 'Cash' | 'Transfer';

@ObjectType()
export class AppointmentDTO {
  @Field(() => ID)
  appointmentId: string;

  @Field(() => HospitalDTO, { nullable: true })
  hospital: HospitalDTO;

  @Field(() => DoctorDTO, { nullable: true })
  doctor?: DoctorDTO;

  @Field(() => PatientDTO, { nullable: true })
  patient?: PatientDTO;

  @Field({ nullable: true })
  startTime?: string;

  @Field({ nullable: true })
  endTime?: string;

  @Field({ nullable: true })
  date: Date;

  @Field({ nullable: true })
  patientFinish?: boolean;

  @Field({ nullable: true })
  doctorFinish?: boolean;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  patientNotificationTime?: Date;

  @Field({ nullable: true })
  doctorNotificationTime?: Date;

  @Field(() => AppointmentTypeDTO, { nullable: true })
  type: AppointmentTypeDTO;

  @Field({ nullable: true })
  link?: string;

  @Field({ nullable: true })
  address?: string;

  @Field()
  status: Status;

  @Field()
  payment: Payment;

  @Field()
  price: number;

  @Field()
  isPaid: boolean;
}
