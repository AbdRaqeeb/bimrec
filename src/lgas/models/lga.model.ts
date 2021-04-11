import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  BelongsTo,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { State } from 'src/states/models/state.model';
import { Patient } from '../../patients/models/patient.model';
import { Doctor } from '../../doctors/models/doctor.model';

@Table
export class Lga extends Model<Lga> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  lgaId: number;

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

  @ForeignKey(() => State)
  @Column({
    type: DataType.INTEGER,
  })
  stateId: number;

  @BelongsTo(() => State)
  state: State;

  @HasMany(() => Patient)
  patients: Patient[];

  @HasMany(() => Doctor)
  doctors: Doctor[];
}
