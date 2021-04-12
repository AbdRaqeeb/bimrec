import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { omit, map } from 'lodash';

type response = {
  success: boolean;
  message: string;
};

type emailSendInput = {
  name: string;
  to: string;
}

type messageInput = {
  to: string[],
  templateId: string,
  dynamic_template_data: {
    name?: string
  }
}

const DOCTOR_WELCOME_EMAIL_TEMPLATE = process.env.DOCTOR_WELCOME_EMAIL
const HOSPITAL_WELCOME_EMAIL_TEMPLATE = process.env.HOSPITAL_WELCOME_EMAIL

@Injectable()
export class NotificationService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  /**
   * Add extra fields to the message field before sending message
   * @param messageFields message fields
   */
  private generateMessage(messageFields: messageInput) {
    return {
      from: { email: process.env.FROM_EMAIL, name: 'LIVRITE' },
      ...messageFields,
      reply_to: { email: process.env.FROM_EMAIL, name: 'LIVRITE' },
      personalizations: map(messageFields.to, (to) => ({ to: [{ email: to }] }))
    }
  }

  private async sendEmail(message): Promise<response> {
    return new Promise((resolve, reject) => {
      sgMail.send(message).then(() => {
        if (process.env.NODE_ENV !== 'production') {
          console.log("Email sent successfully");
        }
        resolve({
          success: true,
          message: "email successfully sent"
        })
      })
        .catch((error) => {
          if (process.env.NODE_ENV !== 'production') {
            console.log("Error while attempting to send Email")
            console.log(error)
          }
          return reject({
            success: false,
            message: 'error while trying to send'
          })
        })
    })
  }

  async sendNewPatient(data: emailSendInput): Promise<response> {
    const message = this.generateMessage({
      to: [data.to],
      templateId: process.env.PATIENT_WELCOME_EMAIL,
      dynamic_template_data: omit(data, ['to'])
    })

    console.log(message)

    return this.sendEmail(message)
  }

  async sendNewDoctor(data: emailSendInput): Promise<response> {
    const message = this.generateMessage({
      to: [data.to],
      templateId: process.env.DOCTOR_WELCOME_EMAIL,
      dynamic_template_data: omit(data, ['to'])
    })

    return this.sendEmail(message)
  }

  async sendNewHospital(data: emailSendInput): Promise<response> {
    const message = this.generateMessage({
      to: [data.to],
      templateId: process.env.HOSPITAL_WELCOME_EMAIL,
      dynamic_template_data: omit(data, ['to'])
    })

    return this.sendEmail(message)
  }

}
