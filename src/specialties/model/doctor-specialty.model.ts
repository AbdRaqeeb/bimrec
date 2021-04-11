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
import { Doctor } from '../../doctors/models/doctor.model';
import { Specialty } from './specialty.model';

@Table
export class DoctorSpecialty extends Model<DoctorSpecialty> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    autoIncrement: false,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @PrimaryKey
  @ForeignKey(() => Doctor)
  @Column(DataType.UUID)
  doctorId: string;

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
