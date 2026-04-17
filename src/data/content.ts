// ===== MENU DATA =====
export interface MenuItem {
  name: string
  price: string
  desc: string
  descEn?: string
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
  image: string
}

export const menuCategories: MenuCategory[] = [
  {
    id: "predkrmy",
    label: "Předkrmy",
    items: [
      { name: "Restovaná pohanka s hlívou ústřičnou", price: "170 Kč", desc: "marinovaná řepa v bylinkách (160g)", descEn: "Roasted buckwheat with oyster mushroom, marinated beetroot in herbs" },
      { name: "Míchaný pikantní tataráček z pravé svíčkové", price: "260 Kč", desc: "kapary, cornichons, česnek, topinky (100g)", descEn: "Mixed spicy Tartar from real beef tenderloin, capers, cornichons, garlic, toast" },
      { name: "Škvarková pomazánka", price: "110 Kč", desc: "kyselý okurek, cibule, čerstvý chléb (100g)", descEn: "Pork crackling spread, pickled cucumber, onion, bread" },
    ],
    image: "/images/jidlo1.jpg",
  },
  {
    id: "polevky",
    label: "Polévky",
    items: [
      { name: "Hovězí vývar se zeleninou", price: "80 Kč", desc: "játrové knedlíčky, nudle (0,33l)", descEn: "Beef stock with vegetables, liver dumplings, egg noodles" },
      { name: "Staročeská kulajda s lesními hříbky", price: "85 Kč", desc: "zastřené vejce (0,33l)", descEn: "Mushroom soup with poached eggs" },
      { name: "Česneková polévka", price: "85 Kč", desc: "šunka, sýr, krutony (0,33l)", descEn: "Garlic soup, ham, cheese, croutons" },
    ],
    image: "/images/jidlo2.jpg",
  },
  {
    id: "hlavni",
    label: "Hlavní chody",
    items: [
      { name: "Svíčková na smetaně", price: "340 Kč", desc: "domácí karlovarský knedlík, brusinky (180g)", descEn: "Beef Sirloin with cream sauce, homemade dumpling, cranberries" },
      { name: "Hovězí pupek na černém pivu", price: "330 Kč", desc: "bramborová kaše, listový špenát (180g)", descEn: "Beef flank slowly stewed in dark beer, mashed potatoes, spinach" },
      { name: "Vepřový vrabec na brusinkovém zelí", price: "260 Kč", desc: "bramborový knedlík, smažená cibulka (180g)", descEn: "Roasted pork, cranberry red cabbage, potato dumpling" },
      { name: "Středověká vepřová žebra v BBQ omáčce", price: "330 Kč", desc: "Specialita Jaškovské krčmy — kyselý okurek, křen, hořčice, zelný salát (600g)", descEn: "Pork ribs in BBQ sauce, cucumber, horseradish, mustard, cabbage salad" },
      { name: "Vepřová kotleta Tomahawk", price: "390 Kč", desc: "fazolky se slaninou, pepřová omáčka, pečené Grenaille (350g)", descEn: "Grilled pork chop Tomahawk, roasted green beans, cream pepper sauce" },
      { name: "Kuřecí prso Suprême (Sous-Vide)", price: "290 Kč", desc: "grilovaná zelenina, bazalkový olej (200g)", descEn: "Chicken breast Suprême, sous vide, grilled vegetable, basil oil" },
      { name: "Vepřová panenka (Sous-Vide)", price: "290 Kč", desc: "smetanová omáčka z lesních hříbků (180g)", descEn: "Roasted pork tenderloin, sous vide, cream mushroom sauce" },
      { name: "Krčmářský řízek", price: "260 Kč", desc: "z vepřové panenky nebo kuřecích prsou, šťouchané brambory (170g)", descEn: "Schnitzel, mashed potatoes, pickled cucumber" },
      { name: "Grilovaný losos na citronovém pepři", price: "360 Kč", desc: "(200g)", descEn: "Grilled salmon on lemon pepper" },
      { name: "Hovězí steak z pravé svíčkové", price: "530 Kč", desc: "původem Nový Zéland, pepřová nebo hříbková omáčka (200g)", descEn: "Beef steak from sirloin, New Zealand origin" },
    ],
    image: "/images/jidlo3.jpg",
  },
  {
    id: "vegetarianska",
    label: "Vegetariánská",
    items: [
      { name: "Restovaná pohanka s grilovanou zeleninou", price: "220 Kč", desc: "sýr Grana Padano, bazalkový olej (350g)" },
      { name: "Restované bramborové noky", price: "210 Kč", desc: "smetanová omáčka z lesních hříbků, Grana Padano (200g)" },
      { name: "Smažený sýr Gouda", price: "260 Kč", desc: "hranolky Julienne, naše tatarka (120g)" },
      { name: "Caesar salát", price: "210 Kč", desc: "ančovičkový dresink, slanina, krutony, Grana Padano (200g)" },
      { name: "Zeleninový salátek Teriyaki", price: "260 Kč", desc: "filírovaná vepřová panenka Sous-Vide, bylinková bagetka (200g+100g)" },
    ],
    image: "/images/jidlo4.jpg",
  },
  {
    id: "detska",
    label: "Dětská jídla",
    items: [
      { name: "Kuřecí řízek (přírodní nebo smažený)", price: "150 Kč", desc: "bramborová kaše, kečup (100g)" },
      { name: "Dětská svíčková na smetaně", price: "165 Kč", desc: "karlovarský knedlík (90g)" },
    ],
    image: "/images/jidlo5.jpg",
  },
  {
    id: "dezerty",
    label: "Dezerty",
    items: [
      { name: "Čokoládový fondant", price: "145 Kč", desc: "rozvar z lesního ovoce, vanilková zmrzlina, šlehačka" },
      { name: "Palačinky (2 ks)", price: "115 Kč", desc: "lesní ovoce, čokoláda, šlehačka" },
      { name: "Zmrzlina slaný karamel (2 kopečky)", price: "115 Kč", desc: "karamelizované vlašské ořechy, šlehačka" },
    ],
    image: "/images/jidlo6.jpg",
  },
  {
    id: "kpivu",
    label: "K pivu",
    items: [
      { name: "Mix smažených řízečků a chilli chedarových taštiček", price: "390 Kč", desc: "kuřecí 100g, vepřové 100g, taštičky 100g, tatarská a ďábelská omáčka" },
      { name: "Pečené vepřové zadní koleno", price: "390 Kč", desc: "kyselý okurek, křen, hořčice, zelný salát, chléb (900g) — doba přípravy cca 45 min" },
      { name: "Bramborové chipsy", price: "120 Kč", desc: "solené nebo česnekové, ďábelská omáčka (200g)" },
      { name: "Pražené mandle", price: "90 Kč", desc: "(100g)" },
    ],
    image: "/images/jidlo7.jpg",
  },
  {
    id: "prilohy",
    label: "Přílohy",
    items: [
      { name: "Šťouchané brambory", price: "70 Kč", desc: "(200g)" },
      { name: "Bramborová kaše", price: "65 Kč", desc: "(200g)" },
      { name: "Hranolky julienne", price: "65 Kč", desc: "(160g)" },
      { name: "Bramborové dukátky", price: "65 Kč", desc: "(160g)" },
      { name: "Pečené Grenaille", price: "65 Kč", desc: "(200g)" },
      { name: "Grilovaná zelenina", price: "120 Kč", desc: "(200g)" },
      { name: "Bylinková bageta", price: "45 Kč", desc: "(1 ks)" },
    ],
    image: "/images/jidlo8.jpg",
  },
]

