import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-[#093965]/10 text-[#093965] mx-auto flex items-center justify-center font-mono font-black text-3xl">
        404
      </div>

      <h1 className="text-3xl sm:text-4xl font-black text-[#093965]">
        Page Not Found
      </h1>

      <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
        The page you are looking for might have been moved, removed, or is temporarily unavailable.
      </p>

      <div className="pt-4 flex items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#093965] hover:bg-[#062644] text-white text-sm font-bold shadow-md transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#093965] text-sm font-bold transition-all"
        >
          <span>Explore Services</span>
        </Link>
      </div>
    </div>
  );
}
