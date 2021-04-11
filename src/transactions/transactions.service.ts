import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Transaction } from './model/transaction';
import { Sequelize } from 'sequelize-typescript';
import { TransactionResult } from './model/transaction-result';
import {
  CreateTransactionInput,
  UpdateTransactionInput,
} from './dto/input/transaction.input';
import { TransactionType } from './model/transaction-type';
import {
  CreateTransactionResult,
  UpdateTransactionResult,
} from './dto/input/transaction-result.input';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction)
    private readonly transactionModel: typeof Transaction,
    @InjectModel(TransactionResult)
    private readonly transactionResultModel: typeof TransactionResult,
    @InjectModel(TransactionType)
    private readonly transactionTypeModel: typeof TransactionType,
    private sequelize: Sequelize,
  ) {}

  async createTransaction(input: CreateTransactionInput): Promise<Transaction> {
    const { hospitalId, amount, appointmentId, patientId } = input;
    const transaction = new Transaction();
    transaction.hospitalId = hospitalId;
    transaction.patientId = patientId;
    transaction.amount = amount;
    transaction.appointmentId = appointmentId;

    await transaction.save();

    return transaction;
  }

  async getTransactionById(trxId: string): Promise<Transaction> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.transactionModel.findByPk(trxId, {
      include: [{ model: TransactionResult }, { model: TransactionType }],
    });
  }

  async getTransactionByExtTxRef(extTrxRef: string): Promise<Transaction> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.transactionModel.findOne({
      where: {
        extTrxRef,
      },
      include: [{ model: TransactionResult }, { model: TransactionType }],
    });
  }

  async updateTransaction(
    trxId: string,
    input: UpdateTransactionInput,
  ): Promise<Transaction> {
    const transaction = await this.getTransactionById(trxId);

    if (!transaction) {
      throw new NotFoundException('Transaction not found');
    }

    await transaction.update(input);

    await transaction.reload();

    return transaction;
  }

  async createTransactionResult(
    input: CreateTransactionResult,
  ): Promise<TransactionResult> {
    const transactionResult = new TransactionResult();

    await transactionResult.update(input);

    await transactionResult.reload();

    return transactionResult;
  }

  async getTransactionResultByTrxId(trxId: string): Promise<TransactionResult> {
    return this.transactionResultModel.findByPk(trxId, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      include: [{ model: Transaction }],
    });
  }

  async updateTransactionResult(
    trxId: string,
    input: UpdateTransactionResult,
  ): Promise<TransactionResult> {
    const transactionResult = await this.getTransactionResultByTrxId(trxId);

    if (!transactionResult) {
      throw new NotFoundException('Transaction result not found');
    }

    await transactionResult.update(input);

    await transactionResult.reload();

    return transactionResult;
  }

  async addTransactionType(
    trxTypeId: string,
    description: string,
  ): Promise<TransactionType> {
    const transactionType = new TransactionType();
    transactionType.trxTypeId = trxTypeId;
    transactionType.description = description;

    await transactionType.save();

    return transactionType;
  }

  async getTransactionType(trxTypeId: string): Promise<TransactionType> {
    return this.transactionTypeModel.findByPk(trxTypeId, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      include: [{ model: Transaction }],
    });
  }

  async getTransactionTypes(): Promise<TransactionType[]> {
    return this.transactionTypeModel.findAll();
  }

  async updateTransactionType(
    trxTypeId: string,
    description: string,
  ): Promise<TransactionType> {
    const transactionType = await this.getTransactionType(trxTypeId);

    await transactionType.update({
      trxTypeId,
      description,
    });

    await transactionType.reload();

    return transactionType;
  }
}
