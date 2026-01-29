'use server';

import { ResumeService } from './service';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';

export async function addSkillAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error('Unauthorized');

  const name = formData.get('name') as string;
  const category = formData.get('category') as string;
  const level = parseInt(formData.get('level') as string) || 50;

  await ResumeService.addSkill({
    name,
    category,
    level,
    icon: null,
    order: 0,
  });

  revalidatePath('/admin/resume');
}

export async function deleteSkillAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error('Unauthorized');
  const id = formData.get('id') as string;
  await ResumeService.deleteSkill(id);
  revalidatePath('/admin/resume');
}

export async function addEducationAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error('Unauthorized');

  await ResumeService.addEducation({
    institution: formData.get('institution') as string,
    degree: formData.get('degree') as string,
    field: formData.get('field') as string,
    startDate: new Date(formData.get('startDate') as string),
    endDate: formData.get('endDate') ? new Date(formData.get('endDate') as string) : null,
    description: formData.get('description') as string,
    location: formData.get('location') as string,
  });

  revalidatePath('/admin/resume');
}

export async function deleteEducationAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error('Unauthorized');
  const id = formData.get('id') as string;
  await ResumeService.deleteEducation(id);
  revalidatePath('/admin/resume');
}

export async function addExperienceAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error('Unauthorized');

  await ResumeService.addExperience({
    company: formData.get('company') as string,
    role: formData.get('role') as string,
    startDate: new Date(formData.get('startDate') as string),
    endDate: formData.get('endDate') ? new Date(formData.get('endDate') as string) : null,
    description: formData.get('description') as string,
    technologies: (formData.get('technologies') as string)?.split(',').map(t => t.trim()).filter(Boolean),
    type: formData.get('type') as string,
  });

  revalidatePath('/admin/resume');
}

export async function deleteExperienceAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error('Unauthorized');
  const id = formData.get('id') as string;
  await ResumeService.deleteExperience(id);
  revalidatePath('/admin/resume');
}
