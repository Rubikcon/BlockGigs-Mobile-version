export enum ProjectMilestoneStatus {
  NOT_STARTED = "Not Started",
  IN_PROGRESS = "In progress",
  COMPLETED = "Completed",
}

export class ProjectMilestoneDTO {
  id: number;
  title: string;
  description: string;
  requiredSkills: string;
  budget: number;
  deadline: number;
  projectId: number;
  clientId: number;
  status: ProjectMilestoneStatus;
}
