import { Resolver, Query } from '@nestjs/graphql';
import { LgasService } from './lgas.service';
import { Lga } from './models/lga.model';
import { LgaDTO } from './dto/lga.dto';

@Resolver(() => Lga)
export class LgasResolver {
  constructor(private readonly lgasService: LgasService) {}

  @Query(() => [LgaDTO])
  async lgas(): Promise<Lga[]> {
    return this.lgasService.getLgas();
  }
}
