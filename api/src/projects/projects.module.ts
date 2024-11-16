import { Module } from "@nestjs/common";
import { ProjectsController } from "./projects.controller";
import { ProjectsService } from "./projects.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Project } from "./project.entity";
import { UserService } from "src/users/users.service";
import { User } from "src/users/user.entity";

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, UserService],
  imports: [
    TypeOrmModule.forFeature([Project]),
    TypeOrmModule.forFeature([User]),
  ],
  exports: [TypeOrmModule],
})
export class ProjectsModule {}
