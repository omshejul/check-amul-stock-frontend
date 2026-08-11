"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import posthog from "posthog-js";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { stockCheckerAPI } from "@/lib/services/stock-checker-api";
import { Subscription } from "@/types/stock-checker";
import { formatDateTime } from "@/lib/utils";
import {
  AlertCircle,
  Loader,
  Trash2,
  ExternalLink,
  Clock,
  MapPin,
  Phone,
  CheckCircle,
  XCircle,
  Clock as ClockIcon,
} from "lucide-react";
import { ProductImage } from "./product-image";
import {
  staggerContainer,
  listItemVariant,
  blurFadeInUp,
} from "@/lib/animations/variants";
import { subtleBlur } from "@/lib/animations/transitions";

interface SubscriptionsListProps {
  refreshTrigger?: number;
}

export default function SubscriptionsList({
  refreshTrigger,
}: SubscriptionsListProps) {
  const { data: session } = useSession();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const fetchSubscriptions = async () => {
    if (!session?.user?.email) {
      setLoading(false);
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await stockCheckerAPI.getSubscriptions();
      // Filter out deleted subscriptions
      const activeSubscriptions = response.subscriptions.filter(
        (sub) => sub.status !== "deleted",
      );
      setSubscriptions(activeSubscriptions);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "We couldn't load your alerts",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, refreshTrigger]);

  const handleDelete = async (subscriptionId: number) => {
    if (!confirm("Remove this stock alert?")) {
      return;
    }

    setDeletingId(subscriptionId);

    try {
      await stockCheckerAPI.deleteCheck(subscriptionId);
      posthog.capture("stock_subscription_deleted", {
        subscription_id: subscriptionId,
      });
      setSubscriptions((prev) =>
        prev.filter((sub) => sub.id !== subscriptionId),
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "We couldn't remove this alert",
      );
    } finally {
      setDeletingId(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="default" className="bg-green-600 hover:bg-green-700">
            <CheckCircle className="h-3 w-3 mr-1" />
            Active
          </Badge>
        );
      case "expired":
        return (
          <Badge
            variant="default"
            className="bg-orange-600 hover:bg-orange-700"
          >
            <ClockIcon className="h-3 w-3 mr-1" />
            Complete
          </Badge>
        );
      case "deleted":
        return (
          <Badge variant="default" className="bg-red-600 hover:bg-red-700">
            <XCircle className="h-3 w-3 mr-1" />
            Deleted
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Your stock alerts</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Loader className="h-8 w-8 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={blurFadeInUp}
      transition={{ ...subtleBlur, delay: 0.1 }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Your stock alerts</CardTitle>
          <CardDescription>
            See what we are checking and remove alerts you no longer need
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {subscriptions.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>You have not created an alert yet.</p>
              <p className="text-sm mt-2">
                Use the form to track your first product.
              </p>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <AnimatePresence mode="popLayout">
                {subscriptions.map((subscription) => {
                  const isActive = subscription.status === "active";
                  const isExpired = subscription.status === "expired";
                  const isDeleted = subscription.status === "deleted";

                  return (
                    <motion.div
                      key={subscription.id}
                      variants={listItemVariant}
                      transition={subtleBlur}
                      layout
                    >
                      <Card className="overflow-hidden">
                        <CardContent className="pt-6">
                          <div className="flex gap-4">
                            {/* Product Image */}
                            <a
                              href={subscription.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${subscription.product_name || "product"} on Amul Shop`}
                              className="shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <ProductImage
                                imageUrl={subscription.image_url}
                                productName={subscription.product_name}
                                size={120}
                                className="transition-opacity hover:opacity-85"
                              />
                            </a>

                            {/* Product Info */}
                            <div className="flex-1 space-y-3 min-w-0">
                              {/* Product Name */}
                              {subscription.product_name && (
                                <h3 className="font-semibold text-lg leading-tight line-clamp-2">
                                  <a
                                    href={subscription.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="no-underline underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                  >
                                    {subscription.product_name}
                                  </a>
                                </h3>
                              )}

                              {/* Badges */}
                              <div className="flex items-center gap-2 flex-wrap">
                                {getStatusBadge(subscription.status)}
                                <Badge variant="outline">
                                  <Clock className="h-3 w-3 mr-1" />
                                  Every minute
                                </Badge>
                              </div>

                              {isExpired && (
                                <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                                  WhatsApp message sent. This alert is now complete.
                                </div>
                              )}

                              {isDeleted && (
                                <div className="text-sm text-red-600 dark:text-red-400 font-medium">
                                  This alert has been removed
                                </div>
                              )}

                              {/* Details */}
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <MapPin className="h-4 w-4" />
                                  <span>
                                    Pincode: {subscription.delivery_pincode}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Phone className="h-4 w-4 shrink-0" />
                                  <span className="break-all">
                                    {subscription.phone_number}
                                  </span>
                                </div>

                                <div className="text-xs text-muted-foreground">
                                  Created:{" "}
                                  {formatDateTime(subscription.created_at)}
                                </div>

                                {!isActive &&
                                  subscription.status_changed_at && (
                                    <div className="text-xs text-muted-foreground">
                                      Updated:{" "}
                                      {formatDateTime(
                                        subscription.status_changed_at,
                                      )}
                                    </div>
                                  )}
                              </div>

                              {/* Action Buttons */}
                              <div className="flex gap-2 flex-wrap">
                                <Button variant="outline" size="sm" asChild>
                                  <a
                                    href={subscription.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1"
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                    View Product
                                  </a>
                                </Button>

                                {!isDeleted && (
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() =>
                                      handleDelete(subscription.id)
                                    }
                                    title="Remove alert"
                                  >
                                    {deletingId === subscription.id ? (
                                      <Loader className="h-4 w-4 animate-spin" />
                                    ) : (
                                      <>
                                        <Trash2 className="h-4 w-4" />
                                        Remove
                                      </>
                                    )}
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