// ===== GALLERY IMAGES =====
export const galleryImages = [
  "/images/jidlo1.jpg",
  "/images/jidlo2.jpg",
  "/images/jidlo3.jpg",
  "/images/jidlo4.jpg",
  "/images/jidlo5.jpg",
  "/images/jidlo6.jpg",
  "/images/jidlo7.jpg",
  "/images/jidlo8.jpg",
  "/images/jidlo9.jpg",
  "/images/jidlo10.jpg",
]

// ===== ACCOMMODATION =====
export interface AccommodationItem {
  title: string
  desc: string
  images: string[]
  features: string[]
}

export const accommodations: AccommodationItem[] = [
  {
    title: "Hotel",
    desc: "Ubytování v hotelu s výhledem na Těrlickou přehradu. Celková kapacita 60 lůžek ve 12 dvoulůžkových pokojích, 4 jednolůžkové pokoje, bezbariérový pokoj a 2 apartmány. V ceně bohatá snídaně.",
    images: [
      "/images/hotel9.jpg",
      "/images/hotel8.jpg",
      "/images/hotel2.jpg",
      "/images/hotel1.jpg",
      "/images/hotel3.jpg",
      "/images/hotel4.jpg",
      "/images/hotel5.jpg",
      "/images/hotel6.jpg",
      "/images/hotel7.jpg",
    ],
    features: ["60 lůžek", "Snídaně v ceně", "Wi-Fi", "Parking"],
  },
  {
    title: "Chata Tatranec",
    desc: "Útulný srub s vlastním sociálním zázemím, krbovou místností, ložnicí a kuchyňským koutem. Doporučujeme max 4 osoby. Dostupná červen–září.",
    images: [
      "/images/tatranec1.jpeg",
      "/images/tatranec2.jpeg",
      "/images/tatranec3.jpeg",
      "/images/tatranec4.jpeg",
      "/images/tatranec5.jpeg",
      "/images/tatranec6.jpeg",
      "/images/tatranec7.jpeg",
      "/images/tatranec8.jpeg",
      "/images/tatranec9.jpeg",
      "/images/tatranec10.jpeg",
      "/images/tatranec11.jpeg",
    ],
    features: ["Max 4 osoby", "Krb", "Kuchyňka"],
  },
  {
    title: "Trdlovy Apartmány",
    desc: "Tři nové, moderní apartmány s vlastním sociálním zázemím, ložnicí, kuchyňským koutem a výhledem na přehradu. Max 2 osoby.",
    images: [
      "/images/apartmany3.jpg",
      "/images/apartmany2.jpg",
      "/images/apartmany4.jpg",
      "/images/apartmany1.jpg",
      "/images/apartmany5.jpg",
    ],
    features: ["Max 2 osoby", "Výhled na přehradu", "Moderní"],
  },
]

