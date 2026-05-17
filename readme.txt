# Portfolio Attrice Pro

Portfolio professionale in React + TypeScript pensato per attrici emergenti, con UX curata, design moderno, supporto tema chiaro/scuro, galleria fotografica, showreel e form contatti pronto per Netlify Forms.

## Stack

- React + TypeScript + Vite
- Tailwind CSS (theme custom, non-default)
- React Router (routing multi pagina)
- Framer Motion (transizioni fluide)
- Yet Another React Lightbox (galleria immagini)
- React Helmet Async (meta e SEO base)
- Netlify (deploy gratuito)

## Avvio Locale

1. Installa Node.js LTS (consigliato 20+).
1. Installa dipendenze:

```bash
npm install
```

1. Avvia il dev server:

```bash
npm run dev
```

1. Build produzione:

```bash
npm run build
```

## Struttura Contenuti

Aggiorna i contenuti centralmente in src/data/content.ts:

- Bio e anagrafica
- Link social
- Showreel e video YouTube (solo ID video)
- Immagini hero e galleria
- Timeline CV

## Asset Multimediali

Carica le immagini in:

- public/assets/images/hero/
- public/assets/images/gallery/

Formato consigliato: .webp.

## Video YouTube Privati

Usa link YouTube con visibilita "non in elenco" e inserisci nel file dati solo youtubeVideoId.
I video vengono incorporati internamente (iframe su youtube-nocookie) quindi l'utente resta sul sito.

## Form Contatti (Netlify Forms)

La pagina contatti e gia configurata con:

- data-netlify="true"
- campo hidden form-name
- honeypot anti-spam

Su Netlify, i messaggi appariranno nel pannello Forms dopo il primo deploy.

## Deploy GitHub -> Netlify

1. Push su GitHub.
2. In Netlify: "Add new site" -> "Import an existing project".
3. Seleziona repository e conferma:
   - Build command: npm run build
   - Publish directory: dist
4. Deploy.

Il progetto include gia:

- netlify.toml con security headers base
- public/_redirects per SPA routing

## Accessibilita e Performance

- Tag semantici e alt text su immagini
- Lazy loading immagini e chunk splitting tramite route lazy
- Theme toggle persistente con localStorage
- Layout ottimizzato mobile-first
