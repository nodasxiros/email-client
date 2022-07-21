import { Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { EmailsController } from './emails.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Email } from './entities/email.entity';
import { MailService } from 'src/mail/mail.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    SequelizeModule.forFeature([Email]),
    BullModule.registerQueue({
      name: 'emails_queue',
      redis: {
        host: 'email_client_redis',
        port: 6379,
      },
    })
  ],
  controllers: [EmailsController],
  providers: [EmailsService, MailService],
})
export class EmailsModule {}
