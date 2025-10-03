"use client";

import { ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

export function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const segments = pathname?.split("/") || [];
  const activeLocale = segments[1] || "pl";
  const router = useRouter();

  useEffect(() => {
    if (i18n.language !== activeLocale) {
      i18n.changeLanguage(activeLocale);
    }
    router.refresh();
  }, [activeLocale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
