import type { Metadata } from "next";
import { downloadTargets, latestRelease } from "@/lib/release";

type DownloadSlug = keyof typeof downloadTargets;

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

function getTarget(slug?: string[]): string {
  const key = slug?.[0] as DownloadSlug | undefined;
  if (key && key in downloadTargets) return downloadTargets[key];
  return downloadTargets.default;
}

export function generateStaticParams() {
  return [{ slug: [] }, { slug: ["mac"] }, { slug: ["windows"] }, { slug: ["linux"] }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const target = getTarget(slug);

  return {
    title: `Download ${latestRelease.displayVersion}`,
    description: `Download VibeAround ${latestRelease.displayVersion} from GitHub Releases.`,
    alternates: {
      canonical: target,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function DownloadPage({ params }: PageProps) {
  const { slug } = await params;
  const target = getTarget(slug);

  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 py-12 text-center text-foreground">
      <meta httpEquiv="refresh" content={`0;url=${target}`} />
      <div className="max-w-md">
        <h1 className="text-2xl font-semibold">Downloading VibeAround {latestRelease.displayVersion}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Redirecting to the latest package on GitHub Releases.</p>
        <a className="mt-5 inline-flex text-sm font-medium underline" href={target}>
          Open download
        </a>
      </div>
    </main>
  );
}
