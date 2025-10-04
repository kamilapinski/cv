'use client';

import { useTranslation } from "react-i18next";

export const dynamic = "force-static"; // wymusza statyczną generację

export default function Prices() {

    return (
        <section className="readable">
            <h2 className="text-center mb-10">Cennik</h2>
            <div className="flex flex-row items-start">
                <div className="experiences w-1/2">
                    <h3 className="text-xl font-bold text-center">Matematyka</h3>
                    <div>
                        <div className="data">50 zł</div>
                        <div className="desc">
                            <h3>Pierwsza godzina próbna</h3>
                            <p>To dla Ciebie, jeśli nigdy nie miałeś/aś ze mną zajęć.</p>
                        </div>
                    </div>
                    <div>
                        <div className="data">80 zł/h</div>
                        <div className="desc">
                            <h3>Matura, rozszerzenie</h3>
                            <p>Jeśli jesteś w klasie maturalnej.</p>
                        </div>
                    </div>
                    <div>
                        <div className="data">70 zł/h</div>
                        <div className="desc">
                            <h3>Szkoła średnia, klasa niematuralna lub podstawa na maturze</h3>
                            <p>Jeśli nie jesteś w klasie maturalnej lub przygotowujesz się do poziomu podstawowego na maturze</p>
                        </div>
                    </div>
                    <div>
                        <div className="data">70 zł/h</div>
                        <div className="desc">
                            <h3>Szkoła podstawowa</h3>
                        </div>
                    </div>
                    <div>
                        <div className="data">-</div>
                        <div className="desc">
                            <h3>Inne</h3>
                            <p>Konkursy, olimpiady, nauka programowania, egzaminy zawodowe. Cena do uzgodnienia.</p>
                        </div>
                    </div>
                </div>

                <div className="experiences w-1/2">
                    <h3 className="text-xl font-bold text-center">Informatyka</h3>
                    <div>
                        <div className="data">50 zł</div>
                        <div className="desc">
                            <h3>Pierwsza godzina próbna</h3>
                            <p>To dla Ciebie, jeśli nigdy nie miałeś/aś ze mną zajęć.</p>
                        </div>
                    </div>
                    <div>
                        <div className="data">80 zł/h</div>
                        <div className="desc">
                            <h3>Matura</h3>
                            <p>Jeśli jesteś w klasie maturalnej.</p>
                        </div>
                    </div>
                    <div>
                        <div className="data">70 zł/h</div>
                        <div className="desc">
                            <h3>Szkoła średnia, klasa niematuralna</h3>
                            <p>Jeśli nie jesteś w klasie maturalnej.</p>
                        </div>
                    </div>
                    <div>
                        <div className="data">70 zł/h</div>
                        <div className="desc">
                            <h3>Szkoła podstawowa</h3>
                        </div>
                    </div>
                    <div>
                        <div className="data">-</div>
                        <div className="desc">
                            <h3>Inne</h3>
                            <p>Konkursy, olimpiady, nauka programowania, egzaminy zawodowe. Cena do uzgodnienia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}