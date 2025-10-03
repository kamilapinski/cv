'use client';

import { useTranslation } from "react-i18next";

export const dynamic = "force-static"; // wymusza statyczną generację

export default function Experience() {
    const { t } = useTranslation();

    return (
        <section className="readable">
            <h2 className="text-center mb-10">{t("Experience.title")}</h2>
            <div className="experiences">
                <div>
                    <div className="data">{t("Experience.studies.data")}</div>
                    <div className="desc">
                        <h3>{t("Experience.studies.title")}</h3>
                        <p>{t("Experience.studies.description")}</p>
                    </div>
                </div>
                <div>
                    <div className="data">{t("Experience.tutoring.data")}</div>
                    <div className="desc">
                        <h3>{t("Experience.tutoring.title")}</h3>
                        <p>{t("Experience.tutoring.description")}</p>
                    </div>
                </div>
                <div>
                    <div className="data">{t("Experience.VillaMed.data")}</div>
                    <div className="desc">
                        <h3>{t("Experience.VillaMed.title")}</h3>
                        <p>{t("Experience.VillaMed.description.part1")}</p>
                        <ul>
                            {(t("Experience.VillaMed.description.technologies1", { returnObjects: true }) as string[]).map(
                                (tech: string) => (
                                <li key={tech}>{tech}</li>
                                )
                            )}
                        </ul>
                        <p>{t("Experience.VillaMed.description.part2")}</p>
                        <ul>
                            {(t("Experience.VillaMed.description.technologies2", { returnObjects: true }) as string[]).map(
                                (tech: string) => (
                                    <li key={tech}>{tech}</li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="data">{t("Experience.ilocamps.data")}</div>
                    <div className="desc">
                        <h3>{t("Experience.ilocamps.title")}</h3>
                        <p>{t("Experience.ilocamps.description")}</p>
                    </div>
                </div>
                <div>
                    <div className="data">{t("Experience.oi.data")}</div>
                    <div className="desc">
                        <h3>{t("Experience.oi.title")}</h3>
                        <p>{t("Experience.oi.description")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}