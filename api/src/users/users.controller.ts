import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { UserDTO } from './users.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): UserDTO[] {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() userdto: UserDTO) {
    this.userService.createUser(userdto);
  }
}
