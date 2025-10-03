'use client';

import { useTranslation } from "react-i18next";

export const dynamic = "force-static"; // wymusza statyczną generację

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <p>{t("Footer.description")}</p>
        </footer>
    );
}