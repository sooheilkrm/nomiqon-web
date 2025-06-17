import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'zgr7fl0x', // شناسه پروژه Sanity
  dataset: 'production', // نام دیتاست
  apiVersion: '2023-01-01',
  useCdn: true,
});