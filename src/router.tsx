import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./ui/layout/MainLayout";

const HomePage = lazy(() => import("./ui/pages/HomePage"));
const GalleryPage = lazy(() => import("./ui/pages/GalleryPage"));
const VideosPage = lazy(() => import("./ui/pages/VideosPage"));
const AboutPage = lazy(() => import("./ui/pages/AboutPage"));
const ContactPage = lazy(() => import("./ui/pages/ContactPage"));
const NotFoundPage = lazy(() => import("./ui/pages/NotFoundPage"));

function RouteLoader() {
  return (
    <div className="mx-auto flex min-h-[40vh] w-full max-w-6xl items-center justify-center px-4">
      <div className="glass rounded-full px-6 py-3 text-sm font-semibold tracking-wide text-[color:var(--text-muted)]">
        Caricamento in corso...
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<RouteLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "galleria",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <GalleryPage />
          </Suspense>
        ),
      },
      {
        path: "video",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <VideosPage />
          </Suspense>
        ),
      },
      {
        path: "profilo",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "contatti",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);
