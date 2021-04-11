import {
  Table,
  Model,
  Column,
  DataType,
  Default,
  HasMany,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Appointment } from './appointment.model';

type Choices = 'Text' | 'Voice Call' | 'Video Call';

@Table
export class AppointmentType extends Model<AppointmentType> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  appTypeId: string;

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

  @Default('Text')
  @Column(DataType.ENUM('Text', 'Voice Call', 'Video Call'))
  choice: Choices;

  @HasMany(() => Appointment)
  appointments: Appointment[];
}
