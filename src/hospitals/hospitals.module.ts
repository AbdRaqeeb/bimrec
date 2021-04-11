import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HospitalResolver } from './hospitals.resolver';
import { HospitalService } from './hospitals.service';
import { Hospital } from './models/hospital.model';
import { HospitalDoctor } from './models/hospital-doctor.model';

@Module({
  imports: [SequelizeModule.forFeature([Hospital, HospitalDoctor])],
  providers: [HospitalResolver, HospitalService],
  exports: [HospitalService],
})
export class HospitalModule {}
