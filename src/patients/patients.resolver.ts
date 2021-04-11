import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PatientsService } from './patients.service';
import { PatientDTO } from './dto/patient.dto';
import { CtxUser } from '../auth/decorators/ctx-user.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { ECardDTO } from './dto/eCard.dto';
import { ECardInput } from './dto/input/eCard.input';
import { UpdatePatientInput } from './dto/input/update-patient.input';
import { NextOfKinInput } from '../nextOfKins/dto/input/nok.input';
import { NextOfKinsService } from '../nextOfKins/kins.service';
import { NextOfKinDTO } from 'src/nextOfKins/dto/kins.dto';

@Resolver(() => PatientDTO)
export class PatientsResolver {
  constructor(
    private readonly patientsService: PatientsService,
    private readonly nokService: NextOfKinsService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => PatientDTO, { name: 'updatePatient' })
  async updatePatientDetails(
    @CtxUser() { patientId }: PatientDTO,
    @Args('patient') patientData: UpdatePatientInput,
    @Args({
      name: 'nok',
      nullable: true,
    })
    nok: NextOfKinInput,
  ): Promise<PatientDTO> {
    return this.patientsService.updatePatient(patientId, patientData, nok);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ECardDTO, { name: 'createECard' })
  async createECard(
    @CtxUser() { patientId }: PatientDTO,
    @Args('input') eCard: ECardInput,
  ): Promise<ECardDTO> {
    return this.patientsService.createECard(patientId, eCard);
  }

  /**
   * returns the patient's profile detail
   * @param patient
   */
  @UseGuards(GqlAuthGuard)
  @Query(() => PatientDTO, { name: 'getLoggedInPatient' })
  async patientProfile(@CtxUser() patient: PatientDTO): Promise<PatientDTO> {
    return patient;
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => ECardDTO, { name: 'eCardById' })
  async patientECardById(
    @CtxUser() { patientId }: PatientDTO,
  ): Promise<ECardDTO> {
    return this.patientsService.getPatientsECardById(patientId);
  }

  @Query(() => ECardDTO, { name: 'eCardBySlug' })
  async patientECardBySlug(
    @Args('patientSlug') patientSlug: string,
  ): Promise<ECardDTO> {
    return this.patientsService.getPatientsECardBySlug(patientSlug);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => NextOfKinDTO, { name: 'getPatientNextOfKin' })
  async nok(@CtxUser() { patientId }: PatientDTO): Promise<NextOfKinDTO> {
    // get next of king related to this patient
    return this.nokService.getNextOfKin(patientId);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => ECardDTO, { name: 'getECard' })
  async eCard(@CtxUser() { patientId }: PatientDTO): Promise<ECardDTO> {
    return this.patientsService.getPatientsECardById(patientId);
  }
}
