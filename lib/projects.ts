export type ProjectItem = {
  name: string;
  desc: string;
  url: string;
  img: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  cover: string;
  liveUrl?: string;
  items?: ProjectItem[];
  featured?: boolean;
};

const img = (s: string) => `/images/projects/${s}.jpg`;

export const PROJECTS: Project[] = [
  {
    slug: "konstruo",
    title: "Konstruo",
    category: "Építőipar · szoftver-koncepció",
    tagline: "Nyolc összefüggő alkalmazás egy építőipari cég munkafolyamataira.",
    summary:
      "Egy építőipari szoftvercsalád koncepciója: a kooperációs jegyzőkönyvtől és a szabványkezeléstől az ártükörig és a projektvezetői irányítópultig nyolc külön alkalmazás fedi le a műszaki előkészítés és a kivitelezés fő folyamatait — egy egységes felületen, AI-támogatással.",
    challenge:
      "Egy építőipari projekt adminisztrációja szétszórt: a jegyzőkönyvek, a szabványok, az alvállalkozói ajánlatok és a csapatkoordináció külön eszközökben élnek. Sok a kézi lépés, könnyű elveszíteni a szálakat, és a szabvány-ütközések vagy a rossz ajánlatok drágán jönnek ki.",
    solution:
      "Nyolc, egy nyelvet beszélő alkalmazást terveztem, amelyek egy-egy fájó pontot vesznek le: hangfelvételből automatikus jegyzőkönyvet és feladatokat készít, kereshetővé teszi a szabványokat, feltárja az ütközéseket, összeveti az alvállalkozói árakat, és irányítópultba fogja a projektvezető és a műszaki előkészítő munkáját.",
    cover: img("konstruo-projektvezeto"),
    featured: true,
    items: [
      { name: "Kooperációs Jegyzőkönyvkezelő", desc: "Hangfelvételből automatikus átirat, jegyzőkönyv és feladatok az építési kooperációs értekezletekre.", url: "https://konstruo-jegyzokonyv.vercel.app/", img: img("konstruo-jegyzokonyv") },
      { name: "Magyar Szabványtár", desc: "Kereshető építőipari szabvány-adatbázis szakágakra bontva, AI-asszisztenssel.", url: "https://konstruo-szabvanytar.vercel.app/", img: img("konstruo-szabvanytar") },
      { name: "Szabvány Ütközés Vizsgáló", desc: "Magyar és nemzetközi szabványok ütközéseit tárja fel projektenként, költséghatással.", url: "https://konstruo-szabvany-utkozes.vercel.app/", img: img("konstruo-szabvany-utkozes") },
      { name: "Ártükör", desc: "Alvállalkozói ajánlatok összehasonlítása munkanemenként, alvállalkozó-kereséssel.", url: "https://konstruo-artukor.vercel.app/", img: img("konstruo-artukor") },
      { name: "Projektvezetői Irányítópult", desc: "Előrehaladás, költségvetés, kockázatok és mérföldkövek egyetlen nézetben.", url: "https://konstruo-projektvezeto.vercel.app/", img: img("konstruo-projektvezeto") },
      { name: "Műszaki Előkészítő", desc: "Költségvetés, anyagtételek, alvállalkozók és specifikációk kezelése projekteken át.", url: "https://konstruo-mernok.vercel.app/", img: img("konstruo-mernok") },
      { name: "Csapat Platform", desc: "Szerepkör-alapú csapat-kollaboráció egy építési projekthez.", url: "https://konstruo-csapat.vercel.app/", img: img("konstruo-csapat") },
      { name: "Fejlesztési Javaslatok", desc: "Szerepkör szerinti visszajelzés-gyűjtő a rendszer továbbfejlesztéséhez.", url: "https://konstruo-fejlesztes.vercel.app/", img: img("konstruo-fejlesztes") },
    ],
  },
  {
    slug: "studio23",
    title: "Studio 23",
    category: "Zenei oktatás · AI funnel-rendszer",
    tagline: "AI-vezérelt, tíz funnelből álló értékesítési rendszer egy zenei oktató-ökoszisztémának.",
    summary:
      "A Studio 23 egy zenei producer-oktató vállalkozás nagy YouTube-csatornával és közösséggel. Több terméke — online kurzusok, jelenléti akadémia, könyv, magánoktatás — külön-külön, kézi lead-kezeléssel futott. Egy tíz funnelből álló, AI-vezérelt rendszert terveztem, amelynek magja egy automata lead-pontozó.",
    challenge:
      "A sok, szétszórt bevételi forrás és a manuális lead-kezelés nem skálázódik: ahogy nő a forgalom, úgy nő a tulajdonos ideje is, és sokan ajánlat nélkül lépnek le.",
    solution:
      "Egy funnel-térképet és AI-alapú lead-pontozót építettem: az érdeklődőket egy rövid kérdőív után egy automata 0–15 pontig értékeli, majd a megfelelő ösvényre tereli (magánóra, kurzus vagy könyv) — így a rendszer skálázódik a tulajdonos ideje nélkül.",
    cover: img("studio23-pages"),
    featured: true,
    items: [
      { name: "Fő oldal", desc: "A Studio 23 ökoszisztéma belépőpontja: négy pillér, ingyenes képzés, közösség.", url: "https://studio23-pages.vercel.app/", img: img("studio23-pages") },
      { name: "Funnel-térkép", desc: "Tíz értékesítési funnel vizuális áttekintése, az AI lead-pontozó logikájával.", url: "https://dani-funnel-terkep.vercel.app/", img: img("dani-funnel-terkep") },
    ],
  },
  {
    slug: "belso-iranytu",
    title: "Belső Iránytű",
    category: "Mentálhigiéné · weboldal + app",
    tagline: "Weboldal, értékesítő landing és önreflexiós app egy mentálhigiénés szakembernek.",
    summary:
      "Hegedűs Lilla mentálhigiénés szakember személyközpontú szemléletét kellett hitelesen online megjeleníteni — egy nehezen megfogható, „nem tanácsot adok” jellegű szolgáltatást. Négy összekapcsolt oldalt építettem: fő weboldal, értékesítő landing a segítő beszélgetésre, és egy NVC-alapú önreflexiós app élő verzióval.",
    challenge:
      "Egy elfogadó jelenlétre épülő, nem terápiás szolgáltatást úgy kellett megjeleníteni, hogy megőrizze a szakember csendes, ítéletmentes hangnemét — egy olyan célközönségnek, amely épp azt nem teszi meg, amire szüksége lenne: megállni és befelé figyelni.",
    solution:
      "Négy oldalt terveztem egy nyelven: a fő weboldal a szemléletet és a szolgáltatásokat mutatja be, a landing a segítő beszélgetést vezeti végig fájdalomponttól a folyamatig, az önreflexiós app pedig napi szokást és nyelvet ad a klienseknek a foglalkozások között.",
    cover: img("belso-iranytu-fooldal"),
    items: [
      { name: "Fő weboldal", desc: "Belépőpont a szemlélethez és a szolgáltatásokhoz.", url: "https://belso-iranytu-fooldal.vercel.app/", img: img("belso-iranytu-fooldal") },
      { name: "Segítő beszélgetés — landing", desc: "Értékesítő oldal a fő szolgáltatásra, fájdalomponttól a folyamatig.", url: "https://belso-iranytu-segito-beszelgetes.vercel.app/", img: img("belso-iranytu-segito-beszelgetes") },
      { name: "Önreflexió — bemutató", desc: "Az NVC-alapú napi önreflexiós app koncepció-oldala.", url: "https://belso-iranytu-app.vercel.app/", img: img("belso-iranytu-app") },
      { name: "„Mi van velem most?” — élő app", desc: "A működő, napi 30 másodperces önreflexiós webalkalmazás.", url: "https://belso-iranytu-onreflexio.vercel.app/", img: img("belso-iranytu-onreflexio") },
    ],
  },
  {
    slug: "kovacs-hanna",
    title: "Kovács Hanna",
    category: "Pszichológia · ügyfélszerző rendszer",
    tagline: "Teljes, önműködő ügyfélszerző ökoszisztéma egy induló pszichológusnak.",
    summary:
      "Egy okleveles pszichológusnak és autogén trénernek építettem komplett online jelenlétet és ügyfélszerző rendszert: weboldal, digitális névjegy, lead magnet e-mail sorozat és QR-alapú belépőpontok, öt funnelbe rendezve — az általános érdeklődőktől a szakmai niche-ig.",
    challenge:
      "Egy kezdő szakembernek a legnehezebb a kiszámítható ügyfélfolyam: nincs ismertség, nincs rendszer, és a niche, ami megkülönböztetné, nem jelenik meg sehol.",
    solution:
      "Öt összekapcsolt funnelt építettem — online (kvíz → konzultáció), affirmatív (lead magnet + ötrészes e-mail sorozat), élő események (QR-es névjegy) és bemutatkozás (weboldal + önreflexiós app) —, amelyek passzívan terelik és szegmentálják az érdeklődőket.",
    cover: img("gombicz-kata-weboldala"),
    items: [
      { name: "Weboldal", desc: "Bemutatkozó oldal a szakmai háttérrel, szolgáltatásokkal és időpontfoglalással.", url: "https://gombicz-kata-weboldala.vercel.app/", img: img("gombicz-kata-weboldala") },
      { name: "Projekt-térkép", desc: "A teljes ügyfélszerző rendszer vezérlő áttekintője, öt funnelbe rendezve.", url: "https://gombicz-kata-projekt-terkep.vercel.app/", img: img("gombicz-kata-projekt-terkep") },
      { name: "Digitális névjegy", desc: "Nyomtatható névjegykártya két QR-változattal.", url: "https://nevjegykartya.vercel.app/", img: img("nevjegykartya") },
      { name: "E-mail sorozat", desc: "Ötrészes affirmatív follow-up a lead magnethez.", url: "https://vercel-email-lmbtq.vercel.app/", img: img("vercel-email-lmbtq") },
      { name: "QR-belépőpontok", desc: "Élő QR-kódok a funnelek offline teszteléséhez és nyomtatásához.", url: "https://vercel-qr-kodok.vercel.app/", img: img("vercel-qr-kodok") },
    ],
  },
  {
    slug: "lumiderm",
    title: "LumiDerm",
    category: "Kozmetika · biotech landing",
    tagline: "Prémium, tudomány-alapú bőrápolási márka landing oldala.",
    summary:
      "A LumiDerm egy prémium bőrápolási márka koncepciója, amely a sejtbiológiát és a bioaktív hatóanyagokat állítja a kommunikáció középpontjába. A landing feladata a hiteles, „drága érzetű” márkabemutatás és időpontfoglalásra terelés.",
    challenge:
      "A bőrápolási piac tele van üres ígéretekkel; egy prémium, tudományos pozíciójú márkának ki kell tűnnie hitelességgel és letisztult, magas minőségű megjelenéssel.",
    solution:
      "Egy visszafogott, tudományos hangvételű landinget építettem: erős hero, a technológia és a bizonyíték-alapú pozíció bemutatása, kezelések és eredmények szekciók, egyértelmű időpontfoglalás CTA-val.",
    cover: img("lumiderm-landing"),
    liveUrl: "https://lumiderm-landing.vercel.app/",
  },
  {
    slug: "iranytu-ai",
    title: "Iránytű AI",
    category: "Oktatás · pályaorientáció",
    tagline: "AI-támogatott pályaorientációs platform diákoknak.",
    summary:
      "Egy pályaorientációs platform koncepciója, amely öt fázisban — az önismerettől a megvalósításig — vezeti végig a diákot a tudatos pályaválasztáson, AI-asszisztenssel, naplóval és mentor-funkcióval.",
    challenge:
      "A pályaválasztás a legtöbb diáknak egy nagy, támogatás nélküli döntés; a szülők és a mentorok nehezen kapcsolódnak be strukturáltan.",
    solution:
      "Öt fázisú módszertant építettem egy platformba (Tükör, Coach, Szimulátor, Matching, Napló), amely a diákot, a szülőt és a mentort is bevonja a folyamatba.",
    cover: img("konnekt-ai"),
    liveUrl: "https://konnekt-ai.vercel.app/",
  },
  {
    slug: "ai-discovery",
    title: "AI Discovery",
    category: "Kutatás · projekt-dashboard",
    tagline: "Kutatási projektmenedzsment-felület egy idegtudományi labornak.",
    summary:
      "Egy komputációs idegtudományi kutatócsapatnak terveztem projektmenedzsment-dashboardot: feladat-board, lab notebook, protokollok, pályázatok és csapat egy helyen, a laborkutatás sajátos munkafolyamatára szabva.",
    challenge:
      "A kutatómunka szétszórt eszközökben zajlik — a kísérleti protokollok, a napi jegyzőkönyvek, a feladatok és a pályázatok külön élnek, nehéz átlátni az előrehaladást.",
    solution:
      "Egy egységes irányítópultot építettem, amely a feladat-boardot, a lab notebookot, a protokollokat és a pályázatkövetést egy felületre hozza, heti feladat-teljesítés nézettel.",
    cover: img("ai-discovery-workflow"),
    liveUrl: "https://ai-discovery-workflow.vercel.app/",
  },
  {
    slug: "mindful",
    title: "Mindful",
    category: "Wellness · jógastúdió",
    tagline: "Lassú, meditatív jógastúdió online megjelenése.",
    summary:
      "Egy jógastúdió oldala, amely nem a fitneszt, hanem a megérkezést és a jelenlétet állítja középpontba. Órarend, foglalás, elvonulások és blog — csendes, letisztult megjelenéssel, ami magát a gyakorlás hangulatát közvetíti.",
    challenge:
      "A jóga-piac tele van teljesítmény-központú, zsúfolt oldalakkal; egy lassú, jelenlét-fókuszú stúdiónak épp a nyugalmat kell éreztetnie az első pillanattól.",
    solution:
      "Egy letisztult, meditatív oldalt terveztem: filozófia, órarend (Hatha, Vinyasa, Yin), elvonulások és foglalás — minden a csend és a megérkezés hangulatában.",
    cover: img("hollow-project-joga"),
    liveUrl: "https://hollow-project-joga.vercel.app/",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

/* Tudástár — ingyenes, nyilvános tananyagok */
export type Resource = {
  title: string;
  desc: string;
  url: string;
  img: string;
  meta: string;
};

export const RESOURCES: Resource[] = [
  {
    title: "Copywriting Mesterkurzus",
    desc: "Ingyenes magyar copywriting tananyag vállalkozóknak: bevált képletek magyar példákkal és kész AI-promptokkal, gyakorlati fókusszal.",
    url: "https://copywriting-ef.vercel.app/",
    img: img("copywriting-ef"),
    meta: "6 lecke · ingyenes",
  },
  {
    title: "Landing-elemzések",
    desc: "28 ismert szakértő landing oldalának szekcióról-szekcióra elemzése — átvehető, konkrét lépésekkel a saját oldaladhoz.",
    url: "https://esettanulmanyok-ef.vercel.app/",
    img: img("esettanulmanyok-ef"),
    meta: "28 eset · 5 kategória",
  },
];
