import { Injectable } from "@nestjs/common";
import { ProjectMilestoneDTO } from "./project-milestone.dto";
import { ProjectMilestoneCreateDTO } from "./project-milestone-create.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProjectMilestone } from "./project-milestone.entity";
import { ProjectsService } from "src/projects/projects.service";

@Injectable()
export class ProjectMilestonesService {
  constructor(
    @InjectRepository(ProjectMilestone)
    private projectMilestonesRepository: Repository<ProjectMilestone>,
    private projectService: ProjectsService
  ) {}

  // async getProjectMilestones(
  //   projectId: number
  // ): Promise<ProjectMilestone[]> {
  //   return this.projectMilestonesRepository.find({
  //     where: { projectId: projectId },
  //   });
  // }

  async createMilestoneForProject(
    projectId: number,
    milestone: ProjectMilestoneCreateDTO
  ): Promise<ProjectMilestone> {
    const project = await this.projectService.getProject(projectId);
    return await this.projectMilestonesRepository.save({
      ...milestone,
      project: project,
    });
  }
}
