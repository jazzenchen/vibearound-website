import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { remarkMdxMermaid } from "fumadocs-core/mdx-plugins";

export const enDocs = defineDocs({
  dir: "content/docs/en",
});

export const zhDocs = defineDocs({
  dir: "content/docs/zh",
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid],
  },
});
