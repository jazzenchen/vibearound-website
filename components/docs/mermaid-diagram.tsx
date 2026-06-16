"use client";

import { useEffect, useId, useState } from "react";
import mermaid from "mermaid";

type MermaidDiagramProps = {
  chart: string;
};

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const id = useId().replace(/:/g, "");
  const [svg, setSvg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: document.documentElement.classList.contains("dark") ? "dark" : "default",
    });

    mermaid
      .render(`mermaid-${id}`, chart)
      .then(({ svg }) => {
        if (!cancelled) {
          setSvg(svg);
          setError("");
        }
      })
      .catch((reason: unknown) => {
        if (!cancelled) {
          setSvg("");
          setError(reason instanceof Error ? reason.message : "Failed to render Mermaid diagram.");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (error) {
    return (
      <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-sm">
        <code>{chart}</code>
      </pre>
    );
  }

  return (
    <figure className="my-6 overflow-x-auto rounded-lg border bg-card p-4">
      {svg ? (
        <div
          className="min-w-fit [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <div className="h-48 animate-pulse rounded-md bg-muted" aria-label="Rendering diagram" />
      )}
    </figure>
  );
}
