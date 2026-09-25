import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronDown, 
  PhoneCall, 
  Sparkles, 
  ArrowRight,
  UserCheck, 
  UserSearch, 
  Headphones, 
  Database, 
  Target, 
  Briefcase, 
  Calculator, 
  ShoppingBag, 
  ShieldCheck,
  LucideIcon
} from "lucide-react";
import { SERVICES } from "../data/servicesData";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "virtual-assistance": UserCheck,
  "recruitment": UserSearch,
  "customer-support": Headphones,
  "data-management": Database,
  "lead-generation": Target,
  "administrative-support": Briefcase,
  "accounting-bookkeeping": Calculator,
  "ecommerce-support": ShoppingBag,
  "insurance-support": ShieldCheck,
};

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors duration-200 py-2 ${
      isActive
        ? "text-[#FA7D3C]"
        : "text-slate-700 hover:text-[#093965]"
    }`;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
      isActive
        ? "bg-[#093965] text-white shadow-xs"
        : "text-slate-700 hover:bg-slate-100"
    }`;

  return (
    <>
      {/* Top micro bar for phone & service markets */}
      <header className="w-full bg-[#062644] text-slate-300 text-xs py-2 px-3 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-slate-200 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="hidden xs:inline">Support:</span>
            </span>
            <span className="text-slate-300 shrink-0">
              <strong className="text-white">India</strong> (Ajmer)
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 shrink-0">
              <strong className="text-white">USA</strong>
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 shrink-0">
              <strong className="text-white">Canada</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+918302648461"
              className="flex items-center gap-1.5 font-bold text-white hover:text-[#FA7D3C] transition-colors text-[11px] sm:text-xs whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FA7D3C]" />
              <span className="hidden sm:inline">+91 83026 48461</span>
              <span className="sm:hidden font-extrabold text-[#FA7D3C]">Call Us</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-md py-3 border-b border-slate-200"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group py-1">
            <img 
              src="/logo.png" 
              alt="Staff Clicks - Empowering Teams" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            <NavLink to="/" className={navLinkClasses} end>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClasses}>
              About Us
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center gap-1 text-sm font-semibold transition-colors duration-200 py-2 ${
                    isActive || location.pathname.startsWith("/services")
                      ? "text-[#FA7D3C]"
                      : "text-slate-700 hover:text-[#093965]"
                  }`
                }
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`} />
              </NavLink>

              {/* Mega-menu dropdown */}
              {servicesDropdownOpen && (
                <div className="absolute top-full -left-20 w-[640px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#2E8D9F]">
                          Core Service Ecosystem
                        </span>
                        <h4 className="text-sm font-bold text-[#093965]">
                          Dedicated Remote Business Process Support
                        </h4>
                      </div>
                      <Link
                        to="/services"
                        className="text-xs font-bold text-[#FA7D3C] hover:text-[#e66b2a] flex items-center gap-1"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        All Services <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {SERVICES.map((srv) => {
                        const Icon = SERVICE_ICONS[srv.slug] || Briefcase;
                        return (
                          <Link
                            key={srv.id}
                            to={`/services/${srv.slug}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#093965]/10 text-[#093965] group-hover:bg-[#2E8D9F] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-800 group-hover:text-[#093965]">
                                {srv.title}
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1">
                                {srv.shortTitle || srv.title}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/industries" className={navLinkClasses}>
              Industries
            </NavLink>

            <NavLink to="/why-staff-clicks" className={navLinkClasses}>
              Why Us
            </NavLink>

            <NavLink to="/careers" className={navLinkClasses}>
              Careers
            </NavLink>

            <NavLink to="/faq" className={navLinkClasses}>
              FAQ
            </NavLink>

            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
          </div>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#093965] to-[#2E8D9F] hover:from-[#062644] hover:to-[#226e7d] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <span>Get a Free Consultation</span>
              <Sparkles className="w-4 h-4 ml-2 text-[#FA7D3C] transition-transform group-hover:rotate-12" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#093965] hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-8 space-y-3 shadow-2xl max-h-[calc(100dvh-70px)] overflow-y-auto overscroll-contain animate-in fade-in duration-200">
            <div className="flex flex-col space-y-1">
              <NavLink to="/" className={mobileNavLinkClasses} end>
                <span>Home</span>
              </NavLink>

              <NavLink to="/about" className={mobileNavLinkClasses}>
                <span>About Us</span>
              </NavLink>

              {/* Collapsible Mobile Services Section */}
              <div className="rounded-xl overflow-hidden bg-slate-50/70 border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <NavLink
                    to="/services"
                    className="flex-1 px-3.5 py-2.5 text-sm font-bold text-slate-700 hover:text-[#093965]"
                  >
                    Services Overview
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="px-3 py-2.5 text-slate-500 hover:text-[#093965] cursor-pointer"
                    aria-label="Toggle services list"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180 text-[#FA7D3C]" : ""
                    }`} />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="px-3 pb-3 pt-1 space-y-1 border-t border-slate-200/60 bg-white">
                    {SERVICES.map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/services/${srv.slug}`}
                        className="block px-2.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-[#093965] hover:bg-slate-50 transition-colors"
                      >
                        • {srv.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink to="/industries" className={mobileNavLinkClasses}>
                <span>Industries</span>
              </NavLink>

              <NavLink to="/why-staff-clicks" className={mobileNavLinkClasses}>
                <span>Why Staff Clicks</span>
              </NavLink>

              <NavLink to="/careers" className={mobileNavLinkClasses}>
                <span>Careers</span>
              </NavLink>

              <NavLink to="/faq" className={mobileNavLinkClasses}>
                <span>FAQ</span>
              </NavLink>

              <NavLink to="/contact" className={mobileNavLinkClasses}>
                <span>Contact Us</span>
              </NavLink>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <a
                href="tel:+918302648461"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-sm font-bold text-[#093965] bg-slate-50/80 hover:bg-slate-100 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#FA7D3C]" />
                <span>Call +91 83026 48461</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#093965] to-[#2E8D9F] text-white text-sm font-bold shadow-md hover:opacity-95 transition-opacity cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Get a Free Consultation</span>
                <Sparkles className="w-4 h-4 text-[#FA7D3C]" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
