import * as nodemailer from "nodemailer";
import { mailConfig } from "../config/mail-config";
import { IEmailSend } from "../interface";

export class EmailSenderService {
  private transporter = nodemailer.createTransport(mailConfig);

  async execute(data: IEmailSend) {
    const result = this.transporter
      .sendMail({
        from: process.env.EMAIL_USER,
        to: data.destination,
        replyTo: data.destination,
        subject: data.subject,
        text: data.text,
        html: data.html,
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });

    return result;
  }
}
