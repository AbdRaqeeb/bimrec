import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class EmailNotificationDTO {
  @Field()
  message: string;

  @Field()
  success: boolean;
}
