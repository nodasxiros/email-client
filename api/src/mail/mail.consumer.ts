import { Processor, Process, OnQueueActive } from '@nestjs/bull';
import { Job } from 'bull';
import { MailerService } from '@nestjs-modules/mailer'
import { Logger } from '@nestjs/common';

@Processor('emails_queue')
export class EmailsConsumer {
  constructor(
    private readonly mailService: MailerService,
  ) {}
  private readonly logger = new Logger(EmailsConsumer.name);
  @Process('send_bulk_emails')
  async sendBulkEmails(job: Job) {
    this.logger.log(`Consuming ${job.id} of type ${job.name}`);
    // this
    //   .mailService
    //   .sendMail({
    //     to: ['nodasxiros@gmail.com', ],
    //     subject: 'Testing Nest MailerModule ✔',
    //     text: 'welcome',
    //     html: '<b>welcome</b>',
    //   });   
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }
}
