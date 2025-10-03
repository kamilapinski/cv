export type Locale = "en" | "pl";

export type AllowedLocales = Locale[];

export type I18NConfig = {
  locales: string[];
  defaultLocale: string;
  prefixDefault: boolean;
};