import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DoctorsService } from './doctors.service';
import { DoctorsResolver } from './doctors.resolver';
import { Doctor } from './models/doctor.model';
import { HospitalDoctor } from '../hospitals/models/hospital-doctor.model';

@Module({
  imports: [SequelizeModule.forFeature([Doctor, HospitalDoctor])],
  providers: [DoctorsResolver, DoctorsService],
  exports: [DoctorsService],
})
export class DoctorsModule {}
