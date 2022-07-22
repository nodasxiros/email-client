import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { Email } from './entities/email.entity';
import { MailService } from 'src/mail/mail.service';

@Controller('emails')
export class EmailsController {
  constructor(
    private readonly emailsService: EmailsService,
    private readonly mailService: MailService,
  ) {}

  @Post()
  create(@Body() createEmailDto: CreateEmailDto): Promise<Email> {
    return this.emailsService.create(createEmailDto);
  }

  @Get()
  findAll(): Promise<Email[]> {
    return this.emailsService.findAll();
  }

  @Post('send')
  send(@Body() body: any): Promise<any> {
    console.log(body);
    return this.mailService.send(body)
  }

  @Get(':id')
  findOne(@Param('address') address: string): Promise<Email> {
    return this.emailsService.findOne(address);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailDto: UpdateEmailDto): Promise<number[]> {
    return this.emailsService.update(+id, updateEmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.emailsService.remove(+id);
  }
}
