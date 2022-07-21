import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(
    private readonly mailService: MailerService
  ) {}

  private readonly logger = new Logger(MailService.name);

  public send(): Promise<any> {
    try {
      return this
        .mailService
        .sendMail({
          to: ['nodasxiros@gmail.com', ],
          subject: 'Testing Nest MailerModule ✔',
          text: 'welcome',
          html: '<b>welcome</b>',
        });   
    } catch (error) {
      this.logger.error(error.message);
      throw new Error(error);
    }
  }
}
