import {
  Table,
  Column,
  Model,
  DataType,
  IsEmail,
  IsUrl,
  ForeignKey,
  BelongsTo,
  HasOne,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from 'sequelize-typescript';
import { Lga } from '../../lgas/models/lga.model';
import { State } from '../../states/models/state.model';
import { NextOfKin } from '../../nextOfKins/models/kin.model';
import { ECard } from './ecard.model';
import { Appointment } from '../../appointments/models/appointment.model';
import { Transaction } from '../../transactions/model/transaction';

@Table
export class Patient extends Model<Patient> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  patientId: string;

  @Column(DataType.STRING)
  firstName: string;

  @Column(DataType.STRING)
  lastName: string;

  @IsEmail
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column(DataType.DATE)
  dob: Date;

  @Column(DataType.STRING)
  gender: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  identityNumber: string;

  @Column(DataType.STRING)
  twitter: string;

  @Column(DataType.STRING)
  facebook: string;

  @Column(DataType.STRING)
  instagram: string;

  @IsUrl
  @Column(DataType.STRING)
  image: string;

  @ForeignKey(() => State)
  @Column(DataType.INTEGER)
  stateId: number;

  @ForeignKey(() => Lga)
  @Column(DataType.INTEGER)
  lgaId: number;

  @Column(DataType.TEXT)
  streetAndNumber: string;

  @Column(DataType.STRING)
  identityType: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'patient',
  })
  role: string;

  @Column({
    type: DataType.STRING,
  })
  slug: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;

  @BelongsTo(() => Lga)
  lga: Lga;

  @BelongsTo(() => State)
  state: State;

  @HasOne(() => NextOfKin)
  kin: NextOfKin;

  @HasOne(() => ECard)
  card: ECard;

  @HasMany(() => Appointment)
  appointments: Appointment[];

  @HasMany(() => Transaction)
  transaction: Transaction;
}
