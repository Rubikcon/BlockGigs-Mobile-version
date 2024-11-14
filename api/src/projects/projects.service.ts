import { Injectable } from '@nestjs/common';
import { ProjectDTO } from './project.dto';

@Injectable()
export class ProjectsService {
  projects: ProjectDTO[] = [
    {
      id: 1,
      title: 'Marketplace for something',
      description: 'A list of things',
      requiredSkills: 'Must be a coder with Typescript',
      budget: 2000,
      deadline: 12345667,
      clientId: 1,
    },
  ];
  currProjectId: number = 2;

  getProjects(): ProjectDTO[] {
    return this.projects;
  }

  createProject(project: ProjectDTO): ProjectDTO {
    const newProject = { ...project, id: this.currProjectId };
    this.projects.push(newProject);
    this.currProjectId++;
    return newProject;
  }
}
