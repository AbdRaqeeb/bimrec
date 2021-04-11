import {
  Table,
  Model,
  Column,
  DataType,
  Default,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Hospital } from './hospital.model';
import { Doctor } from '../../doctors/models/doctor.model';

@Table
export class HospitalDoctor extends Model<HospitalDoctor> {
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Hospital)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  hospitalId: string;

  @ForeignKey(() => Doctor)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  doctorId: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;

  @Default(false)
  @Column(DataType.BOOLEAN)
  isConfirmedByHospital: boolean;
}
