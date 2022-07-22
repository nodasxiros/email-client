import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
HttpStatus

@Injectable()
export class MailService {
  constructor(
    private readonly mailService: MailerService,
    @InjectQueue('emails_queue')
    private emailQueue: Queue,
  ) {}

  private readonly logger = new Logger(MailService.name);

  public send(body: any): any {
    try {
      body.emails.map(
        mail => this
          .emailQueue
          .add(
            'send_bulk_emails',
            this
              .mailService
              .sendMail({
                to: mail,
                subject: 'Email from email client ✔',
                html: `<p>${body.message}</p>`,
              })
          )
      );
      return {
        success: true
      }
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
