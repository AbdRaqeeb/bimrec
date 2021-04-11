import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NextOfKin } from './models/kin.model';
import { NextOfKinsService } from './kins.service';
import { NextOfKinsResolver } from './kins.resolver';

@Module({
  imports: [SequelizeModule.forFeature([NextOfKin])],
  providers: [NextOfKinsService, NextOfKinsResolver],
  exports: [NextOfKinsService],
})
export class NextOfKinsModule {}
