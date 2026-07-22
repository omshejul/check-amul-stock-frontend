import Link from "next/link";
import { Github, Star, GitFork, Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="border-b">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 px-4 py-6 text-center md:grid-cols-[1fr_auto_1fr] md:text-left">
          {/* Left side - Open Source Badge */}
          <div className="flex items-center justify-center gap-3 text-sm md:justify-self-start">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Scale className="h-4 w-4" />
              <Link
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors font-medium"
              >
                MIT License
              </Link>
            </div>
            <span className="text-muted-foreground/50">•</span>
            <span className="text-muted-foreground">Open Source</span>
          </div>

          {/* Center - Creator */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-self-center">
            <span>Built by</span>
            <Link
              href="https://github.com/omshejul"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              Om Shejul
            </Link>
          </div>

          {/* Right side - GitHub Actions */}
          <div className="flex items-center justify-center gap-3 md:justify-self-end">
            <Link
              href="https://github.com/omshejul/check-amul-stock-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">View on GitHub</span>
            </Link>
            <Link
              href="https://github.com/omshejul/check-amul-stock-frontend/stargazers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              title="Star on GitHub"
            >
              <Star className="h-4 w-4" />
              <span className="hidden sm:inline">Star</span>
            </Link>
            <Link
              href="https://github.com/omshejul/check-amul-stock-frontend/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              title="Fork on GitHub"
            >
              <GitFork className="h-4 w-4" />
              <span className="hidden sm:inline">Fork</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b">
        <nav
          aria-label="Site information"
          className="container mx-auto grid max-w-6xl grid-cols-2 items-center gap-x-4 gap-y-3 px-4 py-5 text-center text-sm text-muted-foreground sm:grid-cols-4 lg:grid-cols-7"
        >
          <Link href="/how-it-works" className="hover:text-foreground hover:underline">
            How it works
          </Link>
          <Link href="/amul-protein-stock" className="hover:text-foreground hover:underline">
            Amul protein stock
          </Link>
          <Link href="/amul-restock-alerts" className="hover:text-foreground hover:underline">
            Restock alerts
          </Link>
          <Link href="/faq" className="hover:text-foreground hover:underline">
            FAQ
          </Link>
          <Link href="/about" className="hover:text-foreground hover:underline">
            About
          </Link>
          <Link href="/privacy" className="hover:text-foreground hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground hover:underline">
            Terms
          </Link>
        </nav>
      </div>

      {/* Bottom - Contribution message */}
      <div className="container mx-auto max-w-6xl px-4 py-5 text-center text-xs text-muted-foreground">
        <p>
          Free and open source. Built to save you from refreshing product pages.
        </p>
        <p className="mt-1">
          <Link
            href="https://github.com/omshejul/check-amul-stock-frontend/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            Report Issues
          </Link>
          {" • "}
          <Link
            href="https://github.com/omshejul/check-amul-stock-frontend/pulls"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            Submit PR
          </Link>
          {" • "}
          <Link
            href="https://github.com/omshejul/check-amul-stock-frontend#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            Documentation
          </Link>
        </p>
      </div>
    </footer>
  );
}
