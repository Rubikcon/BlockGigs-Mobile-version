import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { UserController } from "./users/users.controller";
import { UserService } from "./users/users.service";
import { ClientsModule } from "./clients/clients.module";
import { ProjectsModule } from "./projects/projects.module";
import { ProjectMilestonesModule } from "./project-milestones/project-milestones.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/user.entity";
import { Client } from "./clients/client.entity";
import { Project } from "./projects/project.entity";
import { ProjectMilestone } from "./project-milestones/project-milestone.entity";
import { OffersModule } from "./offers/offers.module";
import { Offer } from "./offers/offer.entity";

@Module({
  imports: [
    UsersModule,
    ClientsModule,
    ProjectsModule,
    ProjectMilestonesModule,
    OffersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Client, Project, ProjectMilestone, Offer],
      synchronize: true,
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
