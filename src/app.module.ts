import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PatientsModule } from './patients/patients.module';
import { StatesModule } from './states/states.module';
import { LgasModule } from './lgas/lgas.module';
import { NextOfKinsModule } from './nextOfKins/kins.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { HospitalModule } from './hospitals/hospitals.module';
import { BiometricModule } from './biometric/biometric.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { NotificationModule } from './notification/notification.module';
import { WalletsModule } from './wallets/wallets.module';
import { TransactionsModule } from './transactions/transactions.module';
import 'dotenv/config';

/**
 * process..env variable types are returned as strings
 * sequelize port does not support type of string
 * I declared the variable types below
 * */

declare let process: {
  env: {
    DATABASE_HOST: string;
    DATABASE_PASSWORD: string;
    DATABASE: string;
    DATABASE_PORT: number;
    DATABASE_USERNAME: string;
  };
};

@Module({
  imports: [
    PatientsModule,
    BiometricModule,
    StatesModule,
    LgasModule,
    NextOfKinsModule,
    AuthModule,
    HospitalModule,
    SpecialtiesModule,
    NotificationModule,
    WalletsModule,
    TransactionsModule,
    AppointmentsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      cors: true,
      installSubscriptionHandlers: true,
    }),
    // Database connection
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      models: [],
      autoLoadModels: true,
      // set synchronize true for dev to reset all tables
      synchronize: false,
    }),
  ],
})
export class AppModule {}
