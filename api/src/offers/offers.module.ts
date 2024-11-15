import { Module } from "@nestjs/common";
import { OffersController } from "./offers.controller";
import { OffersService } from "./offers.service";
import { UserService } from "src/users/users.service";
import { Offer } from "./offer.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Project } from "src/projects/project.entity";
import { User } from "src/users/user.entity";
import { ProjectsService } from "src/projects/projects.service";

@Module({
  controllers: [OffersController],
  providers: [OffersService, UserService, ProjectsService],
  imports: [
    TypeOrmModule.forFeature([Offer]),
    TypeOrmModule.forFeature([Project]),
    TypeOrmModule.forFeature([User]),
  ],
})
export class OffersModule {}
