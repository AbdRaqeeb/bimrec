import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { State } from './models/state.model';
import { Lga } from '../lgas/models/lga.model';

@Injectable()
export class StatesService {
  constructor(
    @InjectModel(State)
    private stateModel: typeof State,
  ) {}

  async getStates(): Promise<State[]> {
    return this.stateModel.findAll();
  }

  async getStateById(stateId: number): Promise<State> {
    return this.stateModel.findByPk(stateId, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      include: [{ model: Lga, attributes: ['name', 'lgaId'] }],
    });
  }

  async getStateByName(name: string): Promise<State> {
    return this.stateModel.findOne({
      where: {
        name,
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      include: [{ model: Lga, attributes: ['name', 'lgaId'] }],
    });
  }
}
