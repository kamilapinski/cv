'use client';

import { Star, CircleSmall, Hammer, Lightbulb, Users } from "lucide-react";
import { use, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const dynamic = "force-static"; // wymusza statyczną generację

function technologyHover() {
    const technologies = document.querySelectorAll(".technologies tr");

    technologies.forEach((tech) => {
        tech.addEventListener("mouseenter", () => {
            const gradient = document.getElementById("whoiam-gradient");
            if (gradient) {
                const techName = tech.querySelector("td")?.textContent;
                if (techName) {
                    gradient.innerHTML = `<h3>${techName}</h3>`;
                    gradient.classList.add("see");
                    gradient.classList.add("blue");
                }
            }
        });

        tech.addEventListener("mouseleave", () => {
            const gradient = document.getElementById("whoiam-gradient");
            if (gradient) {
                gradient.classList.remove("see");
                gradient.classList.remove("blue");
            }
        });
    });
}

function featureHover() {
    const features = document.querySelectorAll(".feature");

    const icons = {
        "learning": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
        "code": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon lucide-code"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
        "quality": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
        "communication": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>',
        "win": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal-icon lucide-medal"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>'
    }

    features.forEach((feature) => {
        feature.addEventListener("mouseenter", () => {
            const gradient = document.getElementById("whoiam-gradient");
            if (gradient) {
                const iconKey = (feature as HTMLElement).dataset.icon as keyof typeof icons;
                gradient.innerHTML = icons[iconKey] ?? "";
                gradient.classList.add("see");
                gradient.classList.add("green");
            }
        });

        feature.addEventListener("mouseleave", () => {
            const gradient = document.getElementById("whoiam-gradient");
            if (gradient) {
                gradient.classList.remove("see");
                gradient.classList.remove("green");
            }
        });
    });
}

export default function WhoIAm() {

    useEffect(() => {
        technologyHover();
        featureHover();
    }, []);

    const { t } = useTranslation();

    return (
        <section className="relative w-full overflow-x-hidden">
            <div className="readable whoiam grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 text-center p-2 md:p-20 gap-y-7 ">
                <div>
                    <h2>{t("WhoIAm.title")}</h2>
                    <p>{t("WhoIAm.description.studies")} {t("WhoIAm.description.interests.part1")} <strong>{t("WhoIAm.description.interests.part2")}</strong> {t("WhoIAm.description.interests.part3")} <strong>{t("WhoIAm.description.interests.part4")}</strong>.</p>
                </div>
                <div className="technologies row-span-2">
                    <h2>{t("WhoIAm.technologies.title")}</h2>
                    <table className="w-full sm:w-3/4 md:w-2/3">
                        <tbody>
                            <tr>
                                <td>C++</td>
                                <td><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /></td>
                            </tr>
                            <tr>
                                <td>Python</td>
                                <td><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /></td>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /></td>
                            </tr>
                            <tr>
                                <td>Git</td>
                                <td><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /></td>
                            </tr>
                            <tr>
                                <td>React</td>
                                <td><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /></td>
                            </tr>
                            <tr>
                                <td>Web</td>
                                <td><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /></td>
                            </tr>
                            <tr>
                                <td>PHP</td>
                                <td><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /></td>
                            </tr>
                            <tr>
                                <td>SQL</td>
                                <td><CircleSmall className="dot" /><CircleSmall className="dot" /><CircleSmall className="dot" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="technologies">
                    <h2>{t("WhoIAm.features.title")}</h2>
                    <ul>
                        <li className="feature" data-icon="learning">{t("WhoIAm.features.feature1")}</li>
                        <li className="feature" data-icon="code">{t("WhoIAm.features.feature2")}</li>
                        <li className="feature" data-icon="quality">{t("WhoIAm.features.feature3")}</li>
                        <li className="feature" data-icon="communication">{t("WhoIAm.features.feature4")}</li>
                        <li className="feature" data-icon="win">{t("WhoIAm.features.feature5")}</li>
                    </ul>
                </div>
            </div>
            <div id="whoiam-gradient" className="absolute w-screen h-full top-0 left-0 -z-10 gradient opacity-10 flex flex-col justify-center items-end text-7xl lg:text-8xl font-bold text-black">
            </div>
        </section>
    );
}