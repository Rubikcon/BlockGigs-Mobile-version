import { Controller, Get, Body, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectDTO } from './project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getUsers(): ProjectDTO[] {
    return this.projectsService.getProjects();
  }

  @Post()
  createUser(@Body() projectDto: ProjectDTO): ProjectDTO {
    return this.projectsService.createProject(projectDto);
  }
}
