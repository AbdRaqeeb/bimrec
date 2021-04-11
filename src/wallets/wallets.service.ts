import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HospitalWallet } from './model/hospital-wallet';
import { WalletLog } from './model/wallet-log';
import { WalletLogType } from './model/wallet-log-type';
import { Transaction } from '../transactions/model/transaction';
import { CreateWalletLog, UpdateWalletLog } from './dto/input/wallet-log.input';

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel(HospitalWallet)
    private readonly hospitalWalletModel: typeof HospitalWallet,
    @InjectModel(WalletLogType)
    private readonly walletLogTypeModel: typeof WalletLogType,
    @InjectModel(WalletLog)
    private readonly walletLogModel: typeof WalletLog,
  ) {}

  async createWallet(hospitalId: string): Promise<HospitalWallet> {
    const wallet = new HospitalWallet();
    wallet.hospitalId = hospitalId;

    await wallet.save();

    return wallet;
  }

  async getBalance(hospitalId: string): Promise<HospitalWallet> {
    return this.hospitalWalletModel.findOne({
      where: {
        hospitalId,
      },
    });
  }

  async getWalletLogById(walletLogId: string): Promise<WalletLog> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.walletLogModel.findByPk(walletLogId, {
      include: [{ model: Transaction }, { model: WalletLogType }],
    });
  }

  async addWalletLog(input: CreateWalletLog): Promise<WalletLog> {
    const walletLog = new WalletLog();

    await walletLog.update(input);

    await walletLog.reload();

    return walletLog;
  }

  async updateWalletLog(
    walletLogId: string,
    input: UpdateWalletLog,
  ): Promise<WalletLog> {
    const walletLog = await this.getWalletLogById(walletLogId);

    if (!walletLog) {
      throw new NotFoundException('Wallet log not found');
    }

    await walletLog.update(input);

    await walletLog.reload();

    return walletLog;
  }

  async addWalletLogType(
    walletLogTypeId: string,
    description: string,
  ): Promise<WalletLogType> {
    const walletLogType = new WalletLogType();
    walletLogType.walletLogTypeId = walletLogTypeId;
    walletLogType.description = description;

    await walletLogType.save();

    return walletLogType;
  }

  async getWalletLogType(walletLogTypeId: string): Promise<WalletLogType> {
    return this.walletLogTypeModel.findByPk(walletLogTypeId, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      include: [{ model: WalletLog }],
    });
  }

  async getWalletLogTypes(): Promise<WalletLogType[]> {
    return this.walletLogTypeModel.findAll();
  }

  async updateWalletLogType(
    walletLogTypeId: string,
    description: string,
  ): Promise<WalletLogType> {
    const walletLogType = await this.getWalletLogType(walletLogTypeId);

    if (!walletLogType) {
      throw new NotFoundException('Wallet log type not found');
    }

    await walletLogType.update({
      walletLogTypeId,
      description,
    });

    await walletLogType.reload();

    return walletLogType;
  }
}
