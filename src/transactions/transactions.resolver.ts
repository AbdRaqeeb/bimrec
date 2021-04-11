import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TransactionsService } from './transactions.service';
import { TransactionDTO } from './dto/transction.dto';
import { TransactionResultDTO } from './dto/transaction-result.dto';
import {
  CreateTransactionInput,
  UpdateTransactionInput,
} from './dto/input/transaction.input';
import { CreateTransactionResult } from './dto/input/transaction-result.input';
import { TransactionTypeDTO } from './dto/transaction-type.dto';

@Resolver()
export class TransactionsResolver {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Query(() => TransactionDTO, { name: 'getTransactionByExtTrxRef' })
  async getTrxByExtTrxRef(
    @Args('extTrxRef') extTrxRef: string,
  ): Promise<TransactionDTO> {
    return this.transactionsService.getTransactionByExtTxRef(extTrxRef);
  }

  @Query(() => TransactionDTO, { name: 'getTransactionByTrxId' })
  async getTrxById(@Args('trxId') trxId: string): Promise<TransactionDTO> {
    return this.transactionsService.getTransactionById(trxId);
  }

  @Query(() => TransactionResultDTO, { name: 'getTransactionResultByTrxId' })
  async getTrxResultByTrxId(
    @Args('trxId') trxId: string,
  ): Promise<TransactionResultDTO> {
    return this.transactionsService.getTransactionResultByTrxId(trxId);
  }

  @Mutation(() => TransactionDTO, { name: 'createTransaction' })
  async createTransaction(
    @Args('trx') trx: CreateTransactionInput,
  ): Promise<TransactionDTO> {
    return this.transactionsService.createTransaction(trx);
  }

  @Mutation(() => TransactionDTO, { name: 'createTransaction' })
  async updateTransaction(
    @Args('trxId') trxId: string,
    @Args('trx') trx: UpdateTransactionInput,
  ): Promise<TransactionDTO> {
    return this.transactionsService.updateTransaction(trxId, trx);
  }

  @Mutation(() => TransactionResultDTO, { name: 'addTransactionResult' })
  async createTransactionResult(
    @Args('trx') trx: CreateTransactionResult,
  ): Promise<TransactionResultDTO> {
    return this.transactionsService.createTransactionResult(trx);
  }

  @Mutation(() => TransactionResultDTO, { name: 'updateTransactionResult' })
  async updateTransactionResult(
    @Args('trxId') trxId: string,
    @Args('trx') trx: CreateTransactionResult,
  ): Promise<TransactionResultDTO> {
    return this.transactionsService.updateTransactionResult(trxId, trx);
  }

  @Mutation(() => TransactionTypeDTO, { name: 'addTransactionType' })
  async addTransactionType(
    @Args('trxTypeId') trxTypeId: string,
    @Args('description') description: string,
  ): Promise<TransactionTypeDTO> {
    return this.transactionsService.addTransactionType(trxTypeId, description);
  }

  @Mutation(() => TransactionTypeDTO, { name: 'updateTransactionType' })
  async updateTransactionType(
    @Args('trxTypeId') trxTypeId: string,
    @Args('description') description: string,
  ): Promise<TransactionTypeDTO> {
    return this.transactionsService.updateTransactionType(
      trxTypeId,
      description,
    );
  }

  @Query(() => TransactionTypeDTO, { name: 'getTransactionType' })
  async getTransactionType(
    @Args('trxTypeId') trxTypeId: string,
  ): Promise<TransactionTypeDTO> {
    return this.transactionsService.getTransactionType(trxTypeId);
  }

  @Query(() => [TransactionTypeDTO], { name: 'getTransactionType' })
  async getTransactionTypes(): Promise<TransactionTypeDTO[]> {
    return this.transactionsService.getTransactionTypes();
  }
}