// ===== HOTEL DETAILS (from /ubytovani/) =====
export const hotelDetails = {
  checkIn: "16:00",
  checkOut: "11:00",
  capacity: "60 lůžek",
  rooms: [
    "12× dvoulůžkový pokoj s možností přistýlky",
    "4× jednolůžkový pokoj",
    "1× bezbariérový pokoj (3 osoby)",
    "1× apartmán (2 osoby) s možností přistýlky",
    "1× apartmán (3 osoby) s možností přistýlky",
  ],
  info: "Hoteloví hosté ocení klidné, příjemné prostředí u vodní nádrže Těrlická přehrada s možností výletů do Moravskoslezských Beskyd, kde se nachází Pustevny se sochou boha Radegasta, Lysá hora, Prašivá, nádrž Šance nebo golfové městečko Čeladná. V Ostravě můžete navštívit industriální památky jako důl Michal, důl Landek a Vítkovice.",
  cycling: "Pro milovníky cykloturistiky vede okolím přehrady a Beskyd velké množství cyklostezek. Golfisté jistě ocení nově vybudované golfové hřiště v Karviné – Lipiny, Ropice Golf Resort či vzdálenějším Golf Resort Čeladná nebo Golf Ostravice.",
  services: `Celý areál zajišťuje návštěvníkům a hostům komplexní služby, v případě zájmu individuální službu připravenou „na klíč" náročným zákazníkům. Součástí hotelu je vlastní bezplatné a oplocené parkoviště v areálu.`,
}

// ===== HOTEL EXTRAS (from /ubytovani/) =====
export interface HotelExtra {
  title: string
  desc: string
  price?: string
  items?: string[]
}

