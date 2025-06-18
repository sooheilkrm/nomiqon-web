import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'zgr71f0x',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-06-01',
});
