import { Controller, Post, Param, Body, Get } from "@nestjs/common";
import { ProjectMilestonesService } from "./project-milestones.service";
import { ProjectMilestoneCreateDTO } from "./project-milestone-create.dto";
import { ProjectMilestone } from "./project-milestone.entity";
import { ProjectMilestoneStatus } from "./project-milestone.dto";

@Controller("project-milestones")
export class ProjectMilestonesController {
  constructor(
    private readonly projectMilestonesService: ProjectMilestonesService
  ) {}

  // @Get(":projectId")
  // async getMilestonesForProject(
  //   @Param() { projectId }: { projectId: number }
  // ): Promise<ProjectMilestoneDTO[]> {
  //   return this.projectMilestonesService.getProjectMilestones(
  //     projectId as number
  //   );
  // }

  @Post(":projectId")
  async createMilestone(
    @Param("projectId") projectId: number,
    @Body() projectMilestoneCreateDTO: ProjectMilestoneCreateDTO
  ): Promise<ProjectMilestone> {
    return await this.projectMilestonesService.createMilestoneForProject(
      projectId as number,
      projectMilestoneCreateDTO
    );
  }

  @Post(":projectMilestoneId/status/:status")
  async updateMilestoneStatus(
    @Param("projectMilestoneId") projectMilestoneId: number,
    @Param("status") status: ProjectMilestoneStatus
  ) {
    this.projectMilestonesService.updateMilestoneStatus(
      projectMilestoneId,
      status
    );
  }
}
