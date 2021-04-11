import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AllowNull,
  HasMany,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { WalletLog } from './wallet-log';

@Table
export class WalletLogType extends Model<WalletLogType> {
  @AllowNull(false)
  @PrimaryKey
  @Column(DataType.STRING)
  walletLogTypeId: string;

  @Column(DataType.STRING)
  description: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;

  @HasMany(() => WalletLog)
  walletLogs: WalletLog[];
}
