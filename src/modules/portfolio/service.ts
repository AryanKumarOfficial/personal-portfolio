import db from '@/lib/db';
import { getEventBus } from '@/infrastructure/event-bus';
import { Project } from '@prisma/client';
import { nanoid } from 'nanoid';

export type CreateProjectInput = {
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  tags?: string[];
  userId: string;
};

export class PortfolioService {
  static async createProject(input: CreateProjectInput): Promise<Project> {
    const bus = getEventBus();

    // 1. Generate Slug
    const slug = input.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') + '-' + nanoid(10);

    // 2. Persist to DB
    const project = await db.project.create({
      data: {
        title: input.title,
        slug: slug,
        description: input.description,
        githubUrl: input.githubUrl,
        liveUrl: input.liveUrl,
        tags: input.tags || [],
        userId: input.userId,
        status: 'DRAFT',
      },
    });

    // 3. Emit Event
    await bus.publish('PROJECT_CREATED', {
      projectId: project.id,
      title: project.title,
      description: project.description,
      githubUrl: project.githubUrl,
      userId: project.userId,
    });

    return project;
  }

  static async getProjects(status?: string) {
    return db.project.findMany({
      where: status ? { status } : undefined,
      orderBy: { createdAt: 'desc' },
    });
  }

  static async getProjectById(id: string) {
    return db.project.findUnique({
      where: { id },
    });
  }
}
