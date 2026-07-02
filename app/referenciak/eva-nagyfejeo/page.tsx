import type { Metadata } from "next";
import ReferenceCase from "@/components/ReferenceCase";

export const metadata: Metadata = {
  title: "Dr. Nagyfejő Éva — Referencia — Business Native",
  description: "Prémium kétnyelvű weboldal egy kiberbiztonsági tanácsadónak — interaktív önértékelő teszttel.",
};

export default function Page() {
  return (
    <ReferenceCase
      tag="Tanácsadó"
      name="Dr. Nagyfejő Éva"
      lead="Kiberbiztonsági irányítás és digitális ellenállóképesség — 12+ év nemzetközi tapasztalat."
      img="/images/ref-eva.webp"
      liveUrl="https://www.evanagyfejeo.com/"
      sections={[
        {
          label: "Honnan indultunk",
          paragraphs: [
            "Évának 12+ év nemzetközi tapasztalata volt a NATO-nál, az EU-nál és a világ négy legnagyobb tanácsadó cégénél — de független tanácsadóként nem volt weboldala, nem volt online jelenléte, és az egyetlen elérhetősége egy Hotmail-cím volt. A tudása világszínvonalú, de a digitális jelenléte ezt nem tükrözte.",
          ],
        },
        {
          label: "A kihívás",
          paragraphs: [
            "Hogyan mutatjuk meg, hogy valaki, aki a NATO-nak dolgozott, most elérhető és megbízható független tanácsadó? Hogyan érjük el, hogy cégvezetők és igazgatósági tagok rátaláljanak? És hogyan mutatjuk meg a szaktudást anélkül, hogy egy sablon „rólam” oldalt csinálnánk?",
          ],
        },
        {
          label: "Amit csináltam",
          paragraphs: [
            "Prémium weboldal sötét kék–arany dizájnnal, amely a kiberbiztonság komolyságát tükrözi. Teljes kétnyelvű rendszer (magyar/angol). Interaktív önértékelő teszt — 8 kérdés, animált eredmény-megjelenítéssel.",
            "A kitöltő megtudja, hol áll a kiberbiztonsággal — Éva pedig egy potenciális érdeklődőt kap. Letölthető ellenőrzőlista az EU-s szabályozásokhoz, igazgatósági tagok számára. Professzionális email-cím, saját domain alatt. Még a süti-értesítőt is tudatosan csináltuk: „Privacy-First — As You’d Expect.” Egy kiberbiztonsági szakembernél ez nem kötelező szöveg — ez a hozzáállás megmutatása.",
            "10 másodperc alatt egyértelmű, hogy ez nem egy hobbioldal. A teljes felület egyetlen üzenetet közvetít: „Ez a személy a NATO-nak és az EU-nak dolgozott — és most elérhető neked is.” Az interaktív teszt nem díszítés: megmutatja, hogy a tartalom mögött valódi szaktudás áll.",
          ],
        },
        {
          label: "Az eredmény",
          paragraphs: [
            "Éva digitális jelenléte végre tükrözi azt, amit a szakmai útja is mutat. Van professzionális weboldala, van érdeklődőket bevonzó eszköze, és van egy felület, amit bátran küldhet el bárkinek — aki azonnal érzi a súlyt mögötte.",
          ],
        },
      ]}
    />
  );
}
