import { Controller, Get, Post, Body } from "@nestjs/common";
import { ClientsService } from "./clients.service";
import { ClientDTO } from "./client.dto";

@Controller("clients")
export class ClientsController {
  constructor(private readonly clientService: ClientsService) {}

  @Get()
  async getClients(): Promise<ClientDTO[]> {
    return this.clientService.getClients();
  }

  @Post()
  async createClient(@Body() clientDTO: ClientDTO): Promise<ClientDTO> {
    return this.clientService.createClient(clientDTO);
  }
}