export const hotelExtras: HotelExtra[] = [
  {
    title: "Květiny",
    desc: "Překvapení pro Vaši milou v podobě čerstvých květin v pokoji. Doporučujeme objednávku alespoň 24h dopředu.",
    price: "Dle přání",
  },
  {
    title: "Čerstvé ovoce",
    desc: "Mísa čerstvého ovoce při příjezdu na Vás může čekat, pokud si jej objednáte alespoň 24h dopředu.",
    price: "150 Kč/kg",
  },
  {
    title: "Láhev vína",
    desc: "K doplnění romantického pobytu doporučujeme objednat láhev vína či sektu přímo na pokoj.",
  },
  {
    title: "Piknikový koš",
    desc: "Piknik s krásným výhledem na přehradu při západu slunce.",
    price: "700 Kč pro 2 osoby",
    items: ["Deka", "Příbory, talíře, skleničky", "Láhev vína", "Jaškovská voda", "Ovoce", "Club Sandwich"],
  },
  {
    title: "Ohniště",
    desc: "Návrat do táborových let, teplo plápolajícího ohně, praskání dřeva, vůně špekáčků, výhled na Těrlickou přehradu.",
    price: "400–600 Kč",
  },
  {
    title: "Sportovní vybavení",
    desc: "Zapůjčení sportovního vybavení. Vratná záloha 300 Kč.",
    items: ["Hole na nordic walking", "Petanque", "Badminton", "Míč na fotbal a volejbal", "Nafukovací míč"],
  },
]

// ===== STAY PACKAGES (from /pobytove-balicky/) =====
export interface StayPackage {
  title: string
  subtitle?: string
  nights: string
  price: string
  childPrice?: string
  includes: string[]
  highlight?: boolean
}

export const stayPackages: StayPackage[] = [
  {
    title: "Letní pobyt",
    subtitle: "2 noci",
    nights: "2",
    price: "2 500 Kč pro 2 osoby",
    childPrice: "450 Kč/noc (4–14 let)",
    includes: [
      "Ubytování ve dvoulůžkovém pokoji 27 m² s balkónem",
      "Možnost až 2 přistýlek",
      "Pláž 50 m od hotelu",
      "Káva s dezertem při příjezdu (zmrzlina pro děti)",
      "20% sleva v restauraci po celý pobyt",
      "20% sleva na Ski&Wake Park",
      "20% sleva na Půjčovnu Čtyřkolek Těrlicko",
      "Zdarma nafukovací kajak",
      "Wi-Fi zdarma",
      "Parkování v areálu zdarma",
      "2 hodiny tenisu/nohejbalu zdarma (Po–Pá 9–12)",
      "Zdarma ruské kuželky",
    ],
  },
  {
    title: "Prodloužený pobyt",
    subtitle: "3 noci",
    nights: "3",
    price: "4 900 Kč pro 2 osoby",
    childPrice: "500 Kč/noc (4–14 let)",
    includes: [
      "Ubytování ve dvoulůžkovém pokoji 27 m² s balkónem",
      "Možnost až 2 přistýlek",
      "Pláž 50 m od hotelu",
      "15% sleva v restauraci po celý pobyt",
      "20% sleva na Ski&Wake Park",
      "Zdarma nafukovací kajak",
      "Wi-Fi zdarma",
      "Parkování v areálu zdarma",
      "Zdarma ruské kuželky",
    ],
  },
  {
    title: "Týdenní relaxace",
    subtitle: "4 noci",
    nights: "4",
    price: "6 300 Kč pro 2 osoby",
    childPrice: "500 Kč/noc (4–14 let)",
    includes: [
      "Ubytování ve dvoulůžkovém pokoji 27 m² s balkónem",
      "Možnost až 2 přistýlek",
      "Pláž 50 m od hotelu",
      "20% sleva v restauraci po celý pobyt",
      "20% sleva na Ski&Wake Park",
      "Zdarma nafukovací kajak",
      "Wi-Fi zdarma",
      "Parkování v areálu zdarma",
      "Zdarma ruské kuželky",
    ],
  },
  {
    title: "Chata Tatranec",
    subtitle: "5 nocí",
    nights: "5",
    price: "5 000 Kč",
    includes: [
      "Pobyt v útulném srubu max. pro 4 osoby",
      "Pláž 50 m od chatky",
      "Výhled na přehradu",
      "Vlastní kuchyňský kout",
      "Sociální zařízení",
      "Krbová místnost s TV",
      "20% sleva v restauraci po celý pobyt",
      "Parkování zdarma",
      "Ruské kuželky zdarma",
      "Každá další noc 500 Kč",
    ],
  },
  {
    title: "Zamilovaný večer",
    subtitle: "1 noc",
    nights: "1",
    price: "3 600 Kč pro 2 osoby",
    highlight: true,
    includes: [
      "Dvoulůžkový pokoj s balkónem",
      "Bohatá snídaně",
      "Překvapení — květiny na pokoji",
      "3chodová romantická večeře při svíčkách",
      "Láhev vína ke speciálnímu menu",
    ],
  },
  {
    title: "Romantický balíček",
    subtitle: "2 noci",
    nights: "2",
    price: "5 800 Kč pro 2 osoby",
    highlight: true,
    includes: [
      "Dvoulůžkový pokoj s balkónem na 2 noci",
      "Bohatá snídaně",
      "Sekt, květiny a perlivá voda na pokoji",
      "3chodová romantická večeře při svíčkách",
      "Láhev vína ke speciálnímu menu",
      "Piknik v přírodě s piknikovým košem",
    ],
  },
]

