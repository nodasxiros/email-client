import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class MailService {
  constructor(
    private readonly mailService: MailerService,
    @InjectQueue('emails_queue')
    private emailQueue: Queue,
  ) {}

  private readonly logger = new Logger(MailService.name);

  public send(): any {
    try {
      this.emailQueue.add('send_bulk_emails',{
        foo: 'bar'
      })
      this.emailQueue.add('send_bulk_emails',{
        foo: 'bar2'
      })
      this.emailQueue.add('send_bulk_emails',{
        foo: 'bar3'
      })
      this.emailQueue.add('send_bulk_emails',{
        foo: 'bar4'
      })
      return {
        test: 'test'
      }
      // return this
      //   .mailService
      //   .sendMail({
      //     to: ['nodasxiros@gmail.com', ],
      //     subject: 'Testing Nest MailerModule ✔',
      //     text: 'welcome',
      //     html: '<b>welcome</b>',
      //   });   
    } catch (error) {
      this.logger.error(error.message);
      throw new Error(error);
    }
  }
}
