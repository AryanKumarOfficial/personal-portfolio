'use server';

import { BlogService } from './service';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';

export async function createPostAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const excerpt = formData.get('excerpt') as string;
  const tags = (formData.get('tags') as string)?.split(',').map(t => t.trim()).filter(Boolean);

  await BlogService.createPost({
    title,
    content,
    excerpt,
    authorId: session.user.id,
    tags,
  });

  revalidatePath('/admin/blogs');
  redirect('/admin/blogs');
}
