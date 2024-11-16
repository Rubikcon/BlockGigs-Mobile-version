import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProjectMilestoneStatus } from "./project-milestone.dto";
import { Project } from "src/projects/project.entity";

@Entity()
export class ProjectMilestone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  requiredSkills: string;

  @Column({ nullable: false })
  budget: number;

  @Column({ nullable: false })
  deadline: number;

  @ManyToOne(() => Project, (project) => project.projectMilestones)
  project: Project;

  @Column({ nullable: false, default: ProjectMilestoneStatus.NOT_STARTED })
  status: ProjectMilestoneStatus;
}
