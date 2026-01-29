'use server';

import { ClientService } from './service';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';

export async function addClientAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error('Unauthorized');

  await ClientService.addClient({
    name: formData.get('name') as string,
    logo: formData.get('logo') as string, // Assuming URL or simplified string for now
    website: formData.get('website') as string,
    testimonial: formData.get('testimonial') as string,
    position: formData.get('position') as string,
  });

  revalidatePath('/admin/clients');
}

export async function deleteClientAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error('Unauthorized');
  const id = formData.get('id') as string;
  await ClientService.deleteClient(id);
  revalidatePath('/admin/clients');
}
