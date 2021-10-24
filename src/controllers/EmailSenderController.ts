import { Request, Response } from "express";
import { EmailSenderService } from "../service/EmailSenderService";

export async function handle(request: Request, response: Response) {
  const { destination, subject, text, html } = request.body;
  const data = Object.assign({ destination, subject, text, html });

  try {
    const service = new EmailSenderService();
    await service.execute(data);
    return response.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}
