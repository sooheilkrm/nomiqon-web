import { client } from './sanityClient';

export async function getSlogan() {
  const query = `*[_type == "slogan"][0]{ text , sloganSubText}`;
  const data = await client.fetch(query);
  return data;
}
