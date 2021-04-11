import {
  Table,
  Column,
  Model,
  DataType,
  IsEmail,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  HasMany,
  Default,
  HasOne,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Lga } from '../../lgas/models/lga.model';
import { State } from '../../states/models/state.model';
import { Specialty } from '../../specialties/model/specialty.model';
import { HospitalSpecialty } from '../../specialties/model/hospital-specialty.model';
import { Doctor } from '../../doctors/models/doctor.model';
import { Appointment } from '../../appointments/models/appointment.model';
import { HospitalDoctor } from './hospital-doctor.model';
import { HospitalWallet } from '../../wallets/model/hospital-wallet';

@Table
export class Hospital extends Model<Hospital> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  hospitalId: string;

  @Column(DataType.STRING)
  name: string;

  @IsEmail
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column(DataType.BOOLEAN)
  emailVerified: boolean;

  @Column(DataType.STRING)
  phoneNumber: string;

  @Column(DataType.STRING)
  ward: string;

  @Column(DataType.STRING)
  facilityCode: string;

  @Column(DataType.STRING)
  facilityLevel: string;

  @Column(DataType.STRING)
  ownership: string;

  @Column(DataType.STRING)
  streetAndNumber: string;

  @Column(DataType.STRING)
  image: string;

  @Column(DataType.STRING)
  facebook: string;

  @Column(DataType.STRING)
  twitter: string;

  @Column(DataType.STRING)
  instagram: string;

  @Column(DataType.STRING)
  registrationNumber: string;

  @Column(DataType.INTEGER)
  downVotes: number;

  @Column(DataType.INTEGER)
  upVotes: number;

  @Default(0.0)
  @Column(DataType.DECIMAL(4, 2))
  star: number;

  @Column(DataType.BOOLEAN)
  verified: boolean;

  @Column(DataType.BOOLEAN)
  flag: boolean;

  @Column(DataType.STRING)
  slug: string;

  @Column({
    type: DataType.STRING,
    defaultValue: 'hospital',
  })
  role: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;

  @ForeignKey(() => State)
  @Column(DataType.STRING)
  stateId: string;

  @ForeignKey(() => Lga)
  @Column(DataType.STRING)
  lgaId: string;

  @BelongsToMany(() => Doctor, () => HospitalDoctor)
  doctors: Array<Doctor & { HospitalDoctor: HospitalDoctor }>;

  @HasMany(() => Appointment)
  appointments: Appointment[];

  @BelongsToMany(() => Specialty, () => HospitalSpecialty)
  specialties: Array<Specialty & { HospitalSpecialty: HospitalSpecialty }>;

  @BelongsTo(() => State)
  state: State;

  @BelongsTo(() => Lga)
  lga: Lga;

  @HasOne(() => HospitalWallet)
  wallet: HospitalWallet;
}
