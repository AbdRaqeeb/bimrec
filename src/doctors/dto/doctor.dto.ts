import { ObjectType, Field, ID } from '@nestjs/graphql';
import { HospitalDTO } from '../../hospitals/dto/hospital.dto';
import { LgaDTO } from '../../lgas/dto/lga.dto';
import { StateDTO } from '../../states/dto/state.dto';
import { SpecialtyDTO } from '../../specialties/dto/specialty.dto';

type Status = 'ACTIVE' | 'DELETED' | 'PENDING';

@ObjectType()
export class DoctorDTO {
  @Field(() => ID)
  doctorId: string;

  @Field()
  email: string;

  @Field()
  firstName?: string;

  @Field()
  lastName?: string;

  @Field()
  image?: string;

  @Field()
  twitter?: string;

  @Field()
  instagram?: string;

  @Field()
  facebook?: string;

  @Field()
  status: Status;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  phoneNumber: string;

  @Field({ nullable: true })
  slug: string;

  @Field({ nullable: true })
  registrationNumber: string;

  @Field()
  role: string;

  @Field(() => [HospitalDTO], { nullable: 'items' })
  hospitals: HospitalDTO[];

  @Field(() => LgaDTO)
  lga?: LgaDTO;

  @Field(() => StateDTO)
  state?: StateDTO;

  @Field(() => [SpecialtyDTO], { nullable: 'items' })
  specialties?: SpecialtyDTO[];
}
