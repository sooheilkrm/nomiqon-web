import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'zgr71f0x',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-01',
});
