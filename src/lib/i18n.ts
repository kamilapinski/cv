import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enIntroduction from "../locales/en.json";
import plIntroduction from "../locales/pl.json";

i18n
  .use(initReactI18next) // pozwala react-i18next korzystać z i18n
  .init({
    resources: {
      en: { Introduction: enIntroduction },
      pl: { Introduction: plIntroduction },
    },
    lng: "pl", // język domyślny
    fallbackLng: "pl",
    ns: ["Introduction"],
    defaultNS: "Introduction",
    interpolation: { escapeValue: false },
  });

export default i18n;