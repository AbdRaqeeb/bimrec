import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class BookAppointmentInput {
  @Field(() => ID)
  appointmentId: string;

  @Field()
  description?: string;
}
