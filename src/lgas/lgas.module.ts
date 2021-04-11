import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lga } from './models/lga.model';
import { LgasResolver } from './lgas.resolver';
import { LgasService } from './lgas.service';

@Module({
  imports: [SequelizeModule.forFeature([Lga])],
  providers: [LgasResolver, LgasService],
})
export class LgasModule {}
