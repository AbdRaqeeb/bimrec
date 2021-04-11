import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserToken } from './models/user-token';
import { PatientDTO } from '../patients/dto/patient.dto';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { CtxUser } from './decorators/ctx-user.decorator';
import { UseGuards } from '@nestjs/common';
import { HospitalToken } from './dto/hospitalAuth.dto';
import { DoctorDTO } from '../doctors/dto/doctor.dto';
import { DoctorToken } from './models/doctor-token';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => UserToken, { name: 'loginPatient' })
  async loginPatient(@Args('token') token: string): Promise<UserToken> {
    return this.authService.loginPatient(token);
  }

  @Mutation(() => UserToken, { name: 'registerPatient' })
  async registerPatient(@Args('token') token: string): Promise<UserToken> {
    return this.authService.registerPatient(token);
  }

  @Mutation(() => HospitalToken, { name: 'loginHospital' })
  async loginHospital(@Args('token') token: string): Promise<HospitalToken> {
    return this.authService.hospitalLogin(token);
  }

  @Mutation(() => HospitalToken, { name: 'registerHospital' })
  async registerHospital(@Args('token') token: string): Promise<HospitalToken> {
    return this.authService.hospitalSignup(token);
  }

  @Mutation(() => DoctorToken, { name: 'registerDoctor' })
  async registerDoctor(@Args('token') token: string): Promise<DoctorToken> {
    return this.authService.registerDoctor(token);
  }

  @Mutation(() => DoctorToken, { name: 'loginDoctor' })
  async loginDoctor(@Args('token') token: string): Promise<DoctorToken> {
    return this.authService.loginDoctor(token);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => PatientDTO, { name: 'currentPatient' })
  async currentPatient(@CtxUser() patient: PatientDTO): Promise<PatientDTO> {
    return patient;
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => DoctorDTO, { name: 'currentDoctor' })
  async currentDoctor(@CtxUser() doctor: DoctorDTO): Promise<DoctorDTO> {
    return doctor;
  }
}
