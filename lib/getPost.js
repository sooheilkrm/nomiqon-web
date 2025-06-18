import { client } from './sanityClient'

export async function getPost() {
  const query = `*[_type == "blogPost"]{
    _id,
    title,
    slug,
    publishedAt,
    body
  }`;

  return await client.fetch(query);
}
