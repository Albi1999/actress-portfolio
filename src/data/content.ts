export type SocialLink = {
  label: string;
  url: string;
};

export type QuickLink = {
  label: string;
  path: "/" | "/galleria" | "/video" | "/profilo" | "/contatti";
  description: string;
};

export type ProfileData = {
  stageName: string;
  legalName: string;
  roleTagline: string;
  city: string;
  birthDate: string;
  birthPlace: string;
  heightCm: number;
  weightKg: number;
  pantsSize: string;
  jacketSize: string;
  shoesSize: string;
  heroVideoSrc?: string;
  heroPosterSrc?: string;
  languages: string[];
  skills: string[];
  interests: string[];
  email: string;
  phone: string;
  intro: string;
  bio: string[];
  showreelVideoId: string;
  highlights: {
    title: string;
    description: string;
  }[];
  portraitImages: {
    src: string;
    alt: string;
  }[];
  socials: SocialLink[];
  quickLinks: QuickLink[];
};

export type GalleryImage = {
  id: string;
  src: string;
  thumb: string;
  alt: string;
  category: "editoriale" | "scene" | "backstage";
};

export type PortfolioVideo = {
  id: string;
  title: string;
  description: string;
  youtubeVideoId: string;
};

export type CvEntry = {
  year: string;
  title: string;
  subtitle: string;
  details: string;
};

export const profile: ProfileData = {
  stageName: "Sofia La Mastra",
  legalName: "Sofia La Mastra",
  roleTagline: "Attrice | Cinema e Teatro",
  city: "Padova",
  birthDate: "23/10/2002",
  birthPlace: "Caltagirone (CT)",
  heightCm: 156,
  weightKg: 45,
  pantsSize: "36-38 (IT)",
  jacketSize: "38",
  shoesSize: "36",
  heroVideoSrc: "/assets/video/hero-showreel.mp4",
  heroPosterSrc: "/assets/images/ritratto.jpg",
  languages: [
    "Italiano (madrelingua)",
    "Dialetto siciliano",
    "Inglese (B2 - Cambridge English B2 First)",
    "Francese (B2 - DELF B2)",
  ],
  skills: [
    "Recitazione cinematografica",
    "Improvvisazione teatrale",
    "Monologhi e presenza scenica",
    "Movimento scenico",
    "Canto",
    "Violino (livello base)",
  ],
  interests: [
    "Lettura e scrittura creativa",
    "Canto corale",
    "Violino e background musicale",
    "Disegno e arti visive",
  ],
  email: "sofialamastra@gmail.com",
  phone: "+39 3286997020",
  intro:
    "Studentessa di psicologia con una profonda passione per cinema e teatro, Sofia porta in scena autenticità, vulnerabilità e un'energia intensa.",
  bio: [
    "Attrice in formazione con un percorso solido tra teatro e camera, Sofia crea interpretazioni sincere e una presenza naturale che attraversa generi e linguaggi.",
    "La sua recitazione nasce dall'ascolto, da un preciso lavoro sul dettaglio emotivo e da una curiosità costante verso i personaggi che interpreta.",
    "Oltre al palco e alla sala di ripresa, continua a investire in studio, scrittura creativa e pratiche espressive che arricchiscono il suo linguaggio performativo.",
  ],
  showreelVideoId: "1ssGqO9jae0",
  highlights: [
    {
      title: "Recitazione cinematografica",
      description:
        ""
   //     "Percorso attivo con cortometraggio finale per sviluppare presenza e ritmo in camera.",
    },
    {
      title: "Improvvisazione teatrale",
      description:
        ""
     //   "Allenamento costante alla spontaneita, al gioco scenico e all'ascolto dell'altro.",
    },
    {
      title: "Voce e musicalita",
      description:
        ""
      //  "Canto corale e studio del violino per rafforzare sensibilita e controllo vocale.",
    },
    {
      title: "Scrittura e arti visive",
      description:
        ""
    //    "Passione per lettura e scrittura creativa, con attenzione a dettagli visivi e poetici.",
    },
  ],
  portraitImages: [
    {
      src: "/assets/images/figura_intera.jpg",
      alt: "Figura intera in studio",
    },
    {
      src: "/assets/images/ritratto_dettaglio.jpg",
      alt: "Ritratto dettaglio",
    },
    {
      src: "/assets/images/figura_intera2.jpg",
      alt: "Figura intera seconda posa",
    },
  ],
  socials: [
    {
      label: "Instagram",
      url: "https://www.instagram.com/sofia_la_mastra?igsh=MnF2emRrM2o3eGlj",
    },
  ],
  quickLinks: [
    {
      label: "Galleria Fotografica",
      path: "/galleria",
      description: "",
    },
    {
      label: "Video e Showreel",
      path: "/video",
      description: "",
    },
    {
      label: "Profilo e Curriculum",
      path: "/profilo",
      description: "",
    },
  ],
};

