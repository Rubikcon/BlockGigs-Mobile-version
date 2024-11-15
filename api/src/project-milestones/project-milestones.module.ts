import { Module } from "@nestjs/common";
import { ProjectMilestonesController } from "./project-milestones.controller";
import { ProjectMilestonesService } from "./project-milestones.service";
import { ProjectMilestone } from "./project-milestone.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [ProjectMilestonesController],
  providers: [ProjectMilestonesService],
  imports: [TypeOrmModule.forFeature([ProjectMilestone])],
  exports: [TypeOrmModule],
})
export class ProjectMilestonesModule {}
