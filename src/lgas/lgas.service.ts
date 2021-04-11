import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Lga } from './models/lga.model';

@Injectable()
export class LgasService {
  constructor(
    @InjectModel(Lga)
    private lgaModel: typeof Lga,
  ) {}

  async getLgas(): Promise<Lga[]> {
    return this.lgaModel.findAll();
  }
}
