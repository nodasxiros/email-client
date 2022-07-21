import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {
    
  }
  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(email: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        email,
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<number[]> {
    return this.userModel.update(updateUserDto, {
      where: {
        id
      }
    });
  }

  remove(id: number): Promise<number> {
    return this.userModel.destroy({
      where: {
        id
      }
    });
  }

  findOrCreate(createUserDto: CreateUserDto): Promise<User | any> {
    return this.userModel.findOrCreate({
      where: {
        email: createUserDto.email
      },
      defaults: {
        email: createUserDto.email,
        password: createUserDto.password
      }
    })
  }
}
