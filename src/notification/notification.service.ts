import { Injectable } from '@nestjs/common';
import * as mailgun from 'mailgun-js';

const Mailgun = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

const companyEMail = process.env.COMPANY_MAIL;

type response = {
  success: boolean;
  message: string;
  emailValidated?: boolean;
};

@Injectable()
export class NotificationService {
  constructor() {}

  async addToMailingList(
    mailingList: string,
    email: string,
    name: string,
  ): Promise<response> {
    const userData: mailgun.lists.MemberCreateData = {
      address: email,
      name: name,
      subscribed: true,
    };
    try {
      await Mailgun.lists(mailingList).members().create(userData);
    } catch (err) {
      console.log(err);
      return {
        success: false,
        message: err.message,
      };
    }
    return {
      success: true,
      message: 'Successfully added user to mailing list',
    };
  }

  async validateEmail(email: string): Promise<response> {
    try {
      const body = await Mailgun.validate(email);
      if (body && body.is_valid) {
        return {
          success: true,
          message: 'email is valid',
          emailValidated: true,
        };
      } else {
        return {
          success: true,
          message: 'email is invalid',
          emailValidated: false,
        };
      }
    } catch (err) {
      return {
        success: false,
        message: 'email validation failed',
        emailValidated: true,
      };
    }
  }

  async sendMailToMailingList(mailingList: string) {
    // TODO
  }

  async sendMailToUser(
    email: string,
    subject: string,
    content: string,
  ): Promise<response> {
    const data: mailgun.messages.SendData = {
      from: companyEMail,
      to: email,
      subject,
      text: content,
    };
    try {
      await Mailgun.messages().send(data);
    } catch (err) {
      return {
        success: false,
        message: err.message,
      };
    }
  }

  async removeFromMailingList() {
    // TODO
  }
}
