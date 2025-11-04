"use client";

import posthog from "posthog-js";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  return (
    <Button
      onClick={() => {
        posthog.capture('user_signed_out');
        signOut();
      }}
      variant="outline"
      size="lg"
    >
      Sign out
    </Button>
  );
}
