import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message)
    private messageModel: typeof Message
  ) {}
  create(createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messageModel.create(createMessageDto);
  }

  findAll(): Promise<Message[]> {
    return this.messageModel.findAll();
  }

  findOne(id: number): Promise<Message> {
    return this.messageModel.findOne({
      where: {
        id,
      }
    });
  }

  update(id: number, updateMessageDto: UpdateMessageDto): Promise<number[]> {
    return this.messageModel.update(updateMessageDto, {
      where: {
        id,
      }
    });
  }

  remove(id: number): Promise<number> {
    return this.messageModel.destroy({
      where: {
        id
      }
    });
  }

  findNotSent(): Promise<Message> {
    return this.messageModel.findOne({
      where: {
        isSent: false
      }
    });
  }
}
