import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ProjectMilestoneStatus } from "./project-milestone.dto";

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

  @Column({ nullable: false })
  projectId: number;

  @Column({ nullable: false })
  clientId: number;

  @Column({ nullable: false, default: ProjectMilestoneStatus.NOT_STARTED })
  status: ProjectMilestoneStatus;
}
