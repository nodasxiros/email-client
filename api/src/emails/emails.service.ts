import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MailService } from 'src/mail/mail.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { Email } from './entities/email.entity';

@Injectable()
export class EmailsService {
  constructor(
    @InjectModel(Email)
    private emailModel: typeof Email
  ) {}
  create(createEmailDto: CreateEmailDto): Promise<Email> {
    return this.emailModel.create(createEmailDto);
  }

  findAll(): Promise<Email[]> {
    return this.emailModel.findAll();
  }

  findOne(address: string): Promise<Email> {
    return this.emailModel.findOne({
      where: {
        address,
      }
    });
  }

  update(address: string, updateEmailDto: UpdateEmailDto): Promise<number[]> {
    return this.emailModel.update(updateEmailDto, {
      where: {
        address
      }
    });
  }

  remove(id: number): Promise<number> {
    return this.emailModel.destroy({
      where: {
        id
      }
    });
  }
}
