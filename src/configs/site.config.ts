import { cloneObj } from '@/helpers/string';

export const SERVER_URL = process.env.SERVER_URL;
export const HOST_URL = process.env.HOST_URL;

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
