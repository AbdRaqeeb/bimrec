import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  IsUrl,
  Default,
  BelongsTo,
  BelongsToMany,
  HasMany,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Specialty } from '../../specialties/model/specialty.model';
import { Hospital } from '../../hospitals/models/hospital.model';
import { Lga } from '../../lgas/models/lga.model';
import { State } from '../../states/models/state.model';
import { DoctorSpecialty } from '../../specialties/model/doctor-specialty.model';
import { Appointment } from '../../appointments/models/appointment.model';
import { HospitalDoctor } from '../../hospitals/models/hospital-doctor.model';

type Status = 'ACTIVE' | 'DELETED' | 'PENDING';

@Table
export class Doctor extends Model<Doctor> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  doctorId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column(DataType.STRING)
  firstName: string;

  @Column(DataType.STRING)
  lastName: string;

  @Column(DataType.STRING)
  twitter: string;

  @Column(DataType.STRING)
  facebook: string;

  @Column(DataType.STRING)
  instagram: string;

  @IsUrl
  @Column(DataType.STRING)
  image: string;

  @Column(DataType.STRING)
  phoneNumber: string;

  @Column(DataType.STRING)
  streetAndNumber: string;

  @Column(DataType.STRING)
  slug: string;

  @Column(DataType.STRING)
  registrationNumber: string;

  @Column(DataType.STRING)
  title: string;

  @Default('PENDING')
  @Column(DataType.ENUM('ACTIVE', 'PENDING', 'DELETED'))
  status: Status;

  @Default('doctor')
  @Column(DataType.STRING)
  role: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;

  @ForeignKey(() => State)
  @Column(DataType.INTEGER)
  stateId: number;

  @ForeignKey(() => Lga)
  @Column(DataType.INTEGER)
  lgaId: number;

  @BelongsTo(() => Lga)
  lga: Lga;

  @BelongsTo(() => State)
  state: State;

  @BelongsToMany(() => Hospital, () => HospitalDoctor)
  hospitals: Array<Hospital & { HospitalDoctor: HospitalDoctor }>;

  @BelongsToMany(() => Specialty, () => DoctorSpecialty)
  specialties: Array<Specialty & { DoctorSpecialty: DoctorSpecialty }>;

  @HasMany(() => Appointment)
  appointments: Appointment[];
}
