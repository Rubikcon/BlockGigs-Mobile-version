import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { UserService } from "./users.service";
import { UserDTO } from "./users.dto";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  async getUser(@Param() { id }: any): Promise<UserDTO> {
    const user = await this.userService.getUser(id);
    return { ...(user as UserDTO) };
  }

  @Post()
  async registerUser(@Body() userdto: UserDTO): Promise<UserDTO> {
    return this.userService.createUser(userdto);
  }
}
