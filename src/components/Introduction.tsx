"use client";

import { useTranslation } from "react-i18next";
import nextConfig from "../../next.config";

export const dynamic = "force-static"; // wymusza statyczną generację

export default function Introduction() {
    const ASSET_PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";
    const { t } = useTranslation();

    return (
        <section className="flex justify-center flex-col space-y-20 min-h-screen">
            <div className="flex items-center flex-col xl:flex-row justify-center xl:space-x-20">
                <img src={`${ASSET_PREFIX}prof.jpg`} alt="Kamil Łapiński" className="prof" />
                <div className="w-full xl:w-1/4 text-center xl:text-left">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">Kamil Łapiński</h1>
                    <ul className="mt-6 xl:list-disc px-6 xl:text-left">
                        <li className="text-lg md:text-xl">{t("Introduction.Me.occupation")}</li>
                        <li className="text-lg md:text-xl">{t("Introduction.Me.location")}</li>
                        <li className="text-lg md:text-xl">{t("Introduction.Me.studies")}</li>
                    </ul>
                </div>
            </div>
            <div className="readable quick-info grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 justify-center gap-x-5 xl:gap-x-10 gap-y-5">
                <a className="link" href="https://github.com/kamilapinski" target="_blank" rel="noreferrer">
                    <h3>{t("Introduction.Github.title")}</h3>
                    <p>{t("Introduction.Github.description")}</p>
                </a>
                <a className="link" href="https://www.linkedin.com/in/kamil-%C5%82api%C5%84ski-081049344/" target="_blank" rel="noreferrer">
                    <h3>{t("Introduction.Linkedin.title")}</h3>
                    <p>{t("Introduction.Linkedin.description")}</p>
                </a>
                <a className="link col-span-2 md:col-span-1" href="mailto:lapinskikamil@o2.pl" target="_blank" rel="noreferrer">
                    <h3>{t("Introduction.Email.title")}</h3>
                    <p>{t("Introduction.Email.description")}</p>
                </a>
            </div>
        </section>
    );
}
