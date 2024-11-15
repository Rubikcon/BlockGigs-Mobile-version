import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";

import { Project } from "src/projects/project.entity";
import { User } from "src/users/user.entity";

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  creationTime: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Project)
  project: Project;
}
