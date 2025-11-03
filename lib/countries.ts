import { getCountries, getCountryCallingCode } from "libphonenumber-js/min";
import type { CountryCode } from "libphonenumber-js";

export interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

function countryCodeToFlagEmoji(countryCode: string): string {
  if (!countryCode) return "";
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    .join("");
}

export function getAllCountries(locale: string = "en"): Country[] {
  type RegionDisplayNames = { of(regionCode: string): string | undefined };
  type IntlWithDisplayNames = {
    DisplayNames?: new (
      locales: string | string[],
      options: { type: "region" }
    ) => RegionDisplayNames;
  };

  const DisplayNamesCtor = (Intl as unknown as IntlWithDisplayNames)
    .DisplayNames;
  const displayNames = DisplayNamesCtor
    ? new DisplayNamesCtor([locale], { type: "region" })
    : null;

  const codes = getCountries() as CountryCode[];

  const countries: Country[] = codes.map((code: CountryCode) => {
    const name = displayNames?.of(code) ?? code;
    const dialCode = "+" + getCountryCallingCode(code);
    const flag = countryCodeToFlagEmoji(code);
    return { code, name, dialCode, flag };
  });

  countries.sort((a, b) => a.name.localeCompare(b.name));
  return countries;
}
