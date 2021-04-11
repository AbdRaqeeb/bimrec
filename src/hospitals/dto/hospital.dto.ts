import { Field, ObjectType } from '@nestjs/graphql';
import { StateDTO } from '../../states/dto/state.dto';
import { LgaDTO } from '../../lgas/dto/lga.dto';
import { DoctorDTO } from '../../doctors/dto/doctor.dto';
import { SpecialtyDTO } from '../../specialties/dto/specialty.dto';
import { HospitalWalletDTO } from '../../wallets/dto/hospital-wallet.dto';
import { AppointmentDTO } from '../../appointments/dto/appointment.dto';

@ObjectType()
export class HospitalDTO {
  @Field()
  hospitalId: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  emailVerified: boolean;

  @Field({ nullable: true })
  phoneNumber?: string;

  @Field({ nullable: true })
  ward?: string;

  @Field({ nullable: true })
  facilityCode?: string;

  @Field({ nullable: true })
  facilityLevel?: string;

  @Field({ nullable: true })
  ownership?: string;

  @Field({ nullable: true })
  streetAndNumber?: string;

  @Field({ nullable: true })
  registrationNumber?: string;

  @Field({ nullable: true })
  facebook?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  twitter?: string;

  @Field({ nullable: true })
  instagram?: string;

  @Field({ nullable: true })
  downVotes?: number;

  @Field({ nullable: true })
  upVotes?: number;

  @Field({ nullable: true })
  star?: number;

  @Field({ nullable: true })
  verified?: boolean;

  @Field({ nullable: true })
  flag?: boolean;

  @Field({ nullable: true })
  slug: string;

  @Field({ nullable: true })
  role: string;

  @Field(() => StateDTO)
  state?: StateDTO;

  @Field(() => LgaDTO)
  lga?: LgaDTO;

  @Field(() => [DoctorDTO], { nullable: 'items' })
  doctors: DoctorDTO[];

  @Field(() => [SpecialtyDTO], { nullable: 'items' })
  specialties: SpecialtyDTO[];

  @Field(() => HospitalWalletDTO, { nullable: true })
  wallet?: HospitalWalletDTO;

  @Field(() => [AppointmentDTO], { nullable: true })
  appointments?: AppointmentDTO[];
}
