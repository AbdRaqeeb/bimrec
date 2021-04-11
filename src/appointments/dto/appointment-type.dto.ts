import { ObjectType, Field, ID } from '@nestjs/graphql';

type Choices = 'Text' | 'Voice Call' | 'Video Call';

@ObjectType()
export class AppointmentTypeDTO {
  @Field(() => ID)
  appTypeId: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  choice?: Choices;
}
