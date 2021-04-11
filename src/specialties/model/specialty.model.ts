import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Hospital } from '../../hospitals/models/hospital.model';
import { Doctor } from '../../doctors/models/doctor.model';
import { HospitalSpecialty } from './hospital-specialty.model';
import { DoctorSpecialty } from './doctor-specialty.model';

@Table
export class Specialty extends Model<Specialty> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    autoIncrement: false,
    defaultValue: DataType.UUIDV4,
  })
  specialtyId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;

  @BelongsToMany(() => Hospital, () => HospitalSpecialty)
  hospitals: Hospital[];

  @BelongsToMany(() => Doctor, () => DoctorSpecialty)
  doctors: Doctor[];
}
