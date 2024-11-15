import { Module } from "@nestjs/common";
import { ProjectMilestonesController } from "./project-milestones.controller";
import { ProjectMilestonesService } from "./project-milestones.service";
import { ProjectMilestone } from "./project-milestone.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectsService } from "src/projects/projects.service";
import { Project } from "src/projects/project.entity";
import { UserService } from "src/users/users.service";
import { User } from "src/users/user.entity";

@Module({
  controllers: [ProjectMilestonesController],
  providers: [ProjectMilestonesService, ProjectsService, UserService],
  imports: [
    TypeOrmModule.forFeature([ProjectMilestone]),
    TypeOrmModule.forFeature([Project]),
    TypeOrmModule.forFeature([User]),
  ],
  exports: [TypeOrmModule],
})
export class ProjectMilestonesModule {}
