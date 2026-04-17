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
  languages: string[];
  skills: string[];
  email: string;
  phone: string;
  intro: string;
  bio: string[];
  showreelVideoId: string;
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
  stageName: "Sofia Rossi",
  legalName: "Sofia Rossi",
  roleTagline: "Attrice | Performer | Storyteller",
  city: "Roma, Italia",
  languages: ["Italiano (madrelingua)", "Inglese (fluente)", "Spagnolo (base)"],
  skills: [
    "Recitazione teatrale",
    "Recitazione davanti alla camera",
    "Dizione",
    "Danza contemporanea",
    "Canto",
    "Improvvisazione",
  ],
  email: "hello@sofiarossi.com",
  phone: "+39 333 123 4567",
  intro:
    "Una presenza scenica elegante, intensa e autentica. Sofia unisce precisione tecnica e sensibilita emotiva per dare vita a personaggi memorabili.",
  bio: [
    "Sofia e un'attrice emergente con base a Roma, formata tra teatro contemporaneo e camera acting. Il suo percorso artistico nasce dal teatro e si evolve in produzioni indipendenti e audiovisive.",
    "Nel suo lavoro ricerca verita emotiva, ritmo e profondita, con una particolare attenzione ai personaggi femminili complessi e alle storie a forte impatto umano.",
  ],
  showreelVideoId: "dQw4w9WgXcQ",
  portraitImages: [
    {
      src: "/assets/images/hero/portrait-1.webp",
      alt: "Primo piano artistico in luce naturale",
    },
    {
      src: "/assets/images/hero/portrait-2.webp",
      alt: "Ritratto editoriale con look cinematografico",
    },
    {
      src: "/assets/images/hero/portrait-3.webp",
      alt: "Ritratto drammatico in studio",
    },
  ],
  socials: [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "IMDb", url: "https://www.imdb.com" },
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
    id: "ed-1",
    src: "/assets/images/gallery/editoriale-1.webp",
    thumb: "/assets/images/gallery/thumb-editoriale-1.webp",
    alt: "Scatto editoriale in controluce",
    category: "editoriale",
  },
  {
    id: "ed-2",
    src: "/assets/images/gallery/editoriale-2.webp",
    thumb: "/assets/images/gallery/thumb-editoriale-2.webp",
    alt: "Ritratto fashion con tono caldo",
    category: "editoriale",
  },
  {
    id: "sc-1",
    src: "/assets/images/gallery/scene-1.webp",
    thumb: "/assets/images/gallery/thumb-scene-1.webp",
    alt: "Still di una scena drammatica",
    category: "scene",
  },
  {
    id: "sc-2",
    src: "/assets/images/gallery/scene-2.webp",
    thumb: "/assets/images/gallery/thumb-scene-2.webp",
    alt: "Scena in esterna al tramonto",
    category: "scene",
  },
  {
    id: "bs-1",
    src: "/assets/images/gallery/backstage-1.webp",
    thumb: "/assets/images/gallery/thumb-backstage-1.webp",
    alt: "Backstage durante una produzione",
    category: "backstage",
  },
  {
    id: "bs-2",
    src: "/assets/images/gallery/backstage-2.webp",
    thumb: "/assets/images/gallery/thumb-backstage-2.webp",
    alt: "Preparazione sul set",
    category: "backstage",
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
    year: "2025",
    title: "Workshop Camera Acting",
    subtitle: "Studio Professionale Roma",
    details: "Training intensivo su recitazione cinematografica e self tape.",
  },
  {
    year: "2024",
    title: "Cortometraggio Indipendente",
    subtitle: "Ruolo Protagonista",
    details: "Interpretazione del personaggio principale in un progetto drama.",
  },
  {
    year: "2023",
    title: "Accademia Teatrale",
    subtitle: "Percorso Triennale",
    details:
      "Formazione in movimento scenico, voce, improvvisazione e drammaturgia.",
  },
];
