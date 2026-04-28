export const locales = ["de", "uk", "ar"] as const;
export const defaultLocale = "de" as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  uk: "Українська",
  ar: "العربية",
};

export const isRTL: Record<Locale, boolean> = {
  de: false,
  uk: false,
  ar: true,
};
