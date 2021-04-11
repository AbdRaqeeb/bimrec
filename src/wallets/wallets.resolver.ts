import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HospitalWalletDTO } from './dto/hospital-wallet.dto';
import { WalletsService } from './wallets.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CtxUser } from '../auth/decorators/ctx-user.decorator';
import { HospitalDTO } from '../hospitals/dto/hospital.dto';
import { WalletLogDTO } from './dto/wallet-log.dto';
import { WalletLogTypeDTO } from './dto/wallet-log-type.dto';
import { CreateWalletLog, UpdateWalletLog } from './dto/input/wallet-log.input';

@Resolver(() => HospitalWalletDTO)
export class WalletsResolver {
  constructor(private readonly walletsService: WalletsService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => HospitalWalletDTO, { name: 'getWalletBalance' })
  async getWalletBalance(
    @CtxUser() { hospitalId }: HospitalDTO,
  ): Promise<HospitalWalletDTO> {
    return this.walletsService.getBalance(hospitalId);
  }

  @Query(() => WalletLogDTO, { name: 'getWalletLog' })
  async getWalletLog(
    @Args('walletLogId') walletLogId: string,
  ): Promise<WalletLogDTO> {
    return this.walletsService.getWalletLogById(walletLogId);
  }

  @Query(() => [WalletLogTypeDTO], { name: 'getWalletLogTypes' })
  async getWalletLogTypes(): Promise<WalletLogTypeDTO[]> {
    return this.walletsService.getWalletLogTypes();
  }

  @Query(() => WalletLogTypeDTO, { name: 'getWalletLogType' })
  async getWalletLogType(
    @Args('walletLogTypeId') walletLogTypeId: string,
  ): Promise<WalletLogTypeDTO> {
    return this.walletsService.getWalletLogType(walletLogTypeId);
  }

  @Mutation(() => WalletLogDTO, { name: 'addWalletLog' })
  async addWalletLog(
    @Args('input') input: CreateWalletLog,
  ): Promise<WalletLogDTO> {
    return this.walletsService.addWalletLog(input);
  }

  @Mutation(() => WalletLogDTO, { name: 'updateWalletLog' })
  async updateWalletLog(
    @Args('walletLogId') walletLogId: string,
    @Args('input') input: UpdateWalletLog,
  ): Promise<WalletLogDTO> {
    return this.walletsService.updateWalletLog(walletLogId, input);
  }

  @Mutation(() => WalletLogTypeDTO, { name: 'addWalletLogType' })
  async addWalletLogType(
    @Args('walletLogTypeId') walletLogTypeId: string,
    @Args('description') description: string,
  ): Promise<WalletLogTypeDTO> {
    return this.walletsService.addWalletLogType(walletLogTypeId, description);
  }

  @Mutation(() => WalletLogTypeDTO, { name: 'updateWalletLogType' })
  async updateWalletLogType(
    @Args('walletLogTypeId') walletLogTypeId: string,
    @Args('description') description: string,
  ): Promise<WalletLogTypeDTO> {
    return this.walletsService.updateWalletLogType(
      walletLogTypeId,
      description,
    );
  }
}
