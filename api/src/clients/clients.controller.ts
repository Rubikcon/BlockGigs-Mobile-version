import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientDTO } from './client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientService: ClientsService) {}

  @Get()
  getClients(): ClientDTO[] {
    return this.clientService.getClients();
  }

  @Post()
  createClient(@Body() clientDTO: ClientDTO): ClientDTO {
    return this.clientService.createClient(clientDTO);
  }
}
