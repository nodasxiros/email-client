import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { Email } from './entities/email.entity';
Email

@Controller('emails')
export class EmailsController {
  constructor(
    private readonly emailsService: EmailsService,
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
  send(): Promise<any> {
    return this.emailsService.send()
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
