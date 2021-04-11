import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { HospitalService } from './hospitals.service';
import { HospitalDTO } from './dto/hospital.dto';
import { CtxUser } from '../auth/decorators/ctx-user.decorator';
import { UpdateHospitalInput } from './dto/input/hospitalUpdate';
import { UpdateAfterVerificationArg } from './dto/args/updateAfterVerification.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';

@Resolver(() => HospitalDTO)
export class HospitalResolver {
  constructor(private readonly hospitalService: HospitalService) {}

  @Query(() => HospitalDTO, { name: 'getHospitalById' })
  async hospital(@Args('hospitalId') hospitalId: string): Promise<HospitalDTO> {
    return this.hospitalService.getHospital(hospitalId);
  }

  @Query(() => HospitalDTO, { name: 'searchHospitalByName' })
  async getHospitalByName(@Args('name') name: string): Promise<HospitalDTO> {
    return this.hospitalService.getHospitalByName(name);
  }

  @Query(() => [HospitalDTO], { name: 'filterHospitalByName' })
  async filterHospital(@Args('name') name: string): Promise<HospitalDTO[]> {
    return this.hospitalService.searchHospital(name);
  }

  @Query(() => [HospitalDTO], { name: 'getHospitals' })
  async getHospitals(): Promise<HospitalDTO[]> {
    return this.hospitalService.getHospitals();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => HospitalDTO, { name: 'currentHospital' })
  async currentHospital(
    @CtxUser() hospital: HospitalDTO,
  ): Promise<HospitalDTO> {
    return hospital;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => HospitalDTO, { name: 'updateHospital' })
  async updateHospital(
    @CtxUser() { hospitalId }: HospitalDTO,
    @Args('input') input: UpdateHospitalInput,
  ): Promise<HospitalDTO> {
    return this.hospitalService.updateHospital(hospitalId, input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => HospitalDTO, { name: 'addDoctorToHospital' })
  async addDoctorsToHospital(
    @CtxUser() { hospitalId }: HospitalDTO,
    @Args('doctorId') doctorId: string,
  ): Promise<HospitalDTO> {
    return this.hospitalService.addDoctorToHospital(hospitalId, doctorId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => HospitalDTO, { name: 'removeDoctorFromHospital' })
  async removeDoctorFromHospital(
    @CtxUser() { hospitalId }: HospitalDTO,
    @Args('doctorId') doctorId: string,
  ): Promise<HospitalDTO> {
    return this.hospitalService.removeDoctorFromHospital(hospitalId, doctorId);
  }

  @Mutation(() => HospitalDTO, { name: 'updateHospitalAfterVerification' })
  async updateHospitalAfterVerification(
    @Args('hospitalId') hospitalId: string,
    @Args('input') input: UpdateAfterVerificationArg,
    @Args('verified') verified: boolean,
  ): Promise<HospitalDTO> {
    return this.hospitalService.updateAfterVerification(
      hospitalId,
      input,
      verified,
    );
  }
}
