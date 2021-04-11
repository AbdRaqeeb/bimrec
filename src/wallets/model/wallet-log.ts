import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  Default,
  AllowNull,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Transaction } from '../../transactions/model/transaction';
import { WalletLogType } from './wallet-log-type';
import { HospitalWallet } from './hospital-wallet';

@Table
export class WalletLog extends Model<WalletLog> {
  @AllowNull(false)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  walletLogId: string;

  @ForeignKey(() => Transaction)
  @Column(DataType.UUID)
  trxId: string;

  @ForeignKey(() => WalletLogType)
  @Column(DataType.STRING)
  walletLogTypeId: string;

  @ForeignKey(() => HospitalWallet)
  @Column(DataType.UUID)
  walletId: string;

  @Column(DataType.DECIMAL(10, 2))
  balanceBefore: number;

  @Column(DataType.DECIMAL(10, 2))
  balanceAfter: number;

  @Column(DataType.DECIMAL(10, 2))
  amount: number;

  @Column(DataType.TEXT)
  remarks: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;

  @BelongsTo(() => WalletLogType)
  walletLogType: WalletLogType;

  @BelongsTo(() => Transaction)
  transaction: Transaction;

  @BelongsTo(() => HospitalWallet)
  wallet: HospitalWallet;
}
