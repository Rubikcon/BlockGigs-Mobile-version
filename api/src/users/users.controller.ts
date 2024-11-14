import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { UserService } from "./users.service";
import { UserDTO } from "./users.dto";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  async getUser(@Param() id: number): Promise<UserDTO> {
    const user = await this.userService.getUser(id);
    return { ...(user as UserDTO) };
  }

  @Post()
  createUser(@Body() userdto: UserDTO): Promise<UserDTO> {
    const thing = this.userService.createUser(userdto);
    return thing;
  }
}
