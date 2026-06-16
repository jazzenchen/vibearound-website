import { Children, isValidElement } from "react";
import type { ComponentProps, ReactNode } from "react";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { MermaidDiagram } from "@/components/docs/mermaid-diagram";

function textFromNode(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textFromNode).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return textFromNode(node.props.children);
  return "";
}

export function DocsPre(props: ComponentProps<"pre">) {
  const child = Children.toArray(props.children)[0];

  if (isValidElement<{ className?: string; children?: ReactNode }>(child)) {
    const className = child.props.className ?? "";
    const language = className.split(/\s+/).find((name) => name.startsWith("language-"));

    if (language === "language-mermaid") {
      return <MermaidDiagram chart={textFromNode(child.props.children).trim()} />;
    }
  }

  const Pre = defaultMdxComponents.pre ?? "pre";
  return <Pre {...props} />;
}
