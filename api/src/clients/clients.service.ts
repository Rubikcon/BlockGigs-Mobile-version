import { Injectable } from "@nestjs/common";
import { ClientDTO } from "./client.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Client } from "./client.entity";

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>
  ) {}

  async getClients(): Promise<ClientDTO[]> {
    return await this.clientsRepository.find();
  }

  async createClient(client: ClientDTO): Promise<ClientDTO> {
    return await this.clientsRepository.save(client);
  }
}
