import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Industries from "./pages/Industries";
import WhyStaffClicks from "./pages/WhyStaffClicks";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [modalService, setModalService] = useState("");

  const handleOpenConsultation = (serviceName = "") => {
    setModalService(serviceName || "");
    setIsConsultationOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 selection:bg-[#FA7D3C]/20 selection:text-[#093965]">
        {/* Navigation */}
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/about" element={<About onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services" element={<Services onOpenConsultation={handleOpenConsultation} />} />
            
            {/* Dynamic Service Routes */}
            <Route path="/services/:slug" element={<ServiceDetail onOpenConsultation={handleOpenConsultation} />} />

            <Route path="/industries" element={<Industries onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/why-staff-clicks" element={<WhyStaffClicks onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/why-us" element={<Navigate to="/why-staff-clicks" replace />} />
            
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ onOpenConsultation={handleOpenConsultation} />} />
            
            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenConsultation={() => handleOpenConsultation()} />

        {/* Global Free Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          prefilledService={modalService}
        />

        {/* Floating Actions */}
        <FloatingWhatsApp />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}
