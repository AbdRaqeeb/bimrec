import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { State } from './models/state.model';
import { StatesService } from './states.service';
import { StatesResolver } from './states.resolver';

@Module({
  imports: [SequelizeModule.forFeature([State])],
  providers: [StatesService, StatesResolver],
})
export class StatesModule {}
