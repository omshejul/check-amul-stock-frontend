"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhoneInput } from "@/components/PhoneInput";
import { stockCheckerAPI } from "@/lib/services/stock-checker-api";
import { DURATION_OPTIONS, DurationOption } from "@/types/stock-checker";
import { AlertCircle, CheckCircle2, Loader, LocateFixed } from "lucide-react";
import { blurFadeInUp, blurFadeInDown } from "@/lib/animations/variants";
import { subtleBlur } from "@/lib/animations/transitions";
import posthog from 'posthog-js';
import { getCurrentLocation, getPincodeFromCoordinates } from "@/lib/utils";

interface StockCheckerFormProps {
  onSubscriptionCreated?: () => void;
}

export default function StockCheckerForm({
  onSubscriptionCreated,
}: StockCheckerFormProps) {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    productUrl: "",
    deliveryPincode: "",
    phoneNumber: "",
    duration: "6hr" as DurationOption,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [detectingPincode, setDetectingPincode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!session?.user?.email) {
      setError("You must be signed in to create a subscription");
      return;
    }

    if (
      !formData.productUrl ||
      !formData.deliveryPincode ||
      !formData.phoneNumber
    ) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      await stockCheckerAPI.createCheck({
        productUrl: formData.productUrl,
        deliveryPincode: formData.deliveryPincode,
        phoneNumber: formData.phoneNumber,
        intervalMinutes: DURATION_OPTIONS[formData.duration],
      });

      posthog.capture('stock-monitor-subscription-created', {
        product_url: formData.productUrl,
        delivery_pincode: formData.deliveryPincode,
        check_interval_minutes: DURATION_OPTIONS[formData.duration],
        duration_option: formData.duration,
      });

      setSuccess(
        `Subscription created successfully! You will be notified when stock becomes available.`,
      );

      // Reset form
      setFormData({
        productUrl: "",
        deliveryPincode: "",
        phoneNumber: "",
        duration: "6hr",
      });

      // Notify parent component
      if (onSubscriptionCreated) {
        onSubscriptionCreated();
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create subscription";
      setError(errorMessage);
      posthog.capture('stock-monitor-subscription-failed', {
        product_url: formData.productUrl,
        delivery_pincode: formData.deliveryPincode,
        check_interval_minutes: DURATION_OPTIONS[formData.duration],
        duration_option: formData.duration,
        error_message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDetectPincode = async () => {
    // Show loader immediately on click
    setDetectingPincode(true);
    setError(null);

    const startTime = Date.now();
    const MIN_LOADER_TIME = 500; // Minimum 800ms loader display time

    try {
      // Get user's current location using GPS
      const position = await getCurrentLocation();
      const { latitude, longitude, accuracy } = position.coords;

      // Reverse geocode to get pincode
      const pincode = await getPincodeFromCoordinates(latitude, longitude);

      // Update form data
      setFormData({ ...formData, deliveryPincode: pincode });

      posthog.capture('pincode-detected-via-geolocation', {
        latitude,
        longitude,
        pincode,
        accuracy,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to detect pincode";
      setError(errorMessage);
      posthog.capture('pincode-detection-failed', {
        error_message: errorMessage,
      });
    } finally {
      // Ensure loader shows for minimum time
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_LOADER_TIME - elapsedTime);
      
      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime));
      }
      
      setDetectingPincode(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={blurFadeInUp}
      transition={subtleBlur}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Monitor Amul Product Stock</CardTitle>
          <CardDescription>
            Get notified when your desired product comes back in stock
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="productUrl">Product URL *</Label>
              <Input
                id="productUrl"
                type="url"
                placeholder="https://shop.amul.com/en/product/..."
                value={formData.productUrl}
                onChange={(e) =>
                  setFormData({ ...formData, productUrl: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="deliveryPincode">Delivery Pincode *</Label>
              <div className="relative">
                <Input
                  id="deliveryPincode"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="431136"
                  value={formData.deliveryPincode}
                  onChange={(e) => {
                    // Only allow numbers, max 6 digits
                    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
                    setFormData({ ...formData, deliveryPincode: value });
                  }}
                  required
                  className="pr-11"
                  maxLength={6}
                />
                <motion.button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDetectPincode();
                  }}
                  disabled={detectingPincode || loading}
                  className=" cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-8 h-8 rounded-md hover:bg-accent"
                  aria-label="Detect pincode using GPS"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <AnimatePresence mode="wait">
                    {detectingPincode ? (
                      <motion.div
                        key="loader"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Loader className="h-5 w-5 animate-spin" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="icon"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <LocateFixed className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">WhatsApp Number *</Label>
              <PhoneInput
                value={formData.phoneNumber}
                onChange={(phone) =>
                  setFormData({ ...formData, phoneNumber: phone })
                }
                placeholder="Phone number"
              />
              <p className="text-xs text-muted-foreground">
                Select your country and enter your phone number
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Check Interval</Label>
              <Select
                value={formData.duration}
                onValueChange={(value: DurationOption) =>
                  setFormData({ ...formData, duration: value })
                }
              >
                <SelectTrigger id="duration">
                  <SelectValue placeholder="Select interval" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1hr">Every 1 hour</SelectItem>
                  <SelectItem value="6hr">Every 6 hours</SelectItem>
                  <SelectItem value="12hr">Every 12 hours</SelectItem>
                  <SelectItem value="24hr">Every 24 hours</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                How often to check for stock availability
              </p>
            </div>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={blurFadeInDown}
                  transition={subtleBlur}
                >
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={blurFadeInDown}
                  transition={subtleBlur}
                >
                  <Alert className="border-green-500 text-green-700 dark:text-green-400">
                    <CheckCircle2 className="h-4 w-4" />
                    <AlertDescription>{success}</AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Creating subscription...
                </>
              ) : (
                "Start Monitoring"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
