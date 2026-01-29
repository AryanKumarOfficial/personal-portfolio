import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/portfolio',
        }
    }
  });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const db = globalThis.prisma ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
