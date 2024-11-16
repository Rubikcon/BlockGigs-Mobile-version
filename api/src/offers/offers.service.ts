import { BadRequestException, Injectable } from "@nestjs/common";
import { Offer } from "./offer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserService } from "src/users/users.service";
import { ProjectsService } from "src/projects/projects.service";
import { Project } from "src/projects/project.entity";

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private offersRepository: Repository<Offer>,
    private usersService: UserService,
    private projectService: ProjectsService
  ) {}

  async createOffer(projectId: number, userId: number): Promise<Offer> {
    const user = await this.usersService.getUser(userId);
    const project = await this.projectService.getProject(projectId);

    if (project.assignedUserId !== null) {
      throw new BadRequestException(
        "Project already assigned. Cannot offer to another user"
      );
    }

    return this.offersRepository.save({ user, project });
  }

  async getOffers(userId: number): Promise<Project[]> {
    const offers = await this.offersRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
      relations: ["project"],
    });

    return offers.map((offer) => offer.project);
  }
}
