"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCountries } from "@/lib/countries";
import { parsePhoneNumberFromString } from "libphonenumber-js/min";
import ReactCountryFlag from "react-country-flag";

import type { Country } from "@/lib/countries";

const allCountries = getAllCountries();
const pinnedCodes = ["US", "IN"] as const;

interface PhoneInputProps {
  value?: string;
  onChange: (phone: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function PhoneInput({
  value = "",
  onChange,
  placeholder = "Phone number",
  disabled = false,
  className = "",
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = React.useState<Country>(
    allCountries.find((c) => c.code === "US") || allCountries[0]
  ); // Default to USA; may be overridden by IP or value
  const [phoneNumber, setPhoneNumber] = React.useState("");

  // Try to detect the user's country by IP on mount (only when no value is provided)
  const geoAppliedRef = React.useRef(false);
  React.useEffect(() => {
    if (geoAppliedRef.current) return;
    if (value) return;
    geoAppliedRef.current = true;
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const ipCode = (
          data?.country_code as string | undefined
        )?.toUpperCase();
        const byIp = ipCode
          ? allCountries.find((c) => c.code === ipCode)
          : null;
        if (byIp) {
          setSelectedCountry(byIp);
        } else {
          const us = allCountries.find((c) => c.code === "US");
          if (us) setSelectedCountry(us);
        }
      })
      .catch(() => {
        const us = allCountries.find((c) => c.code === "US");
        if (us) setSelectedCountry(us);
      });
  }, [value]);

  React.useEffect(() => {
    // If value is provided, try to parse it and sync internal state.
    if (!value) return;

    // If the value matches the current selection, only update national number if it changed
    if (value.startsWith(selectedCountry.dialCode)) {
      const national = value.slice(selectedCountry.dialCode.length);
      if (national !== phoneNumber) {
        setPhoneNumber(national);
      }
      return;
    }

    // Try to parse the number to determine the specific region
    const parsed = parsePhoneNumberFromString(value);
    if (parsed?.country) {
      const nextCountry = allCountries.find((x) => x.code === parsed.country);
      if (nextCountry) {
        const nextNational = parsed.nationalNumber || "";
        const countryChanged = nextCountry.code !== selectedCountry.code;
        const phoneChanged = nextNational !== phoneNumber;
        if (countryChanged) setSelectedCountry(nextCountry);
        if (phoneChanged) setPhoneNumber(nextNational);
        return;
      }
    }

    // Fallback: find candidates by dial code prefix
    const candidates = allCountries.filter((c) => value.startsWith(c.dialCode));
    if (candidates.length > 0) {
      // Prefer previous selection if still compatible
      const prev = candidates.find((c) => c.code === selectedCountry.code);
      const chosen =
        prev ||
        candidates.find((c) => c.code === "US") ||
        candidates.find((c) => c.code === "CA") ||
        candidates[0];
      const national = value.replace(chosen.dialCode, "");
      const countryChanged = chosen.code !== selectedCountry.code;
      const phoneChanged = national !== phoneNumber;
      if (countryChanged) setSelectedCountry(chosen);
      if (phoneChanged) setPhoneNumber(national);
      return;
    }

    // If nothing matched, just set raw value as phone number if different
    if (value !== phoneNumber) setPhoneNumber(value);
  }, [value]);
  const displayCountries: Country[] = React.useMemo(() => {
    const pinned = (Array.from(pinnedCodes) as string[])
      .map((code) => allCountries.find((c) => c.code === code))
      .filter(Boolean) as Country[];
    const rest = allCountries.filter(
      (c) => !(pinnedCodes as readonly string[]).includes(c.code)
    );
    return [...pinned, ...rest];
  }, []);

  // No effect pushing value up; only propagate via explicit user actions

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ""); // Only allow digits
    setPhoneNumber(input);
    const next = selectedCountry.dialCode + input;
    if (next !== value) onChange(next);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-stretch">
        {/* Country Code Select */}
        <Select
          disabled={disabled}
          value={selectedCountry.code}
          onValueChange={(code) => {
            const country = allCountries.find((c) => c.code === code);
            if (country) {
              setSelectedCountry(country);
              const next = country.dialCode + phoneNumber;
              if (next !== value) onChange(next);
            }
          }}
        >
          <SelectTrigger className="w-max cursor-pointer bg-neutral-500/10 h-12 border-r-0 border-neutral-300 dark:border-neutral-700 rounded-l-xl rounded-r-none outline-none focus:outline-none focus:ring-0">
            <SelectValue>
              <div className="flex items-center gap-2">
                <ReactCountryFlag
                  countryCode={selectedCountry.code}
                  svg
                  aria-label={selectedCountry.name}
                  style={{ width: "1.125rem", height: "1.125rem" }}
                />
                <span className="text-xs font-medium">
                  {selectedCountry.dialCode}
                </span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="max-h-[40vh] overflow-y-auto font-plusJakartaSans">
            <SelectGroup>
              <SelectLabel>Countries</SelectLabel>
              {displayCountries.map((country) => (
                <SelectItem
                  key={country.code}
                  value={country.code}
                  textValue={`${country.name} ${country.dialCode} ${country.code}`}
                >
                  <div className="flex items-center gap-2">
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      aria-label={country.name}
                      style={{ width: "1rem", height: "1rem" }}
                    />
                    <div className="flex-1 min-w-0 truncate">
                      <div className="text-sm font-medium truncate">
                        {country.name}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {country.dialCode}
                      </div>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Phone Number Input */}
        <div className="flex-1 relative">
          <input
            type="tel"
            inputMode="numeric"
            value={phoneNumber}
            onChange={handlePhoneChange}
            disabled={disabled}
            placeholder={placeholder}
            className="w-full h-12 px-3 border border-neutral-300 dark:border-neutral-700 rounded-r-xl focus:outline-none focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-black dark:text-neutral-100"
          />
        </div>
      </div>
    </div>
  );
}