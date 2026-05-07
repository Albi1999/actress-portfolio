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
    "Studentessa di psicologia con una profonda passione per cinema e teatro, Sofia porta in scena autenticita, vulnerabilita e un'energia intensa.",
  bio: [
    "Sin da bambina Sofia nutre una grande passione per cinema e teatro, che considera un modo per vivere molte vite e raccontare la propria umanita.",
    "Quando recita si sente pienamente viva: mette a nudo la propria storia e un lato piu folle e strambo che diventa forza scenica, sia sul palcoscenico che davanti alla telecamera.",
    "Oltre alla recitazione coltiva la lettura e la scrittura creativa, il canto corale, il violino e le arti visive.",
  ],
  showreelVideoId: "dQw4w9WgXcQ",
  highlights: [
    {
      title: "Recitazione cinematografica",
      description:
        "Percorso attivo con cortometraggio finale per sviluppare presenza e ritmo in camera.",
    },
    {
      title: "Improvvisazione teatrale",
      description:
        "Allenamento costante alla spontaneita, al gioco scenico e all'ascolto dell'altro.",
    },
    {
      title: "Voce e musicalita",
      description:
        "Canto corale e studio del violino per rafforzare sensibilita e controllo vocale.",
    },
    {
      title: "Scrittura e arti visive",
      description:
        "Passione per lettura e scrittura creativa, con attenzione a dettagli visivi e poetici.",
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
      description: "Selezione di scatti editoriali, scena e backstage",
    },
    {
      label: "Video e Showreel",
      path: "/video",
      description: "Clip private YouTube integrate direttamente nel sito",
    },
    {
      label: "Profilo e Curriculum",
      path: "/profilo",
      description: "Formazione, esperienze e competenze professionali",
    },
  ],
};

export const galleryImages: GalleryImage[] = [
  {
    id: "ed-ritratto",
    src: "/assets/images/ritratto.jpg",
    thumb: "/assets/images/ritratto.jpg",
    alt: "Ritratto in studio",
    category: "editoriale",
  },
  {
    id: "ed-ritratto-dettaglio",
    src: "/assets/images/ritratto_dettaglio.jpg",
    thumb: "/assets/images/ritratto_dettaglio.jpg",
    alt: "Ritratto dettaglio",
    category: "editoriale",
  },
  {
    id: "ed-mezzo-busto",
    src: "/assets/images/mezzo_busto_seduta.jpg",
    thumb: "/assets/images/mezzo_busto_seduta.jpg",
    alt: "Mezzo busto seduta",
    category: "editoriale",
  },
  {
    id: "ed-figura-intera",
    src: "/assets/images/figura_intera.jpg",
    thumb: "/assets/images/figura_intera.jpg",
    alt: "Figura intera in studio",
    category: "editoriale",
  },
  {
    id: "ed-figura-intera-2",
    src: "/assets/images/figura_intera2.jpg",
    thumb: "/assets/images/figura_intera2.jpg",
    alt: "Figura intera seconda posa",
    category: "editoriale",
  },
];

export const videos: PortfolioVideo[] = [
  {
    id: "showreel-2026",
    title: "Showreel 2026",
    description:
      "Una selezione di scene recenti tra cinema indipendente e short film.",
    youtubeVideoId: "dQw4w9WgXcQ",
  },
  {
    id: "monologue-studio",
    title: "Monologo in Studio",
    description: "Studio su testo contemporaneo, camera close-up.",
    youtubeVideoId: "ysz5S6PUM-U",
  },
  {
    id: "selftape-drama",
    title: "Self Tape - Drama",
    description: "Self tape in italiano per casting televisivo.",
    youtubeVideoId: "aqz-KE-bpKQ",
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
