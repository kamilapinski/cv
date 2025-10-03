'use client';

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const dynamic = "force-static"; // wymusza statyczną generację

function ballHover() {
    
    const balls = document.querySelectorAll(".ball");

    balls.forEach((ball) => {
        ball.addEventListener("mouseenter", () => {
            balls.forEach((b) => b.classList.add("inactive"));
            ball.classList.remove("inactive");
        });

        ball.addEventListener("mouseleave", () => {
            balls.forEach((b) => b.classList.remove("inactive"));
        });
    });

}

export default function Skills() {

    useEffect(() => {
        ballHover();
    }, []);

    const { t } = useTranslation();

    return (
        <section>
            <div className="readable">
                <h2 className="mb-10">{t("Skills.title")}</h2>

                <div className="skills">
                    <div>
                        <h3 className="ball five">C++</h3>
                    </div>
                    <div>
                        <h3 className="ball four">Python</h3>
                    </div>
                    <div>
                        <h3 className="ball four">Java</h3>
                    </div>
                    <div>
                        <h3 className="ball four">C</h3>
                    </div>
                    <div>
                        <h3 className="ball three">SQL</h3>
                    </div>
                    <div>
                        <h3 className="ball three">JS</h3>
                    </div>
                    <div>
                        <h3 className="ball three">TS</h3>
                    </div>
                    <div>
                        <h3 className="ball two">PHP</h3>
                    </div>
                    <div>
                        <h3 className="ball two">ASM</h3>
                    </div>
                </div>


                <div className="skills">
                    <div>
                        <h3 className="ball five">HTML</h3>
                    </div>
                    <div>
                        <h3 className="ball five">CSS</h3>
                    </div>
                    <div>
                        <h3 className="ball five">Tailwind</h3>
                    </div>
                    <div>
                        <h3 className="ball four">React</h3>
                    </div>
                    <div>
                        <h3 className="ball four">Next.js</h3>
                    </div>
                </div>

                <div className="skills">
                    <div>
                        <h3 className="ball five">Git</h3>
                    </div>
                </div>

                <div className="skills">
                    <div>
                        <h3 className="ball !w-auto !px-4 !h-12 !rounded-lg">{t("Skills.english")}</h3>
                    </div>
                    <div>
                        <h3 className="ball !w-auto !px-4 !h-12 !rounded-lg">{t("Skills.german")}</h3>
                    </div>
                    <div>
                        <h3 className="ball !w-auto !px-4 !h-12 !rounded-lg">{t("Skills.polish")}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}