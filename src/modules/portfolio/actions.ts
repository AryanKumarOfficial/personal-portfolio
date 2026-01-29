'use server';

import { auth } from '@/auth';
import { PortfolioService } from './service';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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

export async function updateProjectAction(id: string, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error('Unauthorized');

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const githubUrl = formData.get('githubUrl') as string;
  const liveUrl = formData.get('liveUrl') as string;
  const tags = (formData.get('tags') as string)?.split(',').map(t => t.trim()).filter(Boolean);

  await PortfolioService.updateProject(id, {
    title,
    description,
    githubUrl,
    liveUrl,
    tags,
  });

  revalidatePath('/admin/projects');
  redirect('/admin/projects');
}

export async function publishProjectAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error('Unauthorized');

  const id = formData.get('id') as string;
  await PortfolioService.updateProject(id, { status: 'PUBLISHED' });
  revalidatePath('/admin/projects');
}

export async function deleteProjectAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error('Unauthorized');

  const id = formData.get('id') as string;
  await PortfolioService.deleteProject(id);
  revalidatePath('/admin/projects');
}
