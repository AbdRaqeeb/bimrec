import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { BiometricResult } from './dto/biometric.dto';
import { BiometricService } from './biometric.service';
import { ECardDTO } from '../patients/dto/eCard.dto';
import { PatientsService } from '../patients/patients.service';
import { PatientDTO } from 'src/patients/dto/patient.dto';

@Resolver(() => BiometricResult)
export class FacialBiometricResolver {
  constructor(
    private readonly biometricService: BiometricService,
    private readonly patientService: PatientsService,
  ) {}

  @Mutation(() => Boolean, { name: 'uploadImage' })
  async uploadImage(
    @Args({ name: 'image', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
    @Args('patientId') patientId: string,
  ): Promise<boolean> {
    try {
      const imageIsValid = this.biometricService.uploadImage(
        patientId,
        filename,
        createReadStream(),
      );
      return imageIsValid;
    } catch (e) {
      // false is returned for an invalid image
      return false;
    }
  }

  @Mutation(() => [BiometricResult])
  async dataByBiometric(
    @Args({ name: 'image', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
  ) {
    return this.biometricService.findBiometricMatch(
      filename,
      createReadStream(),
    );
  }

  @ResolveField(() => ECardDTO)
  async eCard(@Parent() { patientId }: BiometricResult): Promise<ECardDTO> {
    // get patients ecard by id
    return this.patientService.getPatientsECardById(patientId);
  }

  @ResolveField(() => PatientDTO)
  async patient(@Parent() biometric: BiometricResult): Promise<PatientDTO> {
    const { patientId } = biometric;
    const patient = await this.patientService.getPatientById(patientId);
    return {
      patientId: patient.patientId,
      firstName: patient.firstName,
      lastName: patient.lastName,
    };
  }
}
