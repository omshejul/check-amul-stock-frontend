"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Loader } from "lucide-react";
import posthog from "posthog-js";
import SignInButton from "@/components/auth/sign-in-button";
import StockCheckerForm from "@/components/stock-checker/stock-checker-form";
import SubscriptionsList from "@/components/stock-checker/subscriptions-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StockCheckerWorkspace() {
  const { status } = useSession();
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleSubscriptionCreated = () => {
    posthog.capture("stock-subscription-created");
    setRefreshTrigger((previous) => previous + 1);
  };

  if (status === "loading") {
    return (
      <Card className="w-full">
        <CardContent className="flex items-center justify-center gap-3 py-12 text-muted-foreground">
          <Loader className="h-6 w-6 animate-spin" aria-hidden="true" />
          <span>Loading your stock monitors…</span>
        </CardContent>
      </Card>
    );
  }

  if (status === "unauthenticated") {
    return (
      <Card className="mx-auto w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle>Sign in to create an Amul stock alert</CardTitle>
          <CardDescription>
            Use your Google account to create and manage product monitors securely.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <SignInButton />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid w-full gap-8 md:grid-cols-2">
      <StockCheckerForm onSubscriptionCreated={handleSubscriptionCreated} />
      <SubscriptionsList refreshTrigger={refreshTrigger} />
    </div>
  );
}
