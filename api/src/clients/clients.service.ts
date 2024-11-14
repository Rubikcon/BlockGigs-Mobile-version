import { Injectable } from '@nestjs/common';
import { ClientDTO } from './client.dto';

@Injectable()
export class ClientsService {
  clients: ClientDTO[] = [
    {
      id: 1,
      name: 'coder',
      walletAddress: '0x12344',
      email: 'someone@gmail.com',
      phone: '+44323',
      industry: 'tech',
      companySize: 100,
      verificationStatus: 'Verified',
    },
  ];
  currentId = 2;
  getClients(): ClientDTO[] {
    return this.clients;
  }

  createClient(client: ClientDTO) {
    const newClient = { ...client, id: this.currentId };
    this.clients.push(newClient);
    this.currentId++;
    return newClient;
  }
}
