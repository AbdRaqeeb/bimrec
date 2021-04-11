import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { EmailNotificationDTO } from './dto/notification.dto';
import { NotificationService } from './notification.service';

@Resolver()
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Mutation(() => EmailNotificationDTO, { name: 'JoinEmailList' })
  async addToMailingList(
    @Args('mailingList') mailingList: string,
    @Args('userEmail') userEmail: string,
    @Args('name') name: string,
  ) {
    return this.notificationService.addToMailingList(
      mailingList,
      userEmail,
      name,
    );
  }

  @Mutation(() => EmailNotificationDTO, { name: 'ValidateEmail' })
  async validateEmail(@Args('email') email: string) {
    return this.notificationService.validateEmail(email);
  }

  @Mutation(() => EmailNotificationDTO, { name: 'SendMailToUser' })
  async sendMailToUser(email: string, subject: string, content: string) {
    return this.notificationService.sendMailToUser(email, subject, content);
  }
}
