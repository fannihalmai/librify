import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  public readonly users = [
    {
      id: 1,
      username: 'john',
      firstname: 'John',
      lastname: 'Doe',
      password: 'changeme',
      email: 'something',
    },
    {
      id: 2,
      firstname: 'John',
      lastname: 'Doe',
      username: 'maria',
      password: 'guess',
      email: 'something2',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    console.log('Looking for ', username, ' in ', this.users);
    return this.users.find((user) => user.username === username);
  }
}
