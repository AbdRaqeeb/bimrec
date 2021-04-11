import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Lga } from 'src/lgas/models/lga.model';
import { Patient } from '../../patients/models/patient.model';
import { Doctor } from '../../doctors/models/doctor.model';

@Table
export class State extends Model<State> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  stateId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;

  @HasMany(() => Lga)
  lgas: Lga[];

  @HasMany(() => Patient)
  patients: Patient[];

  @HasMany(() => Doctor)
  doctors: Doctor[];
}
