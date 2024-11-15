import { Injectable } from "@nestjs/common";
import { ProjectDTO } from "./project.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Project } from "./project.entity";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>
  ) {}

  async getProjects(): Promise<ProjectDTO[]> {
    return await this.projectsRepository.find();
  }

  async createProject(project: ProjectDTO): Promise<ProjectDTO> {
    return this.projectsRepository.save(project);
  }
}
