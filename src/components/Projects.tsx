'use client';

import { X, Search } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const dynamic = "force-static"; // wymusza statyczną generację

function projectDescOpen() {
    const projects = document.querySelectorAll(".project");
    const projectDesc = document.querySelectorAll(".project-desc");
    projects.forEach((project, index) => {
        project.addEventListener("click", () => {
            projectDesc[index]?.classList.add("active");
        });
    });
}

function projectDescClose() {
    const projectDesc = document.querySelectorAll(".project-desc");
    const closeBtn = document.querySelectorAll(".project-desc .close");

    closeBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            projectDesc[index]?.classList.remove("active");
        });
    });
}

export default function Projects() {
    const ASSET_PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";

    useEffect(() => {
        projectDescOpen();
        projectDescClose();
    }, []);

    const { t } = useTranslation();

    return (
        <section className="projects relative w-full overflow-x-hidden">
            <div className="readable py-10">
                <h2>{t("Projects.title")}</h2>
                <div className="flex flex-wrap flex-row justify-center">
                    <button className="project">
                        <p>Villa Med</p>
                    </button>
                    <button className="project">
                        <p>Github</p>
                    </button>
                    <button className="project soon">
                        <p></p>
                    </button>
                    <button className="project soon">
                        <p></p>
                    </button>
                    <button className="project soon">
                        <p></p>
                    </button>
                    <button className="project soon">
                        <p></p>
                    </button>
                </div>
            </div>

            <div className="project-desc">
                <button className="close"><X className="size-15" /></button>
                <div className="w-full xl:w-1/5 flex flex-col justify-start space-x-2">
                    <div className="flex flex-col items-center xl:items-start">
                        <h3>Villa Med</h3>
                        <p>Strona internetowa stworzona przy użyciu nowoczesnych technologii webowych takich jak react, next.js i tailwind.css.</p>
                    </div>
                    <a href="https://villamed.pl" target="_blank" className="search mx-auto"><Search className="size-15" /></a>
                </div>
                <div className="w-full xl:w-4/5 h-full flex items-start md:items-center">
                    <img src={`${ASSET_PREFIX}villamed.png`} alt="Villa Med" className="mx-auto !w-4/5 !md:w-full" />
                </div>
            </div>

            <div className="project-desc">
                <button className="close"><X className="size-15" /></button>
                <div className="w-full flex flex-col justify-start space-x-2">
                    <div className="flex flex-col items-center xl:items-start">
                        <h3>Github</h3>
                        <p>Na githubie mam wiele projektów w C++, C, Pythonie, Javie, Asemblerze i innych językach, które robiłem podczas studiów.</p>
                    </div>
                    <a href="https://github.com/kamilapinski" target="_blank" className="search mx-auto"><Search className="size-15" /></a>
                </div>
            </div>
        </section>
    );
};