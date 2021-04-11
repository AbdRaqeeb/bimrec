import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Appointment } from './models/appointment.model';
import { Transaction } from '../transactions/model/transaction';
import { TransactionResult } from '../transactions/model/transaction-result';
import { WalletLog } from '../wallets/model/wallet-log';
import { AppointmentType } from './models/appointment-type.model';
import { AppointmentsService } from './appointments.service';
import { AppointmentsResolver } from './appointments.resolver';
import { TransactionsModule } from '../transactions/transactions.module';
import { WalletsModule } from '../wallets/wallets.module';

@Module({
  imports: [
    TransactionsModule,
    WalletsModule,
    SequelizeModule.forFeature([
      AppointmentType,
      Appointment,
      Transaction,
      TransactionResult,
      WalletLog,
    ]),
  ],
  providers: [AppointmentsService, AppointmentsResolver],
  exports: [AppointmentsService],
})
export class AppointmentsModule {}
