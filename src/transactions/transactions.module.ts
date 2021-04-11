import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TransactionsResolver } from './transactions.resolver';
import { TransactionsService } from './transactions.service';
import { Transaction } from './model/transaction';
import { TransactionResult } from './model/transaction-result';
import { TransactionType } from './model/transaction-type';

@Module({
  imports: [
    SequelizeModule.forFeature([
      TransactionType,
      TransactionResult,
      Transaction,
    ]),
  ],
  providers: [TransactionsService, TransactionsResolver],
  exports: [TransactionsService],
})
export class TransactionsModule {}
