import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as cryptoRandomString from 'crypto-random-string';
import { Patient } from './models/patient.model';
import { NextOfKinsService } from '../nextOfKins/kins.service';
import { ECard } from './models/ecard.model';
import { ECardInput } from './dto/input/eCard.input';
import { UpdatePatientInput } from './dto/input/update-patient.input';
import { NextOfKinInput } from 'src/nextOfKins/dto/input/nok.input';
import { Lga } from '../lgas/models/lga.model';
import { State } from '../states/models/state.model';
import { NextOfKin } from '../nextOfKins/models/kin.model';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient)
    private patientModel: typeof Patient,
    @InjectModel(ECard)
    private eCardModel: typeof ECard,
    private readonly nextOfKinService: NextOfKinsService,
  ) {}

  async createPatient(email: string): Promise<Patient> {
    const patient = new Patient();

    patient.email = email;

    await patient.save();

    return patient;
  }

  async getPatientByEmail(email: string): Promise<Patient> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.patientModel.findOne({
      where: {
        email,
      },
      include: [{ model: Lga }, { model: State }, { model: NextOfKin }],
    });
  }

  async getPatientById(patientId: string): Promise<Patient> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.patientModel.findByPk(patientId, {
      include: [{ model: Lga }, { model: State }, { model: NextOfKin }],
    });
  }

  /**
   *
   * @param patientId unique identifier for patient
   * @param patientData
   * @param nok
   */
  async updatePatient(
    patientId: string,
    patientData: UpdatePatientInput,
    nok: NextOfKinInput,
  ): Promise<Patient> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const patient = await this.patientModel.findByPk(patientId, {
      include: [
        { model: Lga, attributes: ['name', 'lgaId'] },
        { model: State, attributes: ['name', 'stateId'] },
        { model: NextOfKin },
      ],
    });

    if (!patient) {
      throw new NotFoundException('Patient not found');
    }

    // check to know if patient already created next of kin
    // if so, update the next of kin detail otherwise, create next of kin
    if (nok) {
      let nextOfKin = await this.nextOfKinService.getNextOfKin(patientId);
      if (nextOfKin) {
        nextOfKin = await this.nextOfKinService.updateNextOfKin(patientId, nok);
      } else {
        nextOfKin = await this.nextOfKinService.createNextOfKin(patientId, nok);
      }
      // create next of kin
      const { nextOfKinId } = nextOfKin;

      await patient.update({
        nextOfKinId,
      });
    }

    // update patient - connect next of kin and slug to patient
    await patient.update({
      ...patientData,
    });

    /**
     * add slug if patient has no slug yet
     * or patient changed firstName
     * or patient changed lastName
     * */
    if (
      !patient.slug ||
      patient.changed('firstName', true) ||
      patient.changed('lastName', true)
    ) {
      // create slug from entry and update data
      if (patient.slug) {
        // when slug exists already
        const random = patient.slug.split('-')[2];
        const slug = [
          patient.firstName.toLowerCase(),
          patient.lastName.toLowerCase(),
          random,
        ].join('-');

        await patient.update({
          slug,
        });
      } else {
        // when no slug at all
        const random = cryptoRandomString({
          length: 10,
          type: 'url-safe',
        }).toLowerCase();
        const slug = [
          patient.firstName.toLowerCase(),
          patient.lastName.toLowerCase(),
          random,
        ].join('-');

        await patient.update({ slug });
      }
    }

    // create or update slug for eCard
    const eCard = await this.eCardModel.findOne({
      where: {
        patientId,
      },
    });

    // check to know if patient updated first name or lastName, if so, slug has to be updated in ECard
    if (
      eCard &&
      !(
        patientData.firstName === patient.firstName &&
        patientData.lastName === patient.lastName
      )
    ) {
      await eCard.update({ patientSlug: patient.slug });
    } else {
      const newECard = new ECard();
      newECard.patientSlug = patient.slug;
      newECard.patientId = patientId;
      await newECard.save();
    }

    return patient;
  }

  async createECard(patientId: string, input: ECardInput): Promise<ECard> {
    let eCard: ECard;

    const patient = await this.getPatientById(patientId);
    // check to see if an eCard already exist for this patient
    eCard = await this.eCardModel.findOne({
      where: {
        patientId: patientId,
      },
      include: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { model: Patient },
      ],
    });

    // if there is no eCard in the database for this patient, create a one
    // otherwise, update the existing eCard
    if (eCard) {
      eCard = await eCard.update({
        ...input,
      });
    } else {
      eCard = new ECard();
      eCard.patientId = patientId;
      eCard.patientSlug = patient.slug;
      eCard.bloodGroup = input.bloodGroup;
      eCard.genotype = input.genotype;
      eCard.weight = input.weight;
      eCard.height = input.height;
      eCard.bpDiastolic = input.bpDiastolic;
      eCard.bpSystolic = input.bpSystolic;
      eCard.nokName = input.nokName;
      eCard.nokNumber = input.nokNumber;
      await eCard.save();

      await eCard.reload();
    }
    return eCard;
  }

  async getPatientsECardById(patientId: string): Promise<ECard> {
    return await this.eCardModel.findOne({
      where: {
        patientId,
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      include: [{ model: Patient }],
    });
  }

  async getPatientsECardBySlug(patientSlug: string): Promise<ECard> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.eCardModel.findOne({
      where: {
        patientSlug,
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      include: [{ model: Patient }],
    });
  }

  async setImageUrl(patientId: string, imageUrl: string): Promise<Patient> {
    let patient = await this.patientModel.findOne({
      where: {
        patientId,
      },
    });

    patient = await patient.update({
      image: imageUrl,
    });

    return patient;
  }
}
