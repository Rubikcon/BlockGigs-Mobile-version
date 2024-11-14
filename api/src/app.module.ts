import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';
import { ClientsModule } from './clients/clients.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [UsersModule, ClientsModule, ProjectsModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
