import { Resolver, Query, Args } from '@nestjs/graphql';
import { StatesService } from './states.service';
import { StateDTO } from './dto/state.dto';

@Resolver(() => StateDTO)
export class StatesResolver {
  constructor(private readonly statesService: StatesService) {}

  @Query(() => [StateDTO], { name: 'getStates' })
  async states(): Promise<StateDTO[]> {
    return this.statesService.getStates();
  }

  @Query(() => StateDTO, { name: 'getStateByName' })
  async getStateByName(@Args('name') name: string): Promise<StateDTO> {
    return this.statesService.getStateByName(name);
  }

  @Query(() => StateDTO, { name: 'getStateById' })
  async getStateById(@Args('name') stateId: number): Promise<StateDTO> {
    return this.statesService.getStateById(stateId);
  }
}
