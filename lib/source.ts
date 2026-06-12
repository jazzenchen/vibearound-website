import { loader } from "fumadocs-core/source";
import { enDocs, zhDocs } from "collections/server";

export const enSource = loader({
  baseUrl: "/docs",
  source: enDocs.toFumadocsSource(),
});

export const zhSource = loader({
  baseUrl: "/zh/docs",
  source: zhDocs.toFumadocsSource(),
});
