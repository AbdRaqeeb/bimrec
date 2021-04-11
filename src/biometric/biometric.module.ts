import { Module } from '@nestjs/common';
import { PatientsModule } from 'src/patients/patients.module';
import { FacialBiometricResolver } from './biometric.resolver';
import { BiometricService } from './biometric.service';

@Module({
  imports: [PatientsModule],
  providers: [FacialBiometricResolver, BiometricService],
  exports: [BiometricService],
})
export class BiometricModule {}
