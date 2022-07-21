import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';


@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: process.env.EMAIL_SERVICE_TRANSPORT,
        defaults: {
          from: '"email-client" <email-client@site.com>',
        },
        template: {
          dir: `${__dirname}/email-templates`,
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      })
    })
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
