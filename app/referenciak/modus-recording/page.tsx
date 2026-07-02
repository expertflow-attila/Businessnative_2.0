import type { Metadata } from "next";
import ReferenceCase from "@/components/ReferenceCase";

export const metadata: Metadata = {
  title: "Modus Recording — Referencia — Business Native",
  description: "Weboldal-koncepció egy budapesti hangstúdiónak — felvétel, keverés, mastering, filmes hangmunka.",
};

export default function Page() {
  return (
    <ReferenceCase
      tag="Hangstúdió"
      name="Modus Recording"
      lead="Felvétel, keverés, mastering, filmes hangmunka — Vitányi Dávid és Tomszi stúdiója."
      img="/images/ref-modus.webp"
      liveUrl="https://www.modusrecording.hu/"
      sections={[
        {
          label: "Honnan indultunk",
          paragraphs: [
            "Dávidnak és társának, Tomszinak volt stúdiójuk Budapest belvárosában, volt Instagram-jelenlétük és logójuk — de nem volt profi weboldaluk. Az ügyfélszerzés kizárólag személyesen, koncerteken történt. Ez működik, de ebből nem tud nőni a vállalkozás: egy este maximum egy-két zenekar.",
          ],
        },
        {
          label: "A kihívás",
          paragraphs: [
            "Hogyan tűnjön professzionálisnak egy kétfős stúdió? Hogyan érezze az, aki sosem járt ott, hogy ide érdemes jönni? És hogyan kapjanak online megkereséseket is, ne csak személyeset?",
          ],
        },
        {
          label: "Amit csináltam",
          paragraphs: [
            "Órákat töltöttem Dáviddal: megértettem, hogyan dolgozik, milyen zenét szeret, mi motiválja. Megnéztem, hogyan néznek ki a legjobb kisebb, független stúdiók weboldalai itthon és külföldön.",
            "Ennek alapján készítettem egy teljes weboldal-koncepciót: beágyazott Spotify- és YouTube-lejátszás, egy lejátszó, ahol a nyers és a kész hanganyagot egymás mellett hallgathatod, szolgáltatási csomagok, és egy hangvétel, ami Dávid személyiségét tükrözi. Nem egy szenvtelen stúdióoldal, hanem két ember, akikkel jó dolgozni.",
            "Dávid Rick Rubinra hivatkozott: nem a technikai tudás, hanem az ízlés és a bizalom a legfontosabb. A weboldal ezt közvetíti. A nyers–kész összehasonlító lejátszó ritka megoldás — a legtöbb kisebb stúdió nem csinálja, pedig semmi sem mutatja meg jobban a hangmérnöki munkát, mint ha meghallod az előtte–utána különbséget.",
          ],
        },
        {
          label: "Az eredmény",
          paragraphs: [
            "Teljes weboldal-koncepció, piackutatás, vizuális irány, inspiráció-gyűjtemény, domain-választás. Dávid kezében minden megvan ahhoz, hogy az első igazi online jelenlétét felépítse — és az ne csak egy újabb „csináltatott weboldal” legyen, hanem egy olyan felület, ahonnan megkeresések érkeznek.",
          ],
        },
      ]}
    />
  );
}
