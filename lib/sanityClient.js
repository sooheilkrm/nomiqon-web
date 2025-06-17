import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "zgr7fl0x",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-10-01",
});

export default client;