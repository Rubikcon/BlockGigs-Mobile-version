import { Injectable } from '@nestjs/common';
import { UserDTO } from './users.dto';

@Injectable()
export class UserService {
  users: UserDTO[] = [
    {
      username: 'coder',
      walletAddress: '0x12344',
      email: 'someone@gmail.com',
      phone: '+44323',
      location: 'London',
      skills: [],
    },
  ];

  getUsers(): UserDTO[] {
    return this.users;
  }

  createUser(user: UserDTO) {
    this.users.push(user);
  }
}
