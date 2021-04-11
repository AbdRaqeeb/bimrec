import { Resolver, Query } from '@nestjs/graphql';
import { NextOfKinsService } from './kins.service';
import { NextOfKinDTO } from './dto/kins.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CtxUser } from '../auth/decorators/ctx-user.decorator';
import { PatientDTO } from '../patients/dto/patient.dto';

@Resolver(() => NextOfKinDTO)
export class NextOfKinsResolver {
  constructor(private readonly nextOfKinsService: NextOfKinsService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => NextOfKinDTO, { name: 'getNextOfkin' })
  async kins(@CtxUser() { patientId }: PatientDTO): Promise<NextOfKinDTO> {
    return this.nextOfKinsService.getNextOfKin(patientId);
  }
}
