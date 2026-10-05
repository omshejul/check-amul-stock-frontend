"use client";

import Link from "next/link";
import { Mail, PackageSearch } from "lucide-react";
import posthog from "posthog-js";
import { signOut, useSession } from "next-auth/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between">
        <Link href="/" className="flex min-w-0 items-center gap-2" aria-label="Amul Stock Checker home">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <PackageSearch className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="truncate font-bold">Amul Stock Checker</span>
        </Link>

        <nav aria-label="Account and appearance" className="flex shrink-0 items-center gap-1 pl-2 sm:gap-2">
          <Button asChild variant="ghost">
            <a href="mailto:amul@omshejul.com">
              <Mail aria-hidden="true" />
              <span className="sr-only sm:not-sr-only">Contact</span>
            </a>
          </Button>
          <ThemeToggle />

          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                  aria-label="Open account menu"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={session.user.image || ""}
                      alt={session.user.name || "User"}
                    />
                    <AvatarFallback>
                      {session.user.name?.charAt(0)?.toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{session.user.name}</p>
                    <p className="break-all text-xs leading-none text-muted-foreground">
                      {session.user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/#stock-monitor" className="cursor-pointer">
                    My alerts
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    posthog.capture("user-signed-out");
                    signOut();
                  }}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              variant="outline"
              onClick={() => posthog.capture("sign-in-clicked", { location: "navbar" })}
            >
              <Link href="/auth/signin">Sign in</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
