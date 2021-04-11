import { BadRequestException, Injectable } from '@nestjs/common';
import { PatientsService } from '../patients/patients.service';
import { WalletsService } from '../wallets/wallets.service';
import { UserToken } from './models/user-token';
import firebase from './config/firebaseAdmin';
import { JwtService } from '@nestjs/jwt';
import { JwtDto } from './dto/jwt.dto';
import { HospitalDTO } from '../hospitals/dto/hospital.dto';
import { HospitalService } from '../hospitals/hospitals.service';
import { DoctorsService } from '../doctors/doctors.service';
import { HospitalToken } from './dto/hospitalAuth.dto';
import { Patient } from 'src/patients/models/patient.model';
import { DoctorToken } from './models/doctor-token';
import { Doctor } from '../doctors/models/doctor.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly patientsService: PatientsService,
    private readonly jwt: JwtService,
    private readonly hospitalService: HospitalService,
    private readonly doctorsService: DoctorsService,
    private readonly walletsService: WalletsService,
  ) {}

  // login patient
  async loginPatient(authToken: string): Promise<UserToken> {
    // get user email using token sent from firebase at the front end
    const { email } = await firebase.auth().verifyIdToken(authToken);

    // search for user in our database
    const patient = await this.patientsService.getPatientByEmail(email);

    if (!patient) {
      // for google sign up and login
      const patient = await this.patientsService.createPatient(email);

      const token = this.signToken(patient.patientId, patient.role);

      return { token, patient };
    }

    const token = this.signToken(patient.patientId, patient.role);

    return { token, patient };
  }

  // register patient
  async registerPatient(authToken: string): Promise<UserToken> {
    // get user email using token sent from firebase at the front end
    const { email } = await firebase.auth().verifyIdToken(authToken);

    // search for user in our database
    const checkPatient = await this.patientsService.getPatientByEmail(email);

    if (checkPatient) {
      throw new BadRequestException(`Patient with email ${email} exists`);
    }

    const patient = await this.patientsService.createPatient(email);

    const token = this.signToken(patient.patientId, patient.role);

    return { token, patient };
  }

  async hospitalSignup(authToken: string): Promise<HospitalToken> {
    // check if hospital with the same id exist
    const { email, email_verified } = await firebase
      .auth()
      .verifyIdToken(authToken);

    let hospital = await this.hospitalService.getHospitalByEmail(email);
    if (hospital) {
      throw new BadRequestException(`Hospital already exist`);
    }

    hospital = await this.hospitalService.createHospital(email, email_verified);

    await this.walletsService.createWallet(hospital.hospitalId);

    const token = this.signToken(hospital.hospitalId, hospital.role);

    return {
      token,
      hospital,
    };
  }

  async hospitalLogin(authToken: string): Promise<HospitalToken> {
    // get user email using token sent from firebase at the front end
    const { email, email_verified } = await firebase
      .auth()
      .verifyIdToken(authToken);

    // search for user in our database
    const hospital = await this.hospitalService.getHospitalByEmail(email);

    if (!hospital) {
      // for google sign up and login
      const hospital = await this.hospitalService.createHospital(
        email,
        email_verified,
      );

      await this.walletsService.createWallet(hospital.hospitalId);

      const token = this.signToken(hospital.hospitalId, hospital.role);

      return { token, hospital };
    }

    const token = this.signToken(hospital.hospitalId, hospital.role);

    return { token, hospital };
  }

  async registerDoctor(authToken: string): Promise<DoctorToken> {
    // get user email using token sent from firebase at the front end
    const { email } = await firebase.auth().verifyIdToken(authToken);

    // search for user in our database
    const checkDoctor = await this.doctorsService.getDoctorByEmail(email);

    if (checkDoctor) {
      throw new BadRequestException(`Doctor with email ${email} exists`);
    }

    const doctor = await this.doctorsService.createDoctor(email);

    const token = this.signToken(doctor.doctorId, doctor.role);

    return { token, doctor };
  }

  async loginDoctor(authToken: string): Promise<DoctorToken> {
    const { email } = await firebase.auth().verifyIdToken(authToken);

    // search for user in our database
    const doctor = await this.doctorsService.getDoctorByEmail(email);

    if (!doctor) {
      // for google sign up and login
      const doctor = await this.doctorsService.createDoctor(email);

      const token = this.signToken(doctor.doctorId, doctor.role);

      return { token, doctor };
    }

    const token = this.signToken(doctor.doctorId, doctor.role);

    return { token, doctor };
  }

  // validate patient
  async validatePatient(id: string): Promise<Patient> {
    return this.patientsService.getPatientById(id);
  }

  async validateHospital(hospitalID: string): Promise<HospitalDTO> {
    return this.hospitalService.getHospital(hospitalID);
  }

  async validateDoctor(id: string): Promise<Doctor> {
    return this.doctorsService.getDoctorById(id);
  }

  private signToken(id: string, role: string) {
    const payload: JwtDto = { id, role };

    return this.jwt.sign(payload);
  }
}
