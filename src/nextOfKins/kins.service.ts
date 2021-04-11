import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NextOfKinInput } from './dto/input/nok.input';
import { NextOfKin } from './models/kin.model';

@Injectable()
export class NextOfKinsService {
  constructor(
    @InjectModel(NextOfKin)
    private readonly nextOfKinModel: typeof NextOfKin,
  ) {}

  async getNextOfKin(patientId: string): Promise<NextOfKin> {
    return this.nextOfKinModel.findOne({
      where: {
        patientId,
      },
    });
  }

  async createNextOfKin(
    patientId: string,
    input: NextOfKinInput,
  ): Promise<NextOfKin> {
    let nok = new NextOfKin();
    nok.firstName = input.firstName;
    nok.lastName = input.lastName;
    nok.address = input.address;
    nok.phoneNumber = input.phoneNumber;
    nok.relationship = input.relationship;
    nok.patientId = patientId;

    nok = await nok.save();

    return nok;
  }

  async updateNextOfKin(
    patientId: string,
    input: NextOfKinInput,
  ): Promise<NextOfKin> {
    let nok = await this.nextOfKinModel.findOne({
      where: {
        patientId,
      },
    });
    nok = await nok.update({ ...input });
    return nok;
  }
}