export const galleryImages: GalleryImage[] = [
  {
    id: "ed-ritratto",
    src: "/assets/images/ritratto.jpg",
    thumb: "/assets/images/ritratto.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "ed-ritratto-dettaglio",
    src: "/assets/images/ritratto_dettaglio.jpg",
    thumb: "/assets/images/ritratto_dettaglio.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "ed-mezzo-busto",
    src: "/assets/images/mezzo_busto_seduta.jpg",
    thumb: "/assets/images/mezzo_busto_seduta.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "ed-figura-intera",
    src: "/assets/images/figura_intera.jpg",
    thumb: "/assets/images/figura_intera.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "ed-figura-intera-2",
    src: "/assets/images/figura_intera2.jpg",
    thumb: "/assets/images/figura_intera2.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "ig-4451-15",
    src: "/assets/images/IG/Sofia%20La%20Mastra_@TG_DSC4451-15.jpg",
    thumb: "/assets/images/IG/Sofia%20La%20Mastra_@TG_DSC4451-15.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "ig-4451-16",
    src: "/assets/images/IG/Sofia%20La%20Mastra_@TG_DSC4451-16.jpg",
    thumb: "/assets/images/IG/Sofia%20La%20Mastra_@TG_DSC4451-16.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "ig-4483-14",
    src: "/assets/images/IG/Sofia%20La%20Mastra_@TG_DSC4483-14.jpg",
    thumb: "/assets/images/IG/Sofia%20La%20Mastra_@TG_DSC4483-14.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "ig-5102-12",
    src: "/assets/images/IG/Sofia%20La%20Mastra_@TG_DSC5102-12.jpg",
    thumb: "/assets/images/IG/Sofia%20La%20Mastra_@TG_DSC5102-12.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "ig-5102-13",
    src: "/assets/images/IG/Sofia%20La%20Mastra_@TG_DSC5102-13.jpg",
    thumb: "/assets/images/IG/Sofia%20La%20Mastra_@TG_DSC5102-13.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "colore-5186-11",
    src: "/assets/images/Colori/Sofia%20La%20Mastra_@TG_DSC5186-11.jpg",
    thumb: "/assets/images/Colori/Sofia%20La%20Mastra_@TG_DSC5186-11.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "bn-4164-8",
    src: "/assets/images/BN/Sofia%20La%20Mastra_@TG_DSC4164-8.jpg",
    thumb: "/assets/images/BN/Sofia%20La%20Mastra_@TG_DSC4164-8.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "bn-4174-6",
    src: "/assets/images/BN/Sofia%20La%20Mastra_@TG_DSC4174-6.jpg",
    thumb: "/assets/images/BN/Sofia%20La%20Mastra_@TG_DSC4174-6.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "bn-4183-10",
    src: "/assets/images/BN/Sofia%20La%20Mastra_@TG_DSC4183-10.jpg",
    thumb: "/assets/images/BN/Sofia%20La%20Mastra_@TG_DSC4183-10.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "bn-4328-4",
    src: "/assets/images/BN/Sofia%20La%20Mastra_@TG_DSC4328-4.jpg",
    thumb: "/assets/images/BN/Sofia%20La%20Mastra_@TG_DSC4328-4.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "bn-4879-2",
    src: "/assets/images/BN/Sofia%20La%20Mastra_@TG_DSC4879-2.jpg",
    thumb: "/assets/images/BN/Sofia%20La%20Mastra_@TG_DSC4879-2.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
  {
    id: "bn-5186-12",
    src: "/assets/images/BN/Sofia%20La%20Mastra_@TG_DSC5186-12.jpg",
    thumb: "/assets/images/BN/Sofia%20La%20Mastra_@TG_DSC5186-12.jpg",
    alt: "Foto di Sofia La Mastra",
    category: "editoriale",
  },
];

export const videos: PortfolioVideo[] = [
  {
    id: "showreel-2026",
    title: "Monologo tratto da \"Mommy\"",
    description:
      "Monologo registrato in workshop presso l'Associazione Nazionale Arti Performative, sotto la direzione di Giulia Appolloni (casting director).",
    youtubeVideoId: "1ssGqO9jae0",
  },
  {
    id: "monologue-studio",
    title: "Dialogo tratto da \"Puoi baciare lo sposo\"",
    description:
      "Dialogo registrato in workshop presso l'Associazione Nazionale Arti Performative, sotto la direzione di Giulia Appolloni (casting director).",
    youtubeVideoId: "g47-4mnFeys",
  },
];

export const cvEntries: CvEntry[] = [
  {
    year: "2025 - attuale",
    title: "Corso di recitazione cinematografica",
    subtitle: "Associazione Culturale Fantalica, Padova",
    details: "Percorso con cortometraggio finale.",
  },
  {
    year: "2025 - attuale",
    title: "Corso di improvvisazione teatrale",
    subtitle: "Teatro Believe, Padova",
    details: "Percorso con spettacolo finale.",
  },
  {
    year: "2022 - 2024",
    title: "Corso di teatro",
    subtitle: "Teatro di Sacco, Perugia",
    details: "Spettacoli finali rivolti a scuole superiori.",
  },
  {
    year: "2019 - 2020",
    title: "Lezioni individuali",
    subtitle: "Acting coach Anna Redi",
    details: "Preparazione monologhi e movimento scenico.",
  },
  {
    year: "2016 - 2018",
    title: "Corso di teatro francofono",
    subtitle: "Liceo linguistico Bonaventura Secusio, Caltagirone",
    details: "Formazione teatrale in lingua francese.",
  },
];
