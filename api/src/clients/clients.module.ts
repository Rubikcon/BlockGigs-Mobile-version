import { Module } from "@nestjs/common";
import { ClientsController } from "./clients.controller";
import { ClientsService } from "./clients.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "./client.entity";

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [TypeOrmModule.forFeature([Client])],
  exports: [TypeOrmModule],
})
export class ClientsModule {}
