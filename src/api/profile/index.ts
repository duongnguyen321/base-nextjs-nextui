'use server';
import fetcher from '@/helpers/fetcher';

export async function getProfile(email: string) {
  return await fetcher(`/users?email=${email}`);
}
