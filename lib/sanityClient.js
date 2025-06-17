import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'zgr7fl0x',        // باید همین باشه
  dataset: 'production',        // حتماً همین باشه
  apiVersion: '2023-01-01',     // تاریخ تقریبی دلخواه
  useCdn: true,                 // یا false برای داده‌های همیشه تازه
})

export default client
