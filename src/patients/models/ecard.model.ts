import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Patient } from './patient.model';

@Table
export class ECard extends Model<ECard> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  eCardId: string;

  @ForeignKey(() => Patient)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  patientId: string;

  @Column({
    type: DataType.STRING,
  })
  patientSlug: string;

  @Column(DataType.STRING)
  bloodGroup: string;

  @Column(DataType.STRING)
  genotype: string;

  @Column(DataType.DECIMAL(10, 2))
  weight: number;

  @Column(DataType.DECIMAL(10, 2))
  height: number;

  @Column(DataType.INTEGER)
  bpSystolic: number;

  @Column(DataType.NUMBER)
  bpDiastolic: number;

  @Column(DataType.STRING)
  nokName: string;

  @Column(DataType.STRING)
  nokNumber: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;

  @BelongsTo(() => Patient)
  patient: Patient;
}
