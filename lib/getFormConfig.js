import client from "./sanityClient";

export async function getFormConfig() {
  const query = `*[_type == "formConfig"][0]{
    title,
    fields[]{label, type, required}
  }`;
  return await client.fetch(query);
}