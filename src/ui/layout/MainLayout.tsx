import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export function MainLayout() {
  const location = useLocation();

  return (
    <div className="ambient min-h-screen">
      <NavBar />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
