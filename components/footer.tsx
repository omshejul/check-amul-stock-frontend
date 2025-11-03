import Link from "next/link";
import { Github, Star, GitFork, Scale } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Open Source Badge */}
          <div className="flex items-center gap-3 text-sm">
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
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Created by</span>
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
          <div className="flex items-center gap-3">
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

        {/* Bottom - Contribution message */}
        <div className="mt-4 pt-4 border-t text-center text-xs text-muted-foreground">
          <p>
            Monitor Amul product stock and get instant notifications • Free and
            Open Source • Contributions Welcome
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
      </div>
    </footer>
  );
}
