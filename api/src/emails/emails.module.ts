import { Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { EmailsController } from './emails.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Email } from './entities/email.entity';
import { MailService } from 'src/mail/mail.service';

@Module({
  imports: [SequelizeModule.forFeature([Email])],
  controllers: [EmailsController],
  providers: [EmailsService, MailService],
})
export class EmailsModule {}
