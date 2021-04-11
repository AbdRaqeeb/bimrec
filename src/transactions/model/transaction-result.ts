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
import { Transaction } from './transaction';

@Table
export class TransactionResult extends Model<TransactionResult> {
  @AllowNull(false)
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  trxResultId: string;

  @Column(DataType.STRING)
  status: string;

  @Column(DataType.STRING)
  trxRef: string;

  @Column(DataType.STRING)
  flwRef: string;

  @Column(DataType.BIGINT)
  amount: number;

  @Column(DataType.BIGINT)
  chargedAmount: number;

  @Column(DataType.STRING)
  currency: string;

  @Column(DataType.STRING)
  paymentType: string;

  @Column(DataType.STRING)
  processorResponse: string;

  @Column(DataType.STRING)
  hospitalId: string;

  @Column(DataType.STRING)
  hospitalName: string;

  @Column(DataType.STRING)
  patientId: string;

  @Column(DataType.STRING)
  patientName: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;

  @ForeignKey(() => Transaction)
  @PrimaryKey
  @Column(DataType.STRING)
  trxId: string;

  @BelongsTo(() => Transaction)
  transaction: Transaction;
}
