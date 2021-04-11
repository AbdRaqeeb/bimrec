import {
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Hospital } from '../../hospitals/models/hospital.model';
import { Specialty } from './specialty.model';

@Table
export class HospitalSpecialty extends Model<HospitalSpecialty> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @PrimaryKey
  @ForeignKey(() => Hospital)
  @Column(DataType.UUID)
  hospitalId: string;

  @PrimaryKey
  @ForeignKey(() => Specialty)
  @Column(DataType.UUID)
  specialtyId: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;
}
