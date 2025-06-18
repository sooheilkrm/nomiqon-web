import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zgr71f0x',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN // این خط مهمه
})

export default client
