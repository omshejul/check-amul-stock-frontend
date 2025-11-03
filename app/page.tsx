"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
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
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const { status } = useSession();
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleSubscriptionCreated = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8 items-center max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center space-y-4 w-full max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Amul Stock Checker
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Never miss out on your favorite Amul products again. Get instant
            WhatsApp notifications when out-of-stock items become available for
            your delivery pincode.
          </p>
        </div>

        {/* How It Works */}
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>
              Simple automated monitoring for Amul product availability
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <h3 className="font-semibold">Add Product</h3>
                <p className="text-sm text-muted-foreground">
                  Enter the Amul product URL, your pincode, and phone number
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <h3 className="font-semibold">Automated Checks</h3>
                <p className="text-sm text-muted-foreground">
                  Our service monitors stock availability at your chosen
                  interval
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <h3 className="font-semibold">Get Notified</h3>
                <p className="text-sm text-muted-foreground">
                  Receive instant WhatsApp alerts when the product is back in
                  stock
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading State */}
        {status === "loading" && (
          <div className="flex justify-center w-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Authentication Section */}
        {status === "unauthenticated" && (
          <Card className="w-full max-w-lg">
            <CardHeader className="text-center">
              <CardTitle>Sign In to Get Started</CardTitle>
              <CardDescription>
                Authenticate with your Google account to start monitoring
                products
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <SignInButton />
            </CardContent>
          </Card>
        )}

        {/* Stock Checker Section - Only shown when authenticated */}
        {status === "authenticated" && (
          <>
            <Separator className="w-full max-w-4xl" />

            <div className="w-full max-w-4xl grid gap-8 md:grid-cols-2">
              <StockCheckerForm
                onSubscriptionCreated={handleSubscriptionCreated}
              />
              <SubscriptionsList refreshTrigger={refreshTrigger} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
