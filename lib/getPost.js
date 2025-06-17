import client from "./sanityClient";

export async function getPosts() {
  const query = `*[_type == "blogPost"] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    body
  }`;
  return await client.fetch(query);
}