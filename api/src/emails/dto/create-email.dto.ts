import { IsEmail, IsNotEmpty, } from 'class-validator';

export class CreateEmailDto {
  @IsNotEmpty()
  @IsEmail()
  address: string;
}
