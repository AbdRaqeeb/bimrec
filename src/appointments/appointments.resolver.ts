import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AppointmentsService } from './appointments.service';
import { AppointmentDTO } from './dto/appointment.dto';
import { CtxUser } from '../auth/decorators/ctx-user.decorator';
import { HospitalDTO } from '../hospitals/dto/hospital.dto';
import { AppointmentInput } from './dto/input/appointment.input';
import { BookAppointmentInput } from './dto/input/book-appointment.input';
import { PatientDTO } from '../patients/dto/patient.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { DoctorDTO } from '../doctors/dto/doctor.dto';

@Resolver(() => AppointmentDTO)
export class AppointmentsResolver {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => AppointmentDTO, { name: 'createAppointment' })
  async createAppointment(
    @CtxUser() { hospitalId }: HospitalDTO,
    @Args('input') input: AppointmentInput,
  ): Promise<AppointmentDTO> {
    return this.appointmentsService.createAppointment(hospitalId, input);
  }

  @Query(() => AppointmentDTO, { name: 'getOneAppointment' })
  async getAppointment(appointmentId: string): Promise<AppointmentDTO> {
    return this.appointmentsService.getAppointmentById(appointmentId);
  }

  @Query(() => [AppointmentDTO], { name: 'getAllAppointments' })
  async getAppointments(): Promise<AppointmentDTO[]> {
    return this.appointmentsService.getAllAppointments();
  }

  @Query(() => [AppointmentDTO], { name: 'getHospitalAppointments' })
  async getHospitalAppointments(
    @Args('hospitalId') hospitalId: string,
  ): Promise<AppointmentDTO[]> {
    return this.appointmentsService.getHospitalAppointments(hospitalId);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [AppointmentDTO], { name: 'hospitalGetMyAppointments' })
  async getHospitalAppointmentsBySelf(
    @CtxUser() { hospitalId }: HospitalDTO,
  ): Promise<AppointmentDTO[]> {
    return this.appointmentsService.getHospitalAppointments(hospitalId);
  }

  @Query(() => [AppointmentDTO], { name: 'getDoctorAppointments' })
  async getDoctorAppointments(doctorId: string): Promise<AppointmentDTO[]> {
    return this.appointmentsService.getDoctorAppointments(doctorId);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [AppointmentDTO], { name: 'doctorGetMyAppointments' })
  async getDoctorAppointmentsBySelf(
    @CtxUser() { doctorId }: DoctorDTO,
  ): Promise<AppointmentDTO[]> {
    return this.appointmentsService.getDoctorAppointments(doctorId);
  }

  @Query(() => [AppointmentDTO], { name: 'getPatientAppointments' })
  async getPatientsAppointments(patientId: string): Promise<AppointmentDTO[]> {
    return this.appointmentsService.getPatientsAppointments(patientId);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [AppointmentDTO], { name: 'patientGetMyAppointments' })
  async getPatientsAppointmentsBySelf(
    @CtxUser() { patientId }: PatientDTO,
  ): Promise<AppointmentDTO[]> {
    return this.appointmentsService.getPatientsAppointments(patientId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => AppointmentDTO, { name: 'bookAppointmentBySelf' })
  async bookAppointmentSelf(
    @CtxUser() { patientId }: PatientDTO,
    @Args('input') input: BookAppointmentInput,
  ): Promise<AppointmentDTO> {
    return this.appointmentsService.bookAppointment(patientId, input);
  }

  @Mutation(() => AppointmentDTO, { name: 'bookAppointmentForPatient' })
  async bookAppointment(
    @Args('patientId') patientId: string,
    @Args('input') input: BookAppointmentInput,
  ): Promise<AppointmentDTO> {
    return this.appointmentsService.bookAppointment(patientId, input);
  }
}
