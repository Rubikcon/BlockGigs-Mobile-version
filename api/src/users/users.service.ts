import { Injectable, NotFoundException } from "@nestjs/common";
import { UserDTO } from "./users.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  users: UserDTO[] = [
    {
      username: "coder",
      walletAddress: "0x12344",
      email: "someone@gmail.com",
      phone: "+44323",
      location: "London",
      skills: [],
    },
  ];

  async getUser(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    console.log("Stuff", id, user);
    if (user) return user;
    else {
      throw new NotFoundException("No user");
    }
  }

  async createUser(user: UserDTO): Promise<User> {
    let newUser = this.usersRepository.save(user as User);
    return newUser;
  }
}