// ===== VENUES / PRONÁJEM (from /pronajem/) =====
export interface Venue {
  name: string
  desc: string
}

export const venues: Venue[] = [
  { name: "Hraběcí sněm", desc: "Nejrozsáhlejší sál, ideální pro velké konference a firemní akce" },
  { name: "Veselá chasa", desc: "Hradní taverna s historickým nábytkem a audiovizuální technikou" },
  { name: "Hladoví zbrojnoši", desc: "Hlavní restaurační prostory s velkým barem" },
  { name: "Rytíři krále", desc: "Středověká atmosféra pro soukromé akce" },
  { name: "Mönnichova rozhledna", desc: "Útulný prostor s krásným výhledem" },
  { name: "Ohnivá terasa", desc: "Zastřešená terasa pro romantické večeře a venkovní akce" },
]

export const cateringOptions = {
  coffeeBreaks: [
    { variant: "Varianta 1", price: "180 Kč/os.", desc: "Káva, čaj, voda, džus, 2 ks sladkého pečiva" },
    { variant: "Varianta 2", price: "220 Kč/os.", desc: "Káva, čaj, voda, džus, 2 ks sladkého pečiva, sendvič, kanapky nebo slaný závin" },
    { variant: "Varianta 3", price: "240 Kč/os.", desc: "Káva, čaj, voda, džus, 2 ks sladkého pečiva, slaný závin, kanapky, sendviče" },
  ],
  lunch: "Servírovaný oběd od 220 Kč (polévka, hlavní chod – výběr ze 3 druhů, nealko nápoj) nebo raut na míru",
  dinner: "Servírovaná večeře od 200 Kč (hlavní chod – výběr ze 3 druhů, nealko nápoj) nebo raut na míru",
  extras: ["Audiovizuální technika (TV, dataprojektor, repro)", "Škola čepování piva", "Řízené degustace", "DJ/živá hudba", "Využití ohniště"],
}

// ===== EVENTS =====
export interface EventItem {
  title: string
  desc: string
  image: string
  link: string
  route?: string
}

export const events: EventItem[] = [
  {
    title: "Svatby",
    desc: "Obřady pod širým nebem, až 200 hostů, kompletní svatební servis včetně menu, výzdoby a ubytování.",
    image: "/images/svatba1.jpg",
    link: "Svatební nabídka",
    route: "/svatba",
  },
  {
    title: "Firemní akce",
    desc: "6 salónků a teras, catering od 180 Kč/os., AV technika, teambuilding. Hraběcí sněm pojme až 74 hostů.",
    image: "/images/hotel5.jpg",
    link: "Více informací",
    route: "/pronajem",
  },
  {
    title: "Dárkové poukazy",
    desc: "Poukazy od 500 Kč na gastronomický zážitek nebo pobyt. Objednávka v restauraci nebo e-mailem.",
    image: "/images/jidlo9.jpg",
    link: "Objednat poukaz",
    route: "/darkove-poukazy",
  },
]

// ===== SERVICES (from /sport/) =====
export interface ServiceItem {
  title: string
  desc: string
  icon: string
}

