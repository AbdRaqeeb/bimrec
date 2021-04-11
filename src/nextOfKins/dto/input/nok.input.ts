import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class NextOfKinInput {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  phoneNumber: string;

  @Field({ nullable: true })
  relationship: string;

  @Field({ nullable: true })
  address: string;
}
