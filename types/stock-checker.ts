// Valid duration options in minutes
export const DURATION_OPTIONS = {
  "1hr": 60,
  "6hr": 360,
  "12hr": 720,
  "24hr": 1440,
} as const;

export type DurationOption = keyof typeof DURATION_OPTIONS;

export interface CreateCheckRequest {
  productUrl: string;
  deliveryPincode: string;
  phoneNumber: string;
  email: string;
  intervalMinutes: number;
}

export interface CreateCheckResponse {
  message: string;
  productId: number;
  subscriptionId: number;
  email: string;
}

export interface Subscription {
  id: number;
  product_id: number;
  email: string;
  phone_number: string;
  created_at: string;
  status: "active" | "expired" | "deleted";
  status_changed_at: string;
  url: string;
  delivery_pincode: string;
  interval_minutes: number;
  product_name?: string | null;
  image_url?: string | null;
}

export interface GetSubscriptionsResponse {
  email: string;
  subscriptions: Subscription[];
}

export interface DeleteCheckResponse {
  message: string;
}

export interface HealthResponse {
  status: string;
}
