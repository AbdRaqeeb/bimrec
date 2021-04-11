import { InputType, Field } from '@nestjs/graphql';

type Status =
  | 'pending'
  | 'accepted'
  | 'canceled'
  | 'finished'
  | 'in-session'
  | 'available'
  | 'booked';

type Payment = 'Card' | 'Cash' | 'Transfer';

@InputType()
export class AppointmentInput {
  @Field()
  time: Date;

  @Field()
  price: number;

  @Field()
  payment: Payment;

  @Field()
  appTypeId: string;

  @Field({ nullable: true })
  link?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  doctorId?: string;

  @Field({ nullable: true })
  patientId?: string;

  @Field({ nullable: true })
  status?: Status;

  @Field({ nullable: true })
  doctorFinish?: boolean;

  @Field({ nullable: true })
  patientFinish?: boolean;

  @Field({ nullable: true })
  patientNotificationTime?: Date;

  @Field({ nullable: true })
  doctorNotificationTime?: Date;
}
