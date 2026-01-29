import db from '@/lib/db';
import { Client } from '@/.generated/prisma/client';

export class ClientService {
  static async addClient(data: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>) {
    return db.client.create({ data });
  }

  static async getClients() {
    return db.client.findMany({ orderBy: { createdAt: 'desc' } });
  }

  static async deleteClient(id: string) {
    return db.client.delete({ where: { id } });
  }
}
