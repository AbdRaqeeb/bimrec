import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateAfterVerificationArg {
  @Field()
  name: string;

  @Field()
  state: string;

  @Field()
  lga: string;

  @Field()
  ward: string;

  @Field()
  facilityLevel: string;

  @Field()
  ownership: string;
}
