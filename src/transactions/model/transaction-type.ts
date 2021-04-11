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
import { Transaction } from './transaction';

@Table
export class TransactionType extends Model<TransactionType> {
  @AllowNull(false)
  @PrimaryKey
  @Column(DataType.STRING)
  trxTypeId: string;

  @Column(DataType.STRING)
  description: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;

  @HasMany(() => Transaction)
  transactions: Transaction[];
}
