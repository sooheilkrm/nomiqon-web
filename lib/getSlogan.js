import { client } from './sanityClient';

export async function getSlogan() {
  const query = `*[_type == "brandSlogan"][0]{ sloganText }`;
  const data = await client.fetch(query);
  return data;
}
