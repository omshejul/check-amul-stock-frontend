import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SeoPageProps {
  title: string;
  description: string;
  path: string;
  children: React.ReactNode;
  showCta?: boolean;
}

export function SeoPage({
  title,
  description,
  path,
  children,
  showCta = true,
}: SeoPageProps) {
  const url = `https://amul.omshejul.com${path}`;
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Amul Stock Checker",
        item: "https://amul.omshejul.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c"),
        }}
      />
      <article className="container mx-auto px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span aria-current="page">{title}</span>
          </nav>

          <header className="mb-10 space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
            <p className="text-lg leading-8 text-muted-foreground">{description}</p>
          </header>

          <div className="space-y-10 leading-7 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h3]:text-xl [&_h3]:font-semibold [&_li]:text-muted-foreground [&_p]:text-muted-foreground">
            {children}
          </div>

          {showCta && (
            <aside className="mt-12 rounded-xl border bg-muted/50 p-6 text-center sm:p-8">
              <h2 className="text-2xl font-bold">Create an Amul stock alert</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Paste an Amul Shop link, add your pincode, and choose how often you want us to check.
              </p>
              <Button asChild size="lg" className="mt-5">
                <Link href="/#stock-monitor">Create an alert</Link>
              </Button>
            </aside>
          )}
        </div>
      </article>
    </>
  );
}
