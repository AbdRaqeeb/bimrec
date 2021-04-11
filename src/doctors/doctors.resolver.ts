import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { DoctorsService } from './doctors.service';
import { DoctorDTO } from './dto/doctor.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CtxUser } from '../auth/decorators/ctx-user.decorator';
import { UpdateDoctorInput } from './dto/input/update-doctor.input';

@Resolver(() => DoctorDTO)
export class DoctorsResolver {
  constructor(private readonly doctorsService: DoctorsService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => DoctorDTO, { name: 'updateDoctor' })
  async updateDoctor(
    @CtxUser() { doctorId }: DoctorDTO,
    @Args('input') input: UpdateDoctorInput,
  ): Promise<DoctorDTO> {
    return this.doctorsService.updateDoctor(doctorId, input);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => DoctorDTO, { name: 'doctorRequestToJoinHospital' })
  async requestToJoinHospital(
    @CtxUser() { doctorId }: DoctorDTO,
    @Args('hospitalId') hospitalId: string,
  ): Promise<DoctorDTO> {
    return this.doctorsService.joinHospitalRequest(doctorId, hospitalId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => DoctorDTO, { name: 'doctorCancelRequestToJoinHospital' })
  async cancelRequestToHospital(
    @CtxUser() { doctorId }: DoctorDTO,
    @Args('hospitalId') hospitalId: string,
  ): Promise<DoctorDTO> {
    return this.doctorsService.cancelHospitalRequest(doctorId, hospitalId);
  }
}
