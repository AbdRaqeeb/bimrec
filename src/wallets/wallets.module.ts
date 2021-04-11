import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HospitalWallet } from './model/hospital-wallet';
import { WalletLogType } from './model/wallet-log-type';
import { WalletLog } from './model/wallet-log';
import { WalletsService } from './wallets.service';
import { WalletsResolver } from './wallets.resolver';

@Module({
  imports: [
    SequelizeModule.forFeature([HospitalWallet, WalletLog, WalletLogType]),
  ],
  providers: [WalletsResolver, WalletsService],
  exports: [WalletsService],
})
export class WalletsModule {}
