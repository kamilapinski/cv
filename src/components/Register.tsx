'use client';

import { useTranslation } from "react-i18next";

export const dynamic = "force-static"; // wymusza statyczną generację

export default function Register() {

    return (
        <section className="readable">
            <h2 className="text-center mb-10">Umów się na zajęcia</h2>
            <div className="experiences">
                <div>
                    <div className="data">1</div>
                    <div className="desc">
                        <h3>Wybierz jeden z terminów</h3>
                        <p>Wybierz jeden z terminów dostępnych na Calendly i się umów.</p>
                        <ul>
                            <li><a href="https://calendly.com/kamill2004/30min" target="_blank" rel="noopener noreferrer">Link do Calendly</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="data">2</div>
                    <div className="desc">
                        <h3>Zapłać 24h przed zajęciami</h3>
                        <p>Spytaj mnie o dane do przelewu i zapłać według cennika. Następnie potwierdzę otrzymanie przelewu.</p>
                    </div>
                </div>
            </div>
            <p className="text-xl text-center mt-10">Lub</p>
            <p className="text-xl text-center mt-10"><a href="mailto:lapinskikamil@o2.pl" className="link">Napisz do mnie mail'a.</a></p>
        </section>
    );
}