export const services: ServiceItem[] = [
  {
    title: "Nabíjení elektromobilů",
    desc: "Možnost nabíjení elektromobilů (10 Kč/kW). V době dobíjení 20% sleva na občerstvení v restauraci.",
    icon: "zap",
  },
  {
    title: "Škola čepování piva",
    desc: "Hodinové školení s možností praktické zkoušky a konzumace piva. Pro skupiny i jednotlivce.",
    icon: "beer",
  },
  {
    title: "Řízené degustace",
    desc: "Ochutnávky vína, sektů, rumů, koňaků, whisky a dalších nápojů dle Vašeho přání.",
    icon: "wine",
  },
  {
    title: "DJ / Živá hudba",
    desc: "Zkušené kontakty na DJ a muzikanty pro Vaši večerní zábavu nebo soukromou akci.",
    icon: "music",
  },
  {
    title: "Ohniště s výhledem",
    desc: "Opékání špekáčků u otevřeného ohně s výhledem na Těrlickou přehradu.",
    icon: "flame",
  },
  {
    title: "Teambuilding",
    desc: "Casino, laser střelba, holandský biliard, barmanská show a další aktivity pro firemní skupiny.",
    icon: "users",
  },
]

// ===== GIFT VOUCHERS (from /darkove-poukazy/) =====
export const giftVouchers = {
  intro: "Chcete potěšit své nejbližší, přátele, kolegy, obchodní partnery či zaměstnance? Darujte jim poukaz na romantickou večeři, pobyt v našem hotelu, nebo spojte vše dohromady…",
  options: [
    "Gastronomický zážitek v hodnotě 500 Kč, 1 000 Kč nebo Vámi zvolené částky",
    "Pobyt v hotelu Jaškovská Krčma",
    "Kombinace dle Vašeho přání",
  ],
  orderInfo: "Originální dárkový poukaz si objednejte u obsluhy v restauraci nebo na info@jaskovskakrcma.cz.",
}

// ===== NEWS (from /category/aktuality/) =====
export interface NewsItem {
  date: string
  title: string
  summary: string
}

export const news: NewsItem[] = [
  {
    date: "02. dubna 2026",
    title: "Velikonoční menu",
    summary: "Zveme všechny milovníky dobrého jídla k nám do restaurace na speciální velikonoční menu plné tradičních i moderních chutí. Přijďte si užít sváteční atmosféru!",
  },
  {
    date: "03. února 2026",
    title: "Valentýnské menu",
    summary: "14. února od 15:00 — Oslavte svátek lásky v atmosféře skvělé gastronomie. Připravili jsme výjimečné valentýnské menu, které potěší všechny smysly.",
  },
  {
    date: "04. prosince 2025",
    title: "Vánoce v Jaškovské krčmě",
    summary: "Vánoční dárkový poukaz na konzumaci 1 000 Kč nyní za 900 Kč. Láhev vína s gravírováním za 500 Kč. Poukaz na Školu čepování piva za 800 Kč.",
  },
]

// ===== TIMELINE =====
export interface TimelineItem {
  year: string
  title: string
  desc: string
}

export const timeline: TimelineItem[] = [
  { year: "1268", title: "První zmínka", desc: "Podle historických pramenů pochází část krčmy ze 13. století. První zmínka o této jedné z nejstarších hospod ve Slezsku pochází z roku 1268, kdy byla podrobně popsána v listině polskému knížeti Vladislavovi." },
  { year: "1458", title: "Nový majitel", desc: "Krčma přešla do majetku Mochnika Kronice z Cierlicka. V dalších létech se střídali majitelé a krčma byla přestavována a rozšiřována." },
  { year: "1691", title: "Znovupostavení", desc: "Po požáru v roce 1682 byla krčma nákladem Těšínské komory znovu postavena přibližně v dnešní podobě. V 18. století nabyla na významu jako zastávka kupců." },
  { year: "2018", title: "750 let provozu", desc: "Oslavili jsme 750 let nepřetržitého provozu. Dnes je Jaškovská Krčma moderní hotel a restaurace, která ctí svou historii a nabízí hostům nezapomenutelný zážitek." },
]

