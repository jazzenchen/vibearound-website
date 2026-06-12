import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const enDocs = defineDocs({
  dir: "content/docs/en",
});

export const zhDocs = defineDocs({
  dir: "content/docs/zh",
});

export default defineConfig();
