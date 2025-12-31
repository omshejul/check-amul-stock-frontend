import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string to display in the user's local timezone
 * Handles UTC timestamps from the backend properly
 */
export function formatDateTime(dateString: string): string {
  // Parse the date - if it's already in ISO format, it will be parsed correctly
  // If it doesn't have a Z or timezone indicator, treat it as UTC
  let date: Date;

  if (
    dateString.endsWith("Z") ||
    dateString.includes("+") ||
    dateString.includes("T")
  ) {
    // Already has timezone info
    date = new Date(dateString);
  } else {
    // Assume it's UTC and add Z
    date = new Date(dateString + "Z");
  }

  // Get user's timezone
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: userTimezone,
    timeZoneName: "short",
  }).format(date);
}

/**
 * Gets user's current location using browser Geolocation API
 */
export function getCurrentLocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => {
        let errorMessage = "Failed to get your location";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied. Please enable location permissions in your browser settings.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information unavailable. Please ensure location services are enabled on your device.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out. Please try again.";
            break;
        }
        reject(new Error(errorMessage));
      },
      {
        enableHighAccuracy: false, // Use less accurate but faster method
        timeout: 15000, // 15 second timeout
        maximumAge: 300000, // Accept cached positions up to 5 minutes old
      }
    );
  });
}

/**
 * Reverse geocodes coordinates to get pincode/postal code
 * Uses BigDataCloud API (free, reliable, no API key required)
 * Falls back to LocationIQ if API key is provided
 */
export async function getPincodeFromCoordinates(
  latitude: number,
  longitude: number
): Promise<string> {
  // Try BigDataCloud API first (free, reliable, no API key required)
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
      {
        headers: {
          "Accept": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("BigDataCloud API request failed");
    }

    const data = await response.json();

    // BigDataCloud returns postal code in postcode field
    const pincode = data.postcode;

    if (pincode) {
      // Clean up pincode (remove spaces, take first 6 digits for India)
      const cleanPincode = pincode.toString().replace(/\s+/g, "").slice(0, 6);
      return cleanPincode;
    }
  } catch (error) {
    // Fall through to LocationIQ fallback if API key is available
    console.warn("BigDataCloud API failed, trying LocationIQ:", error);
  }

  // Fallback to LocationIQ if API key is provided (optional, more reliable for Indian addresses)
  const locationIQKey = process.env.NEXT_PUBLIC_LOCATIONIQ_KEY;
  if (locationIQKey) {
    try {
      const response = await fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=${locationIQKey}&lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`,
        {
          headers: {
            "Accept": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("LocationIQ API request failed");
      }

      const data = await response.json();

      // Try to get pincode from various possible fields
      const pincode =
        data.address?.postcode ||
        data.address?.postal_code ||
        data.address?.pin ||
        data.address?.pincode;

      if (pincode) {
        // Clean up pincode (remove spaces, take first 6 digits for India)
        const cleanPincode = pincode.toString().replace(/\s+/g, "").slice(0, 6);
        return cleanPincode;
      }
    } catch (error) {
      // If LocationIQ also fails, continue to throw error
    }
  }

  // If all APIs fail, throw a helpful error
  throw new Error("Pincode not found for your location. Please enter your pincode manually.");
}
