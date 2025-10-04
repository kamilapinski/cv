"use client";

import { useTranslation } from "react-i18next";
import nextConfig from "../../next.config";
import { useEffect } from "react";

export const dynamic = "force-static"; // wymusza statyczną generację

export default function Introduction() {
    const ASSET_PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";

    useEffect(() => {
        const scrollBtn = document.getElementById("register-button") as HTMLButtonElement | null;

        if (scrollBtn) {
            scrollBtn.addEventListener("click", () => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                });
            });
        }
    }, []);


    return (
        <section className="flex justify-center flex-col space-y-20 min-h-screen">
            <div className="flex items-center flex-col xl:flex-row justify-center xl:space-x-20">
                <img src={`${ASSET_PREFIX}prof.jpg`} alt="Kamil Łapiński" className="prof" />
                <div className="w-full xl:w-1/4 text-center xl:text-left">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">Kamil Łapiński</h1>
                    <ul className="mt-6 xl:list-disc px-6 xl:text-left">
                        <li className="text-lg md:text-xl">Korepetytor z matematyki i informatyki</li>
                        <li className="text-lg md:text-xl">Warszawa, Białystok</li>
                        <li className="text-lg md:text-xl">Student informatyki na Uniwersytecie Warszawskim</li>
                    </ul>
                </div>
            </div>
            <div className="readable quick-info grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 justify-center gap-x-5 xl:gap-x-10 gap-y-5">
                <a className="link" href="https://e-korepetycje.net/klapinski" target="_blank" rel="noreferrer">
                    <h3>Opinie</h3>
                    <p>e-korepetycje.net/klapinski</p>
                </a>
                <a className="link" href="mailto:lapinskikamil@o2.pl" target="_blank" rel="noreferrer">
                    <h3>E-mail</h3>
                    <p>lapinskikamil@o2.pl</p>
                </a>
                <a className="link col-span-2 md:col-span-1 cursor-pointer" id="register-button">
                    <h3>Umów zajęcia</h3>
                </a>
            </div>
        </section>
    );
}
