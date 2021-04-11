import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class AuthInput {
  @IsNotEmpty()
  @Field()
  token: string;
}

@InputType()
export class HospitalAuthInput {
  @IsNotEmpty()
  @Field()
  token: string;

  @IsNotEmpty()
  @Field()
  hospitalId: string;
}
