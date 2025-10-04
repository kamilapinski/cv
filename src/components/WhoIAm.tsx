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
        "communication": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>',
        "win": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal-icon lucide-medal"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>',
        "check-check": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>',
        "rabbit": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rabbit-icon lucide-rabbit"><path d="M13 16a3 3 0 0 1 2.24 5"/><path d="M18 12h.01"/><path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"/><path d="M20 8.54V4a2 2 0 1 0-4 0v3"/><path d="M7.612 12.524a3 3 0 1 0-1.6 4.3"/></svg>',
        "school": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-school-icon lucide-school"><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M18 5v16"/><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"/><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"/><path d="M6 5v16"/><circle cx="12" cy="9" r="2"/></svg>',
        "book-open": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text"><path d="M12 7v14"/><path d="M16 12h2"/><path d="M16 8h2"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/><path d="M6 12h2"/><path d="M6 8h2"/></svg>',
        "grow": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined"><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/></svg>'
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

    return (
        <section className="relative w-full overflow-x-hidden">
            <div className="readable whoiam flex flex-col lg:flex-row text-center p-2 md:p-20 lg:gap-x-20">
                <div className="flex flex-col w-full lg:w-1/2">
                    <div className="text-justify"> 
                        <h2>Kim jestem?</h2>
                        <p>Jestem studentem informatyki na Wydziale Matematyki, Informatyki i Mechaniki Uniwersytetu Warszawskiego. Jestem korepetytorem od września 2023 roku i pomogłem już wielu uczniom, zarówno tym, którzy chcą po prostu podciągnąć wyniki, jak i tym, którzy mierzą wysoko i zależy im na wysokich wynikach w konkursach, czy egzaminach.</p>
                    </div>
                    <div className="text-justify space-y-2">
                        <h2>Jak wyglądają zajęcia?</h2>

                        <h3>Zajęcia online</h3>
                        <p>Zajęcia online prowadzę na prawie dowolnej platformie przy użyciu tabletu graficznego.</p>
                        <p>Jeśli uczeń wyraża taką chęć, to zajęcia mogą być nagrywane dla użytku ucznia (po wcześniejszym uzgodnieniu ze mną).</p>

                        <h3>Notatki</h3>
                        <p>Link do wszelkich notatek z zajęć udostępniam uczniowi, dzięki czemu do nich dostęp w każdym momencie.</p>

                        <h3>Wysokie wyniki</h3>
                        <p>Jeżeli uczniowi zależy na bardzo wysokich wynikach, to stwarzam do tego możliwości. Mam mnóstwo materiałów, które pomagają w osiąganiu takich celów i doświadczenie w intensywnej pracy z takimi uczniami.</p>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-1/2">
                    <div className="technologies w-full">
                        <h2>Dlaczego ja?</h2>
                        <ul>
                            <li className="feature" data-icon="check-check">Jestem na bieżąco z materiałem i wytycznymi CKE</li>
                            <li className="feature" data-icon="rabbit">Uczę jak bezbłędnie i szybko rozwiązać każde zadanie</li>
                            <li className="feature" data-icon="school">Mam dużo kontaktu z osobami w wieku szkolnym, co pomaga mi zapewniać dobrą atmosferę</li>
                            <li className="feature" data-icon="book-open">Jestem elastyczny i sposób prowadzenia zajęć dostosowuję do ucznia</li>
                            <li className="feature" data-icon="grow">Stosuję nowoczesne metody, np. własne internetowe testy, z pomiarem czasu, aby poprawiać wyniki</li>
                        </ul>
                    </div>
                    <div className="technologies">
                        <h2>W czym Ci pomogę?</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Matura</td>
                                </tr>
                                <tr>
                                    <td>Egzamin 8-klasisty</td>
                                </tr>
                                <tr>
                                    <td>Konkursy</td>
                                </tr>
                                <tr>
                                    <td>Olimpiady</td>
                                </tr>
                                <tr>
                                    <td>Szkoła średnia</td>
                                </tr>
                                <tr>
                                    <td>Szkoła podstawowa</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div id="whoiam-gradient" className="absolute w-screen h-full top-0 left-0 -z-10 gradient opacity-10 flex flex-col justify-center items-end text-7xl lg:text-8xl font-bold text-black">
            </div>
        </section>
    );
}