// ===== NAV =====
export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: "Restaurace", href: "#restaurace" },
  { label: "Ubytování", href: "#ubytovani" },
  { label: "Akce", href: "#akce" },
  { label: "Historie", href: "#historie" },
  { label: "Kontakt", href: "#kontakt" },
]

// ===== FOOD GALLERY (for About section) =====
export const foodGalleryImages = [
  "/images/jidlo1.jpg",
  "/images/jidlo2.jpg",
  "/images/jidlo3.jpg",
  "/images/jidlo4.jpg",
  "/images/jidlo5.jpg",
  "/images/jidlo6.jpg",
  "/images/jidlo7.jpg",
]

// ===== WEDDING (from /svatba/) =====
export interface WeddingVariant {
  title: string
  price: string
  maxGuests?: string
  desc: string
  includes: string[]
  note?: string
}

export const weddingData = {
  intro: `Dopřejte si netradiční zážitek z Vašeho svatebního dne. Připravíme Vám okouzlující prostředí v areálu Jaškovské krčmy pro obřad pod širým nebem na zelené louce s doplňkovými dekoracemi, bohatou výzdobou, posezením a pro případ nepřízně počasí uspořádáme salonek na krčmě do podoby oddávací místnosti.`,
  experience: `Máme eminentní zájem pomoci Vám při přípravě i provedení slavnostních okamžiků pro Vás i Vaše blízké. Nabízíme naše dlouholeté zkušenosti, um a vstřícnost našich zaměstnanců. Věříme, že budete spokojeni a rádi vzpomenete na chvíle, prožité v areálu hotelu a restaurace Jaškovská krčma.`,
  tabule: `Restaurační areál umožňuje vysoký počet kombinací uspořádání Vaší oslavy. Při uzavření areálu v letních měsících pohostíme až 200 osob, největší salónek "Hraběcí sněm" pojme 76 hostů.`,
  variants: [
    {
      title: "Varianta 1 — Prosklená terasa",
      price: "2 650 Kč/os.",
      maxGuests: "max. 42 osob",
      desc: "Kompletní zajištění svatby na prosklené terase s venkovním obřadem.",
      includes: [
        "Venkovní obřad s potaženými židlemi",
        "Pronájem terasy do 23. hodiny",
        "Tradiční uvítání slivovicí, chlebem a solí",
        "Tříchodové menu + raut + přípitek",
        "Nealko nápoje (voda, džusy, Kofola, víno, káva, pivo Radegast 12°)",
        "Uschování dortu, koláčů a cukroví",
        "Krájení dortu, sbalení rautu, úklid",
      ],
      note: "Nutná minimální útrata 85 000 Kč. Výzdoba sálu od 5 000 Kč. Alkohol z restaurace sleva 30%, vlastní alkohol korkovné 130 Kč/os.",
    },
    {
      title: "Varianta 2 — Hraběcí sněm",
      price: "2 350 Kč/os.",
      maxGuests: "min. 40 osob",
      desc: "Kompletní zajištění svatby v Hraběcím sále s venkovním obřadem.",
      includes: [
        "Venkovní obřad",
        "Pronájem sálu do 23. hodiny",
        "Tradiční uvítání slivovicí, chlebem a solí",
        "Tříchodové menu + raut + přípitek",
        "Nealko nápoje (voda, džusy, Kofola, víno, káva, pivo Radegast 12°)",
        "Uschování dortu, koláčů a cukroví",
        "Krájení dortu, sbalení rautu, úklid",
      ],
      note: "Výzdoba sálu od 5 000 Kč. Alkohol z restaurace sleva 30%, vlastní alkohol korkovné 130 Kč/os.",
    },
    {
      title: "Varianta 3 — Vnitřní sály (bez obřadu)",
      price: "2 150 Kč/os.",
      desc: "Kompletní zajištění svatební hostiny ve vnitřních sálech.",
      includes: [
        "Pronájem sálu do 23. hodiny",
        "Tradiční uvítání slivovicí, chlebem a solí",
        "Tříchodové menu + raut + přípitek",
        "Nealko nápoje (voda, džusy, Kofola, víno, káva, pivo Radegast 12°)",
        "Uschování dortu, koláčů a cukroví",
        "Krájení dortu, sbalení rautu, úklid",
      ],
      note: "Hostina na terase příplatek 300 Kč/os. Výzdoba sálu od 5 000 Kč. Alkohol z restaurace sleva 30%, vlastní alkohol korkovné 130 Kč/os.",
    },
    {
      title: "Varianta 4 — Vlastní výběr",
      price: "Dle domluvy",
      desc: "Sestavte si svatbu zcela dle svých představ — menu, prostory i služby na míru.",
      includes: [
        "Obědové menu cca 550 Kč/os. (přípitek, předkrm, polévka, hlavní chod)",
        "Odpolední/večerní raut od 400 Kč/os.",
        "Výzdoba sálu od 5 000 Kč",
        "Možnost vlastního dortu, koláčů a cukroví",
      ],
      note: "Alkohol z restaurace sleva 30%, vlastní alkohol korkovné 130 Kč/os.",
    },
  ] as WeddingVariant[],
  venueRental: [
    { name: "Hraběcí sněm", capacity: "max. 74 hostů", price: "5 000 Kč" },
    { name: "Veselá chasa", capacity: "max. 30 hostů", price: "2 500 Kč" },
    { name: "Ohnivá terasa (zastřešená)", capacity: "max. 42 hostů", price: "15 000 Kč" },
    { name: "Uzavření celé terasy", capacity: "", price: "25 000 Kč" },
  ],
  ceremony: {
    price: "12 000 Kč",
    variants: ["S altánkem", "S dřevěnou bránou"],
    includes: "výzdoba, reprodukovaná hudba a ozvučení, 16 potažených židlí s mašlí, organizace svatebních hostů",
  },
  extras: [
    "Potahy na židle s mašlí — 100 Kč/ks",
    "Přehoz na židle — 50 Kč/ks",
    "Poplatek po 23. hodině — 1 000 Kč/hod",
    "Poplatek po 2. hodině ranní — 2 000 Kč/hod",
  ],
  gift: "Pro novomanžele noc v pokoji na hotelu se snídaní zdarma.",
  deposit: "10 000 Kč",
  storno: "Při zrušení 4 měsíce před konáním akce je záloha nevratná.",
}

