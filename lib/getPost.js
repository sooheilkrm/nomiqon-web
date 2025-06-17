import client from "./sanityClient";

export default getPost;
  const query = `*[_type == "blogPost"] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    body
  }`;
  return await client.fetch(query);
}
