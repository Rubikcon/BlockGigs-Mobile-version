import { Controller, Get, Body, Post } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { ProjectDTO } from "./project.dto";

@Controller("projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async getUsers(): Promise<ProjectDTO[]> {
    return this.projectsService.getProjects();
  }

  @Post()
  async createUser(@Body() projectDto: ProjectDTO): Promise<ProjectDTO> {
    return this.projectsService.createProject(projectDto);
  }
}
