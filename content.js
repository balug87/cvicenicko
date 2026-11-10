/* ============================================================
   CVIČENÍČKO - obsah webu
   Tento jeden soubor obsahuje VEŠKERÉ texty, ceny, rozvrh,
   fotky a odkazy. Upravuje se v obyčejném textovém editoru.
   Po uložení stačí nahrát soubor na hosting (Netlify/GitHub).
   ============================================================ */

const SITE = {

  // Kam míří tlačítka "Přihlásit se".
  // Změnou tohoto jednoho řádku přepnete rezervace na nový systém.
  bookingUrl: "https://www.cvicenicko.cz/timetable",

  notice: {
    show: true,
    text: "Milí rodiče, bohužel hodiny gymnastické přípravky pro děti od 5 let ve školním roce 2026/27 opět neproběhnou. Nepodařilo se zajistit dřívější hodinu a dětí, které jsou schopné fungovat v tělocvičně do 19:00, je málo. Mějte se krásně, Radmila Nemkyová.",
  },

  hero: {
    title: "Zdravý pohyb, který děti baví",
    subtitle: "Gymnastické cvičení pro děti s rodiči v Brně. Od 18 měsíců do 10 let.",
    images: ["photos/hero-1.jpg", "photos/hero-2.jpg", "photos/hero-3.jpg"],
  },

  intro: {
    text: "Děti jsou hravé a mají velkou fantazii. Z toho v tvorbě programu vycházíme. Obsahem hodiny jsou pohybové hry a pohybové průpravy. Využíváme velké množství pestrobarevného náčiní a nářadí a střídáním pohybových úkolů udržujeme motivaci dětí na potřebné úrovni.",
    image: "photos/intro.jpg",
  },

  programs: [
    {
      id: "rodice",
      title: "Rodiče s dětmi",
      age: "od 18 měsíců",
      place: "OneClub Fitcentrum Lužánky, OC Meta",
      image: "photos/program-rodice.jpg",
      text: "S někým ze svých nejbližších se vydávají děti vnímat svá tělíčka. Zaměřujeme se na pohybové činnosti důležité pro správný fyzický vývoj dítěte. Všechno je tu barevné, pro děti nové a lákavé. Formou opičích drah plní malé děti pohybové úkoly: lezení v různých formách, cvičení pro rozvoj rovnováhy i síly. Děti poznávají své tělo, překonávají obavy z neznámého a získávají sociální kontakty, které jim usnadní vstup do mateřské školy.",
    },
    {
      id: "deti",
      title: "Děti od 3 do 9 let",
      age: "3-9 let",
      place: "ZŠ Řehořova 3, Brno-Černovice",
      image: "photos/program-deti.jpg",
      text: "Na děti čekají různé opičí dráhy, společná cvičení na žíněnkách a také oblíbená nafukovací trampolína. Hodiny probíhají formou pohybových her s využitím pestrobarevného náčiní a nářadí. Děti cvičí ve velké tělocvičně pod dohledem zkušených trenérů, učí se spolupráci a samostatnosti a nacházejí si nové kamarády. Naším cílem je rozvoj obratnosti dětí a jejich radost z pohybu.",
    },
    {
      id: "pripravka",
      title: "Gymnastická přípravka",
      age: "5-10 let",
      place: "ZŠ Řehořova 3, Brno-Černovice",
      image: "photos/program-pripravka.jpg",
      text: "První krok k závodní gymnastice. Přípravka buduje kondici, obratnost a disciplínu zábavnou formou. Ve školním roce 2026/27 bohužel hodiny neproběhnou, ale napište na nemkyova@cvicenicko.cz a dozvíte se o další možnostech.",
    },
  ],

  prices: [
    {
      title: "Rodiče s dětmi",
      place: "OneClub Fitcentrum Lužánky, OC Meta",
      system: "Školní rok je organizován ve čtyřech blocích. Kdykoliv po spuštění přihlášek je možné se přihlásit do libovolného bloku, jeho zbytkové části nebo více bloků najednou. V případě přihlášení do již probíhajícího bloku bude účtována poměrná část za zbytek bloku od data přihlášení. Po přihlášení do více bloků je vystavena faktura za všechny bloky najednou, platí se předem. Takto provedená úhrada je v ceníku zvýhodněna.",
      items: [
        { label: "jeden blok", price: "1 683 Kč", note: "případně poměrná část za zbytek bloku od data přihlášení" },
        { label: "dva celé bloky", price: "3 204 Kč" },
        { label: "tři celé bloky", price: "4 563 Kč" },
        { label: "čtyři celé bloky", price: "5 760 Kč" },
      ],
      rules: "Ceny jsou nastaveny s přihlédnutím k běžným nemocem a státním svátkům, náhrady se neposkytují. Druhý blok je prodloužen o 14 dní vánočního volna, třetí o týden volna o jarních prázdninách. Při odhlášení do 3 dnů po první lekci bude vráceno kurzovné snížené o 187 Kč. Při pozdějším odhlášení snížené o 187 Kč za každou lekci od data přihlášení do data odhlášení a storno poplatek 250 Kč. Sourozenec dítěte již přihlášeného do kteréhokoliv kurzu má 10% slevu v případě, že jsou přihlášeni na stejný časový úsek. Sleva se počítá z levnějšího kurzu.",
    },
    {
      title: "Děti od 3 let",
      place: "ZŠ Řehořova 3, Černovice",
      system: "Školní rok je organizován ve dvou pololetích (semestrech). Kdykoliv po spuštění přihlášek je možné se přihlásit do libovolného pololetí, jeho zbytkové části nebo obou pololetí. V případě přihlášení do již probíhajícího pololetí bude účtována poměrná část za zbytek pololetí od data přihlášení. Po přihlášení do obou pololetí je vystavena faktura za obě pololetí najednou, platí se předem. Takto provedená úhrada je v ceníku zvýhodněna.",
      items: [
        { label: "jedno pololetí", price: "3 096 Kč", note: "případně sníženo o hodiny proběhlé před datem přihlášení" },
        { label: "dvě celá pololetí", price: "5 976 Kč" },
      ],
      rules: "Ceny jsou nastaveny s přihlédnutím k běžným nemocem a státním svátkům, náhrady se neposkytují. První pololetí je prodlouženo o 14 dní vánočního volna, druhé o týden jarních prázdnin. Při odhlášení do 3 dnů po první lekci bude vráceno kurzovné snížené o 172 Kč. Při pozdějším odhlášení snížené o 172 Kč za každou lekci od data přihlášení do data odhlášení a storno poplatek 250 Kč.",
    },
  ],

  schedule: {
    notice: "PRVNÍ TRÉNINKY proběhnou v týdnu od 15. 9. 2025",
    links: [
      { label: "Podmínky účasti", href: "https://www.cvicenicko.cz/rozvrh-a-prihlasky/#podminky" },
      { label: "Organizace školního roku 2026/27", href: "https://www.cvicenicko.cz/rozvrh-a-prihlasky/organizace-skolniho-roku/" },
    ],
    sessions: [
      { day: "úterý", time: "9:30-10:30", place: "OneClub Fitcentrum Lužánky", group: "rodiče s dětmi od 1,5 roku" },
      { day: "úterý", time: "10:30-11:30", place: "OneClub Fitcentrum Lužánky", group: "rodiče s dětmi od 2 let" },
    ],
    waitlist: "V případě zájmu o pozici náhradníka v některém z plných kurzů napište na nemkyova@cvicenicko.cz.",
  },

  lecturers: [
    {
      name: "Mgr. Radmila Nemkyová",
      role: "zakladatelka Cvičeníčka, trenérka sportovní gymnastiky s dlouholetou praxí",
      image: "photos/lektrorka-nemkyova.jpg",
    },
    {
      name: "Mgr. Bc. Veronika Cenková",
      role: "lektrorka Cvičeníčka",
      image: "photos/lektrorka-cenkova.jpg",
    },
  ],

  gallery: [
    {
      id: "rodice",
      title: "Rodiče s dětmi od 18 měsíců",
      images: [
        "photos/galerie-rsd-05.jpg","photos/galerie-rsd-06.jpg","photos/galerie-rsd-07.jpg","photos/galerie-rsd-08.jpg",
        "photos/galerie-rsd-09.jpg","photos/galerie-rsd-10.jpg","photos/galerie-rsd-12.jpg","photos/galerie-rsd-13.jpg",
      ],
    },
    {
      id: "deti",
      title: "Děti od 3 do 9 let",
      images: [
        "photos/galerie-deti-06.jpg","photos/galerie-deti-07.jpg","photos/galerie-deti-09.jpg","photos/galerie-deti-10.jpg",
        "photos/galerie-deti-11.jpg","photos/galerie-deti-12.jpg","photos/galerie-deti-13.jpg","photos/galerie-deti-14.jpg",
      ],
    },
    {
      id: "pripravka",
      title: "Gymnastická přípravka 5-10 let",
      images: [
        "photos/galerie-pripravka-06.jpg","photos/galerie-pripravka-07.jpg","photos/galerie-pripravka-08.jpg","photos/galerie-pripravka-09.jpg",
        "photos/galerie-pripravka-10.jpg","photos/galerie-pripravka-12.jpg","photos/galerie-pripravka-13.jpg","photos/galerie-pripravka-14.jpg",
      ],
    },
  ],

  places: [
    {
      name: "ZŠ Řehořova",
      address: "Řehořova 1020/3, Brno-Černovice, 618 00",
      image: "photos/kamenak.jpg",
      map: "https://www.google.com/maps/search/?api=1&query=Řehořova+1020/3,+Brno",
    },
    {
      name: "OneClub Fitcentrum Lužánky",
      address: "OC Meta, Lidická 81, Brno-střed, 602 00",
      image: "photos/kampus.jpg",
      map: "https://www.google.com/maps/search/?api=1&query=Lidická+81,+Brno",
    },
  ],

  contact: {
    person: "Mgr. Radmila Nemkyová",
    email: "nemkyova@cvicenicko.cz",
    phone: "+420 604 252 137",
    phoneHref: "+420604252137",
    address: "Sukova 553/2, 602 00 Brno, Česká republika",
    legal: "IČO: 66514533. Registrováno u ŽÚ MMB, Malinovského nám. 3, 601 67 Brno. Den vzniku živnostenského oprávnění 14.4.1997, ev.č.: 370200-2132487.",
    facebook: "https://www.facebook.com/cvicenicko",
    instagram: "https://www.instagram.com/cvicenicko",
  },
};
