import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'zgr7fl0x', // همین بمونه
  dataset: 'production', // این خط مهمه: دقت کن دقیقا production باشه
  useCdn: true,
  apiVersion: '2023-01-01',
});

export default client;