export type SpaceItem = {
  title: string
  subtitle: string
  image: string
  panoId: string
  heading: number
  pitch?: number
}

export const spaces: SpaceItem[] = [
  {
    title: "RESTAURACE",
    subtitle: "ÚŽASNÁ KUCHYNĚ",
    image: "/images/jidlo2.jpg",
    panoId: "AF1QipO3prPkYK7t0HEE8efcoTmRdma5JSg0RLler_yt",
    heading: 42.66
  },
  {
    title: "OHNIVÁ TERASA",
    subtitle: "ROMANTICKÁ VEČEŘE",
    image: "/images/svatba1.jpg",
    panoId: "CIHM0ogKEICAgID4rozhOA",
    heading: 118.68
  },
  {
    title: "HRABĚCÍ SNĚM",
    subtitle: "NEJROZSÁHLEJŠÍ SÁL",
    image: "/images/svatba4.jpg",
    panoId: "AF1QipPx1v6DO_H-yOkNxULv3hpEJ7yZU8tN5NjvgAvv",
    heading: 273.34
  },
  {
    title: "RYTÍŘI KRÁLE",
    subtitle: "STŘEDOVĚKÁ ATMOSFÉRA",
    image: "/images/svatba6.jpg",
    panoId: "AF1QipNZQpVUm78_R2dJfaHrYeY8ic-Jk__W050J33Ej",
    heading: 121.88
  },
  {
    title: "VESELÁ CHASA",
    subtitle: "HRADNÍ TAVERNA",
    image: "/images/svatba8.jpg",
    panoId: "AF1QipNwXKnQXHpoRZDr25urXKTnUi_MEuIWFGZe5yhm",
    heading: 271.36
  },
  {
    title: "MÖNNICHOVA ROZHLEDNA",
    subtitle: "KRÁSNÁ",
    image: "/images/svatba12.jpg",
    panoId: "CIHM0ogKEICAgID4rvLEVA",
    heading: 113.38
  }
]
