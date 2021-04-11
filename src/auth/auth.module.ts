import { Module } from '@nestjs/common';
import { PatientsModule } from '../patients/patients.module';
import { HospitalModule } from '../hospitals/hospitals.module';
import { DoctorsModule } from '../doctors/doctors.module';
import { WalletsModule } from '../wallets/wallets.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants, jwtExpire } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Module({
  imports: [
    PatientsModule,
    HospitalModule,
    DoctorsModule,
    WalletsModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtExpire.expiresIn },
    }),
  ],
  providers: [AuthResolver, AuthService, JwtStrategy, GqlAuthGuard],
})
export class AuthModule {}
