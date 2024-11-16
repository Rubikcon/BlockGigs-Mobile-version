import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProjectDTO } from "./project.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Project } from "./project.entity";
import { UserService } from "src/users/users.service";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
    private userService: UserService
  ) {}

  async getProjects(): Promise<Project[]> {
    return await this.projectsRepository.find({
      relations: ["projectMilestones"],
    });
  }

  async createProject(project: CreateProjectDTO): Promise<Project> {
    return this.projectsRepository.save({ ...project, assignedUserId: null });
  }

  async getProject(projectId: number) {
    const project = await this.projectsRepository.findOneBy({ id: projectId });

    if (project === null) {
      throw new NotFoundException("Invalid projectId");
    }

    return project;
  }

  async assign(projectId: number, userId: number) {
    const project = await this.getProject(projectId);

    // throws if invalid user
    this.userService.getUser(userId);

    project.assignedUserId = userId;

    this.projectsRepository.save(project);
  }

  async fetchProjectsByUser(userId: number) {
    const projects = await this.projectsRepository.find({
      where: { assignedUserId: userId },
      relations: ["projectMilestones"],
    });

    return projects;
  }
}
