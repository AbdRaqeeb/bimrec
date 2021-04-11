import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Specialty } from './model/specialty.model';
import { DoctorSpecialty } from './model/doctor-specialty.model';
import { HospitalSpecialty } from './model/hospital-specialty.model';
import { SpecialtiesService } from './specialties.service';
import { SpecialtiesResolver } from './specialties.resolver';

@Module({
  imports: [
    SequelizeModule.forFeature([DoctorSpecialty, HospitalSpecialty, Specialty]),
  ],
  providers: [SpecialtiesService, SpecialtiesResolver],
  exports: [SpecialtiesService],
})
export class SpecialtiesModule {}
