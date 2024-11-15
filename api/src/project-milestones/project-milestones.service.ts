import { Injectable } from "@nestjs/common";
import { ProjectMilestoneDTO } from "./project-milestone.dto";
import { ProjectMilestoneCreateDTO } from "./project-milestone-create.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProjectMilestone } from "./project-milestone.entity";

@Injectable()
export class ProjectMilestonesService {
  constructor(
    @InjectRepository(ProjectMilestone)
    private projectMilestonesRepository: Repository<ProjectMilestone>
  ) {}

  async getProjectMilestones(
    projectId: number
  ): Promise<ProjectMilestoneDTO[]> {
    return this.projectMilestonesRepository.find({
      where: { projectId: projectId },
    });
  }

  async createMilestoneForProject(
    projectId: number,
    milestone: ProjectMilestoneCreateDTO
  ): Promise<ProjectMilestoneDTO> {
    return this.projectMilestonesRepository.save({ ...milestone, projectId });
  }
}
