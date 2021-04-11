import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Specialty } from './model/specialty.model';
import { DoctorSpecialty } from './model/doctor-specialty.model';
import { HospitalSpecialty } from './model/hospital-specialty.model';
import { UpdateSpecialtyInput } from './dto/input/specialty.input';
import { Doctor } from '../doctors/models/doctor.model';
import { Hospital } from '../hospitals/models/hospital.model';

@Injectable()
export class SpecialtiesService {
  constructor(
    @InjectModel(Specialty) private specialtyModel: typeof Specialty,
    @InjectModel(DoctorSpecialty)
    private doctorSpecialtyModel: typeof DoctorSpecialty,
    @InjectModel(HospitalSpecialty)
    private hospitalSpecialtyModel: typeof HospitalSpecialty,
  ) {}

  async createSpecialty(name: string): Promise<Specialty> {
    const specialty = new Specialty();

    specialty.name = name;

    await specialty.save();

    return specialty;
  }

  async getSpecialties(): Promise<Specialty[]> {
    return this.specialtyModel.findAll();
  }

  async getSpecialtyByName(name: string): Promise<Specialty> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const specialty = await this.specialtyModel.findOne({
      where: {
        name,
      },
      include: [{ model: Doctor }, { model: Hospital }],
    });

    if (!specialty) {
      throw new NotFoundException(`Specialty not found`);
    }

    return specialty;
  }

  async getSpecialtyById(specialtyId: string): Promise<Specialty> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const specialty = await this.specialtyModel.findByPk(specialtyId, {
      include: [{ model: Doctor }, { model: Hospital }],
    });

    if (!specialty) {
      throw new NotFoundException(`Specialty not found`);
    }

    return specialty;
  }

  async updateSpecialty({
    name,
    specialtyId,
  }: UpdateSpecialtyInput): Promise<Specialty> {
    const specialty = await this.getSpecialtyById(specialtyId);

    await specialty.update({ name });

    await specialty.reload();

    return specialty;
  }

  async addDoctorsToSpecialty(
    specialtyId: string,
    doctorId: string,
  ): Promise<Specialty> {
    // check if exists
    const check = await this.doctorSpecialtyModel.findOne({
      where: {
        doctorId,
        specialtyId,
      },
    });

    if (check) {
      throw new BadRequestException(`Doctor already added specialty`);
    }

    const doctorSpecialty = new DoctorSpecialty();
    doctorSpecialty.specialtyId = specialtyId;
    doctorSpecialty.doctorId = doctorId;

    await doctorSpecialty.save();

    return this.getSpecialtyById(specialtyId);
  }

  async addHospitalsToSpecialty(
    specialtyId: string,
    hospitalId: string,
  ): Promise<Specialty> {
    // check if exists
    const check = await this.hospitalSpecialtyModel.findOne({
      where: {
        hospitalId,
        specialtyId,
      },
    });

    if (check) {
      throw new BadRequestException(`Doctor already added specialty`);
    }

    const hospitalSpecialty = new HospitalSpecialty();
    hospitalSpecialty.specialtyId = specialtyId;
    hospitalSpecialty.hospitalId = hospitalId;

    await hospitalSpecialty.save();

    return this.getSpecialtyById(specialtyId);
  }
}
