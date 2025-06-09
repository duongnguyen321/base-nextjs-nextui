import { cloneObj } from '@/helpers/string';

export const SERVER_URL = process.env.SERVER_URL;
export const MAIN_URL = process.env.MAIN_URL;

const meta = {
  title: 'Base',
  description: 'The descriptions.',
};

export default async function getMetadata(title?: string) {
  const data = cloneObj(meta);
  if (title) {
    data.title = meta.title + ' | ' + title;
  }
  return data;
}
