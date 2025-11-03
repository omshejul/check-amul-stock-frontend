import {
  CreateCheckRequest,
  CreateCheckResponse,
  GetSubscriptionsResponse,
  DeleteCheckResponse,
  HealthResponse,
} from "@/types/stock-checker";

class StockCheckerAPI {
  private baseURL: string;

  constructor() {
    // Use Next.js API routes (client-side calls our own API routes, not the backend directly)
    this.baseURL = "/api/stock-checker";
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestInit = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      let errorMessage = `API request failed: ${response.status} ${response.statusText}`;
      try {
        const errorData = await response.json();
        if (errorData.error) {
          errorMessage = errorData.error;
        }
      } catch (e) {
        // If error parsing fails, use default message
      }
      throw new Error(errorMessage);
    }

    return response.json();
  }

  async createCheck(
    data: Omit<CreateCheckRequest, "email">,
  ): Promise<CreateCheckResponse> {
    // Email is automatically added from session on the server
    return this.request<CreateCheckResponse>("/checks", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async getSubscriptions(): Promise<GetSubscriptionsResponse> {
    // Email is automatically retrieved from session on the server
    return this.request<GetSubscriptionsResponse>("/subscriptions");
  }

  async deleteCheck(subscriptionId: number): Promise<DeleteCheckResponse> {
    return this.request<DeleteCheckResponse>(`/checks/${subscriptionId}`, {
      method: "DELETE",
    });
  }

  async healthCheck(): Promise<HealthResponse> {
    return this.request<HealthResponse>("/health");
  }
}

export const stockCheckerAPI = new StockCheckerAPI();
