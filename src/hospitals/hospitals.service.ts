import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as cryptoRandomString from 'crypto-random-string';
import { Op } from 'sequelize';
import { Hospital } from './models/hospital.model';
import { HospitalDoctor } from './models/hospital-doctor.model';
import { UpdateAfterVerificationArg } from './dto/args/updateAfterVerification.dto';
import { UpdateHospitalInput } from './dto/input/hospitalUpdate';
import { Doctor } from '../doctors/models/doctor.model';
import { State } from '../states/models/state.model';
import { Lga } from '../lgas/models/lga.model';
import { Specialty } from '../specialties/model/specialty.model';
import { HospitalWallet } from '../wallets/model/hospital-wallet';
import { Appointment } from '../appointments/models/appointment.model';

@Injectable()
export class HospitalService {
  constructor(
    @InjectModel(Hospital)
    private hospitalModel: typeof Hospital,
    @InjectModel(HospitalDoctor)
    private readonly hospitalDoctorModel: typeof HospitalDoctor,
  ) {}

  // create hospital

  /**
   *
   * @param hospitalID government verified id for a hospital
   * @param email
   * @param emailIsVerified
   */
  async createHospital(
    email: string,
    emailIsVerified: boolean,
  ): Promise<Hospital> {
    let hospital = new Hospital();

    hospital.email = email;
    hospital.emailVerified = emailIsVerified;
    hospital.verified = false;

    // TODO: notify admin service for verification
    hospital = await hospital.save();
    return hospital;
  }

  // on verification by the admin, certain fields will be populated

  /**
   *
   * @param hospitalId government verified id for a hospital
   * @param updates hospital data that was gotten after verifying a given hospital
   * @param verified indicates whether or not it was successfully verified
   */
  async updateAfterVerification(
    hospitalId: string,
    updates: UpdateAfterVerificationArg,
    verified: boolean,
  ): Promise<Hospital> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let hospital = await this.hospitalModel.findOne({
      where: {
        hospitalId,
      },
      include: [
        { model: Doctor, attributes: ['firstName', 'lastName', 'email'] },
        { model: State },
        { model: Lga },
        { model: Specialty },
      ],
    });

    if (!hospital) {
      throw new NotFoundException(`Hospital not found`);
    }

    // if verification was successful, update hospital accordingly else flag hospital (i.e request for another id)
    if (verified) {
      hospital = await hospital.update({
        ...updates,
        verified,
      });
    } else {
      hospital = await hospital.update({
        flag: true,
      });
    }
    return hospital;
  }

  /**
   *
   * @param hospitalId government verified id for a hospital
   */
  async getHospital(hospitalId: string): Promise<Hospital> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.hospitalModel.findByPk(hospitalId, {
      include: [
        { model: Doctor },
        { model: State },
        { model: Lga },
        { model: Specialty },
        { model: HospitalWallet },
        { model: Appointment },
      ],
    });
  }

  async getHospitals(): Promise<Hospital[]> {
    return this.hospitalModel.findAll({
      include: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { model: State },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { model: Lga },
      ],
    });
  }

  async searchHospital(name: string): Promise<Hospital[]> {
    return this.hospitalModel.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { model: State },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { model: Lga },
      ],
    });
  }

  async getHospitalByEmail(email: string): Promise<Hospital> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.hospitalModel.findOne({
      where: {
        email,
      },
      include: [
        { model: Doctor },
        { model: State },
        { model: Lga },
        { model: Specialty },
        { model: HospitalWallet },
        { model: Appointment },
      ],
    });
  }

  async getHospitalByName(name: string): Promise<Hospital> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.hospitalModel.findOne({
      where: {
        name,
      },
      include: [
        { model: Doctor },
        { model: State },
        { model: Lga },
        { model: Specialty },
        { model: HospitalWallet },
        { model: Appointment },
      ],
    });
  }

  async updateHospital(
    hospitalId: string,
    update: UpdateHospitalInput,
  ): Promise<Hospital> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const hospital = await this.hospitalModel.findOne({
      where: {
        hospitalId,
      },
      include: [
        { model: Doctor, attributes: ['firstName', 'lastName', 'email'] },
        { model: State },
        { model: Lga },
        { model: Specialty },
      ],
    });

    if (!hospital) {
      throw new NotFoundException(`Hospital not found`);
    }

    await hospital.update({
      ...update,
    });

    /**
     * add slug if hospital has no slug yet
     * or hospital changed firstName
     * or hospital changed lastName
     * */
    if (!hospital.slug || hospital.changed('name', true)) {
      // create slug from entry and update data
      if (hospital.slug) {
        // when slug exists already
        const random = hospital.slug.split('-')[2];
        const slug = [hospital.name.toLowerCase(), random].join('-');

        await hospital.update({ slug });
      } else {
        // when no slug at all
        const random = cryptoRandomString({
          length: 10,
          type: 'url-safe',
        }).toLowerCase();
        const slug = [hospital.name.toLowerCase(), random].join('-');

        await hospital.update({ slug });
      }
    }

    await hospital.reload();

    // if hospital id is one of the fields to be updated, initiate a request
    // to the admin service for verification
    // if (update.hospitalId && update.hospitalId !== hospitalId) {
    //   hospital = await hospital.update({
    //     ...update,
    //     verified: false,
    //   });
    //   //  TODO: make request to the admin service to notify it of a change in hospitId
    //   console.log('hey admin, i changed my hospitalID, verify me');
    // } else {
    //   hospital = await hospital.update({
    //     ...update,
    //   });
    // }
    return hospital;
  }

  async addDoctorToHospital(
    hospitalId: string,
    doctorId: string,
  ): Promise<Hospital> {
    const check = await this.hospitalDoctorModel.findOne({
      where: {
        hospitalId,
        doctorId,
      },
    });

    if (check) {
      check.isConfirmedByHospital = true;

      await check.save();

      return this.getHospital(hospitalId);
    }

    const hospitalDoctor = new HospitalDoctor();
    hospitalDoctor.hospitalId = hospitalId;
    hospitalDoctor.doctorId = doctorId;
    hospitalDoctor.isConfirmedByHospital = true;

    await hospitalDoctor.save();

    return this.getHospital(hospitalId);
  }

  async removeDoctorFromHospital(
    hospitalId: string,
    doctorId: string,
  ): Promise<Hospital> {
    const check = await this.hospitalDoctorModel.findOne({
      where: {
        hospitalId,
        doctorId,
      },
    });

    if (!check) {
      throw new NotFoundException(`Doctor not associated with hospital`);
    }

    await check.destroy({ force: true });

    return this.getHospital(hospitalId);
  }
}
