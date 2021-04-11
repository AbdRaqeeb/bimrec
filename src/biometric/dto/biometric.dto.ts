import { ObjectType, Field } from '@nestjs/graphql';
import { ECardDTO } from 'src/patients/dto/eCard.dto';
import { PatientDTO } from 'src/patients/dto/patient.dto';

@ObjectType()
export class BiometricResult {
  @Field()
  percentageMatch?: number;

  @Field()
  patientId?: string;

  @Field()
  eCard?: ECardDTO;

  @Field()
  patient?: PatientDTO;
}
