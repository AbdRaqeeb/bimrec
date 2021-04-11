import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  Default,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Hospital } from '../../hospitals/models/hospital.model';
import { Doctor } from '../../doctors/models/doctor.model';
import { Patient } from '../../patients/models/patient.model';
import { AppointmentType } from './appointment-type.model';
import { Transaction } from '../../transactions/model/transaction';

type Status =
  | 'pending'
  | 'accepted'
  | 'canceled'
  | 'finished'
  | 'in-session'
  | 'available'
  | 'booked';

type Payment = 'Card' | 'Cash' | 'Transfer';

@Table
export class Appointment extends Model<Appointment> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    autoIncrement: false,
    defaultValue: DataType.UUIDV4,
  })
  appointmentId: string;

  @ForeignKey(() => Hospital)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  hospitalId: string;

  @ForeignKey(() => Doctor)
  @Column(DataType.UUID)
  doctorId: string;

  @ForeignKey(() => Patient)
  @Column(DataType.UUID)
  patientId: string;

  @Column(DataType.STRING)
  startTime: STRING;

  @Column(DataType.STRING)
  endTime: STRING;

  @Column(DataType.DATE)
  date: Date;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.DATE)
  patientNotificationTime: Date;

  @Column(DataType.DATE)
  doctorNotificationTime: Date;

  @ForeignKey(() => AppointmentType)
  @Column(DataType.UUID)
  appTypeId: string;

  @Column(DataType.STRING)
  link: string;

  @Column(DataType.STRING)
  address: string;

  @Default(false)
  @Column(DataType.BOOLEAN)
  doctorFinish: boolean;

  @Default(false)
  @Column(DataType.BOOLEAN)
  patientFinish: boolean;

  @Default(false)
  @Column(DataType.BOOLEAN)
  isPaid: boolean;

  @Default('pending')
  @Column(
    DataType.ENUM(
      'pending',
      'accepted',
      'canceled',
      'finished',
      'in-session',
      'available',
      'booked',
    ),
  )
  status: Status;

  @Default(0.0)
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price: number;

  @Default('Transfer')
  @Column(DataType.ENUM('Card', 'Cash', 'Transfer'))
  payment: Payment;

  @BelongsTo(() => Hospital)
  hospital: Hospital;

  @BelongsTo(() => Doctor)
  doctor: Doctor;

  @BelongsTo(() => Patient)
  patient: Patient;

  @BelongsTo(() => AppointmentType)
  type: AppointmentType;

  @HasMany(() => Transaction)
  transactions: Transaction[];
}
