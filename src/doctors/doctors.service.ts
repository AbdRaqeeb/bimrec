import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as cryptoRandomString from 'crypto-random-string';
import { InjectModel } from '@nestjs/sequelize';
import { Doctor } from './models/doctor.model';
import { Hospital } from '../hospitals/models/hospital.model';
import { HospitalDoctor } from '../hospitals/models/hospital-doctor.model';
import { State } from '../states/models/state.model';
import { Lga } from '../lgas/models/lga.model';
import { Specialty } from '../specialties/model/specialty.model';
import { UpdateDoctorInput } from './dto/input/update-doctor.input';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectModel(Doctor) private doctorModel: typeof Doctor,
    @InjectModel(HospitalDoctor)
    private hospitalDoctorModel: typeof HospitalDoctor,
  ) {}

  async createDoctor(email: string): Promise<Doctor> {
    const doctor = new Doctor();

    doctor.email = email;

    await doctor.save();

    return doctor;
  }

  async getDoctorById(doctorId: string): Promise<Doctor> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.doctorModel.findByPk(doctorId, {
      include: [
        { model: Hospital },
        { model: State },
        { model: Lga },
        { model: Specialty },
      ],
    });
  }

  async getDoctorByEmail(email: string): Promise<Doctor> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.doctorModel.findOne({
      where: {
        email,
      },
      include: [
        { model: Hospital },
        { model: State },
        { model: Lga },
        { model: Specialty },
      ],
    });
  }

  async updateDoctor(
    doctorId: string,
    input: UpdateDoctorInput,
  ): Promise<Doctor> {
    const doctor = await this.getDoctorById(doctorId);

    if (!doctor) {
      throw new NotFoundException(`Doctor not found`);
    }

    await doctor.update({
      ...input,
    });

    /**
     * add slug if doctor has no slug yet
     * or doctor changed firstName
     * or doctor changed lastName
     * */
    if (
      !doctor.slug ||
      doctor.changed('firstName', true) ||
      doctor.changed('lastName', true)
    ) {
      // create slug from entry and update data
      if (doctor.slug) {
        // when slug exists already
        const random = doctor.slug.split('-')[2];
        const slug = [
          doctor.firstName.toLowerCase(),
          doctor.lastName.toLowerCase(),
          random,
        ].join('-');

        await doctor.update({ slug });
      } else {
        // when no slug at all
        const random = cryptoRandomString({
          length: 10,
          type: 'url-safe',
        }).toLowerCase();
        const slug = [
          doctor.firstName.toLowerCase(),
          doctor.lastName.toLowerCase(),
          random,
        ].join('-');

        await doctor.update({ slug });
      }
    }

    await doctor.reload();

    return doctor;
  }

  async joinHospitalRequest(
    doctorId: string,
    hospitalId: string,
  ): Promise<Doctor> {
    const check = await this.hospitalDoctorModel.findOne({
      where: {
        hospitalId,
        doctorId,
      },
    });

    if (check) {
      throw new BadRequestException(`Hospital request already made`);
    }

    const hospitalDoctor = new HospitalDoctor();
    hospitalDoctor.doctorId = doctorId;
    hospitalDoctor.hospitalId = hospitalId;

    await hospitalDoctor.save();

    return this.getDoctorById(doctorId);
  }

  async cancelHospitalRequest(
    doctorId: string,
    hospitalId: string,
  ): Promise<Doctor> {
    const check = await this.hospitalDoctorModel.findOne({
      where: {
        hospitalId,
        doctorId,
      },
    });

    if (!check) {
      throw new NotFoundException(`Request not found`);
    }

    await check.destroy({ force: true });

    return this.getDoctorById(doctorId);
  }
}
