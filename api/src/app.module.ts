import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { EmailsModule } from './emails/emails.module';
import { MessagesModule } from './messages/messages.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'email_client_db',
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      define: {
        timestamps: false,
      },
      models: [
        User,
      ],
    }),
    AuthModule,
    UsersModule,
    MailModule,
    EmailsModule,
    MessagesModule,
    BullModule.forRoot({
      redis: {
        host: 'email_client_redis',
        port: 6379,
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
