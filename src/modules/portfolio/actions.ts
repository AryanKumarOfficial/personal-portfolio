'use server';

import { auth } from '@/auth';
import { PortfolioService } from './service';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const createProjectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  githubUrl: z.string().url().optional().or(z.literal('')),
  tags: z.string().optional(),
});

export async function createProjectAction(formData: FormData) {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    throw new Error('Unauthorized');
  }

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const githubUrl = formData.get('githubUrl') as string;
  const liveUrl = formData.get('liveUrl') as string;
  const tags = (formData.get('tags') as string)?.split(',').map(t => t.trim());

  if (!validated.success) {
    throw new Error(validated.error.errors[0].message);
  }

  const { title, description, githubUrl, tags } = validated.data;

  await PortfolioService.createProject({
    title,
    description,
    githubUrl,
    liveUrl,
    tags,
    userId: session.user.id,
  });

  revalidatePath('/admin/projects');
}
