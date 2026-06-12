import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, site, type Locale } from "@/lib/site";

export function SiteHeader({ locale = "en" }: { locale?: Locale }) {
  const homeHref = locale === "en" ? "/" : "/zh/";
  const switchHref = locale === "en" ? "/zh/" : "/";

  return (
    <header className="sticky top-0 z-50 border-b bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-6 px-5 sm:px-8">
        <Link href={homeHref} className="flex shrink-0 items-center gap-2 font-semibold">
          <img src="/assets/brand/vibearound-mark.svg" alt="" className="size-7" />
          <span>VibeAround</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems[locale].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link href={switchHref}>{locale === "en" ? "中文" : "EN"}</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link href={site.github}>
              <ExternalLink />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
