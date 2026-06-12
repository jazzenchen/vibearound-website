import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: `${site.name} - Keep your AI coding agents around`,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  keywords: [
    "VibeAround",
    "AI coding agents",
    "local AI coding agent",
    "remote coding",
    "Codex CLI",
    "Claude Code",
    "Gemini CLI",
    "OpenCode",
    "AI provider switcher",
    "local-first workspace",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-CN": "/zh/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} - Keep your AI coding agents around`,
    description: site.description,
    url: site.url,
    images: [{ url: site.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - Keep your AI coding agents around`,
    description: site.description,
    images: [site.ogImage],
  },
  icons: {
    icon: [
      { url: "/assets/brand/vibearound-mark.svg", type: "image/svg+xml" },
      { url: "/assets/vibearound-icon.png", type: "image/png" },
    ],
    apple: "/assets/vibearound-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider
          theme={{
            enabled: true,
            defaultTheme: "light",
            enableSystem: true,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
