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
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors duration-200 py-2 ${
      isActive
        ? "text-[#FA7D3C]"
        : "text-slate-700 hover:text-[#093965]"
    }`;

  return (
    <>
      {/* Top micro bar for phone & service markets */}
      <header className="w-full bg-[#062644] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Active Support Markets:
            </span>
            <span className="text-slate-300 flex items-center gap-1">
              <span className="font-semibold text-white">India</span> (Ajmer Hub)
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">
              <span className="font-semibold text-white">USA</span>
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">
              <span className="font-semibold text-white">Canada</span>
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:+918302648461"
              className="flex items-center gap-1.5 font-bold text-white hover:text-[#FA7D3C] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FA7D3C]" />
              <span>+91 83026 48461</span>
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
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                All Services
              </NavLink>

              {/* Service Submenu items */}
              <div className="pl-4 py-1 space-y-1 border-l-2 border-[#2E8D9F]/30 ml-2">
                {SERVICES.map((srv) => (
                  <Link
                    key={srv.id}
                    to={`/services/${srv.slug}`}
                    className="block py-1 text-xs text-slate-600 hover:text-[#093965]"
                  >
                    • {srv.title}
                  </Link>
                ))}
              </div>

              <NavLink
                to="/industries"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Industries
              </NavLink>
              <NavLink
                to="/why-staff-clicks"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Why Staff Clicks
              </NavLink>
              <NavLink
                to="/careers"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Careers
              </NavLink>
              <NavLink
                to="/faq"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                FAQ
              </NavLink>
              <NavLink
                to="/contact"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Contact Us
              </NavLink>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href="tel:+918302648461"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-[#093965]"
              >
                <PhoneCall className="w-4 h-4 text-[#FA7D3C]" />
                Call +91 83026 48461
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-xl bg-[#FA7D3C] text-white text-sm font-bold shadow-md hover:bg-[#e66b2a] transition-colors cursor-pointer"
              >
                Get a Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
