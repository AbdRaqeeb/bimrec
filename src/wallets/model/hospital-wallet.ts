import {
  Table,
  Model,
  Default,
  Column,
  DataType,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
  AllowNull,
  HasMany,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Hospital } from '../../hospitals/models/hospital.model';
import { WalletLog } from './wallet-log';

@Table
export class HospitalWallet extends Model<HospitalWallet> {
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  walletId: string;

  @ForeignKey(() => Hospital)
  @AllowNull(false)
  @Column(DataType.UUID)
  hospitalId: string;

  @Default(0.0)
  @Column(DataType.DECIMAL(10, 2))
  balance: number;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;

  @BelongsTo(() => Hospital)
  hospital: Hospital;

  @HasMany(() => WalletLog)
  walletLogs: WalletLog[];
}
