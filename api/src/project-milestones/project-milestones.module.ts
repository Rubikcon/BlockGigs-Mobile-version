import { Module } from '@nestjs/common';
import { ProjectMilestonesController } from './project-milestones.controller';
import { ProjectMilestonesService } from './project-milestones.service';

@Module({
  controllers: [ProjectMilestonesController],
  providers: [ProjectMilestonesService]
})
export class ProjectMilestonesModule {}
