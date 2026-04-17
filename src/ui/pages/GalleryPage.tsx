import { Helmet } from "react-helmet-async";
import { galleryImages, profile } from "../../data/content";
import { ImageGrid } from "../components/ImageGrid";
import { SectionIntro } from "../components/SectionIntro";

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>{`Galleria | ${profile.stageName}`}</title>
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-6 sm:px-6 sm:pt-10">
        <SectionIntro
          eyebrow="Fotografia"
          title="Galleria professionale"
          description="Una selezione di immagini pensata per casting, agenzie e direzione artistica."
        />
        <div className="section-shell shadow-soft">
          <ImageGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
