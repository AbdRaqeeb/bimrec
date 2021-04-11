import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ECardInput {
  @Field({ nullable: true })
  bloodGroup: string;

  @Field({ nullable: true })
  genotype: string;

  @Field({ nullable: true })
  weight: number;

  @Field({ nullable: true })
  height: number;

  @Field({ nullable: true })
  bpSystolic: number;

  @Field({ nullable: true })
  bpDiastolic: number;

  @Field({ nullable: true })
  nokName: string;

  @Field({ nullable: true })
  nokNumber: string;
}
