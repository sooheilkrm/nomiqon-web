import client from './sanityClient';

export const getPost = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    publishedAt,
    body
  }`;
  return await client.fetch(query);
};
