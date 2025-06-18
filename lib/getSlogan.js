import { client } from "./sanityClient";

export async function getSlogan() {
  const query = `*[_type == "slogan"][0]{ sloganText }`;
  const data = await client.fetch(query);
  console.log("SLOGAN:", data); // فقط برای تست
  return data || { sloganText: null }; // جلوگیری از null
}
