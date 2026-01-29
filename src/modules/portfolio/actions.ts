'use server';

import { auth } from '@/auth';
import { PortfolioService } from './service';
import { revalidatePath } from 'next/cache';

export async function createProjectAction(formData: FormData) {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    throw new Error('Unauthorized');
  }

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const githubUrl = formData.get('githubUrl') as string;
  const tags = (formData.get('tags') as string)?.split(',').map(t => t.trim());

  if (!title) {
    throw new Error('Title is required');
  }

  await PortfolioService.createProject({
    title,
    description,
    githubUrl,
    tags,
    userId: session.user.id,
  });

  revalidatePath('/admin/projects');
}
