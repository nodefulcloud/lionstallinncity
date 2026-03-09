import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import JoinPage from "./pages/ToetaPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import MaksePuudub from "./pages/MaksePuudub";
import ToetaAitah from "./pages/ToetaAitah";
import Kinkekaart from "./pages/Kinkekaart";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = 1000 - elapsed; // enforce minimum 1 second
      if (remaining > 0) {
        setTimeout(() => setLoading(false), remaining);
      } else {
        setLoading(false);
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
        </div>
      )}

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/meist" element={<AboutPage />} />
              <Route path="/projektid" element={<ProjectsPage />} />
              <Route path="/kinkekaart" element={<Kinkekaart />} />
              <Route path="/toetused" element={<JoinPage />} />
              <Route path="/toetused/aitah" element={<ToetaAitah />} />
              <Route path="/toetused/maksepuudub" element={<MaksePuudub />} />
              <Route path="/uudised" element={<NewsPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;