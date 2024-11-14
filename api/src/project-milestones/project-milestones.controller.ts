import { Controller, Post, Param, Body, Get } from "@nestjs/common";
import { ProjectMilestonesService } from "./project-milestones.service";
import { ProjectMilestoneCreateDTO } from "./project-milestone-create.dto";
import { ProjectMilestoneDTO } from "./project-milestone.dto";

@Controller("project-milestones")
export class ProjectMilestonesController {
  constructor(
    private readonly projectMilestonesService: ProjectMilestonesService
  ) {}

  @Get(":projectId")
  getMilestonesForProject(@Param() { projectId }: any): ProjectMilestoneDTO[] {
    return this.projectMilestonesService.getProjectMilestones(projectId);
  }

  @Post(":projectId")
  createMilestone(
    @Param() { projectId }: any,
    @Body() projectMilestoneCreateDTO: ProjectMilestoneCreateDTO
  ): ProjectMilestoneDTO {
    return this.projectMilestonesService.createMilestoneForProject(
      projectId,
      projectMilestoneCreateDTO
    );
  }
}
