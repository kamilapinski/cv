"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { i18nConfig } from "@/lib/i18n/index";

export const dynamic = "force-static"; // wymusza statyczną generację

export default function LangToggle() {
    const { i18n } = useTranslation();
    const [mounted, setMounted] = React.useState(false);

    const router = useRouter();
    const currentPathname = usePathname();

    const pathname = usePathname(); // np. "/pl/introduction"
    const segments = pathname.split("/"); // ["", "pl", "introduction"]
    const activeLocale = segments[1] || i18nConfig.defaultLocale; // jeśli brak segmentu, domyślny język

    // Ensure client-side rendering
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const newLocale = activeLocale === "en" ? "pl" : "en";

    const onLanguageChange = () => {
        // Set cookie for locale (optional)
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // Compute new path with updated locale
        if (activeLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
            router.push("/" + newLocale + currentPathname);
        } else {
            router.push(currentPathname.replace(`/${activeLocale}`, `/${newLocale}`));
        }

        router.refresh();
    };

    return (
        <div>
        <button
            onClick={onLanguageChange}
            className="rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer option-icon text-white"
        >
            {activeLocale === "en" ? "PL" : "EN"}
        </button>
        </div>
    );
}
