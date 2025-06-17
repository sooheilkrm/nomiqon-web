import client from "./sanityClient";

export async function getSlogan() {
  const query = `*[_type == "slogan"][0]{
    title,
    subtitle
  }`;
  return await client.fetch(query);
}