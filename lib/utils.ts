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
