import { Injectable } from "@nestjs/common";
import {
  ProjectMilestoneDTO,
  ProjectMilestoneStatus,
} from "./project-milestone.dto";
import { ProjectMilestoneCreateDTO } from "./project-milestone-create.dto";

@Injectable()
export class ProjectMilestonesService {
  milestones: ProjectMilestoneDTO[] = [
    {
      id: 1,
      title: "title",
      description: "description",
      requiredSkills: "some skills",
      budget: 1000,
      deadline: 123456,
      projectId: 1,
      clientId: 1,
      status: ProjectMilestoneStatus.IN_PROGRESS,
    },
  ];
  currProjectMilestoneId = 2;

  getProjectMilestones(projectId: number): ProjectMilestoneDTO[] {
    return this.milestones.filter(
      (milestone) => milestone.projectId == projectId
    );
  }

  createMilestoneForProject(
    projectId: number,
    milestone: ProjectMilestoneCreateDTO
  ): ProjectMilestoneDTO {
    const newMilestone = {
      ...milestone,
      id: this.currProjectMilestoneId,
      projectId,
      status: ProjectMilestoneStatus.NOT_STARTED,
    };
    this.milestones.push(newMilestone);
    this.currProjectMilestoneId++;
    return newMilestone;
  }
}
