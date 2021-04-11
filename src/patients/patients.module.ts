import { Module } from '@nestjs/common';
import { PatientsResolver } from './patients.resolver';
import { PatientsService } from './patients.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './models/patient.model';
import { NextOfKinsService } from 'src/nextOfKins/kins.service';
import { ECard } from './models/ecard.model';
import { NextOfKinsModule } from 'src/nextOfKins/kins.module';
import { NextOfKin } from 'src/nextOfKins/models/kin.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Patient, ECard, NextOfKin]),
    NextOfKinsModule,
  ],
  providers: [PatientsResolver, PatientsService, NextOfKinsService],
  exports: [PatientsService],
})
export class PatientsModule {}
