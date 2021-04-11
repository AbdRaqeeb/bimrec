import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SpecialtiesService } from './specialties.service';
import { SpecialtyDTO } from './dto/specialty.dto';
import { UpdateSpecialtyInput } from './dto/input/specialty.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CtxUser } from '../auth/decorators/ctx-user.decorator';
import { DoctorDTO } from '../doctors/dto/doctor.dto';
import { HospitalDTO } from '../hospitals/dto/hospital.dto';

@Resolver(() => SpecialtyDTO)
export class SpecialtiesResolver {
  constructor(private readonly specialtiesService: SpecialtiesService) {}

  @Query(() => [SpecialtyDTO], { name: 'getSpecialties' })
  async getSpecialties(): Promise<SpecialtyDTO[]> {
    return this.specialtiesService.getSpecialties();
  }

  @Query(() => SpecialtyDTO, { name: 'getSpecialtyByName' })
  async getSpecialty(@Args('name') name: string): Promise<SpecialtyDTO> {
    return this.specialtiesService.getSpecialtyByName(name);
  }

  @Mutation(() => SpecialtyDTO, { name: 'createSpecialty' })
  async createSpecialty(@Args('name') name: string): Promise<SpecialtyDTO> {
    return this.specialtiesService.createSpecialty(name);
  }

  @Mutation(() => SpecialtyDTO, { name: 'updateSpecialty' })
  async updateSpeciality(
    @Args('input') input: UpdateSpecialtyInput,
  ): Promise<SpecialtyDTO> {
    return this.specialtiesService.updateSpecialty(input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SpecialtyDTO, { name: 'addSpecialtyToDoctor' })
  async addDoctorToSpecialty(
    @CtxUser() { doctorId }: DoctorDTO,
    @Args('specialtyId') specialtyId: string,
  ): Promise<SpecialtyDTO> {
    return this.specialtiesService.addDoctorsToSpecialty(specialtyId, doctorId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SpecialtyDTO, { name: 'addSpecialtyToHospital' })
  async addHospitalsToSpecialty(
    @CtxUser() { hospitalId }: HospitalDTO,
    @Args('specialtyId') specialtyId: string,
  ): Promise<SpecialtyDTO> {
    return this.specialtiesService.addHospitalsToSpecialty(
      specialtyId,
      hospitalId,
    );
  }
}
