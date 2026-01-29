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

  const institutionValue = formData.get('institution');
  const degreeValue = formData.get('degree');
  const fieldValue = formData.get('field');
  const startDateValue = formData.get('startDate');
  const endDateValue = formData.get('endDate');
  const descriptionValue = formData.get('description');
  const locationValue = formData.get('location');

  if (typeof institutionValue !== 'string' || !institutionValue.trim()) {
    throw new Error('Invalid or missing institution');
  }
  if (typeof degreeValue !== 'string' || !degreeValue.trim()) {
    throw new Error('Invalid or missing degree');
  }
  if (typeof fieldValue !== 'string' || !fieldValue.trim()) {
    throw new Error('Invalid or missing field');
  }
  if (typeof startDateValue !== 'string' || !startDateValue.trim()) {
    throw new Error('Invalid or missing startDate');
  }
  if (typeof descriptionValue !== 'string' || !descriptionValue.trim()) {
    throw new Error('Invalid or missing description');
  }
  if (typeof locationValue !== 'string' || !locationValue.trim()) {
    throw new Error('Invalid or missing location');
  }

  const startDate = new Date(startDateValue);
  if (Number.isNaN(startDate.getTime())) {
    throw new Error('Invalid startDate format');
  }

  let endDate: Date | null = null;
  if (endDateValue !== null && endDateValue !== undefined && String(endDateValue).trim() !== '') {
    if (typeof endDateValue !== 'string') {
      throw new Error('Invalid endDate');
    }
    const parsedEndDate = new Date(endDateValue);
    if (Number.isNaN(parsedEndDate.getTime())) {
      throw new Error('Invalid endDate format');
    }
    endDate = parsedEndDate;
  }

  await ResumeService.addEducation({
    institution: institutionValue,
    degree: degreeValue,
    field: fieldValue,
    startDate,
    endDate,
    description: descriptionValue,
    location: locationValue,
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
