import client from "./sanityClient";

export async function getFooter() {
  const query = `*[_type == "footer"][0]{
    copyright,
    links
  }`;
  return await client.fetch(query);
}