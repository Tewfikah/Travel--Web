"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/20 text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-[var(--accent-yellow)]">Ethio</span>Travel
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 text-lg">
          <a href="#" className="hover:text-[var(--accent-yellow)] transition">Home</a>
          <a href="#" className="hover:text-[var(--accent-yellow)] transition">Destinations</a>
          <a href="#" className="hover:text-[var(--accent-yellow)] transition">Trips</a>
          <a href="#" className="hover:text-[var(--accent-yellow)] transition">Contact</a>
        </div>

        {/* PROFILE */}
        <div className="hidden md:flex items-center">
          <button className="px-5 py-2 rounded-lg bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] transition text-sm font-semibold">
            Login
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden p-2 rounded-lg bg-white/10"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-4">
          <a className="block py-2 hover:text-[var(--accent-yellow)]">Home</a>
          <a className="block py-2 hover:text-[var(--accent-yellow)]">Destinations</a>
          <a className="block py-2 hover:text-[var(--accent-yellow)]">Trips</a>
          <a className="block py-2 hover:text-[var(--accent-yellow)]">Contact</a>

          <button className="w-full mt-3 py-2 bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] rounded-lg font-semibold">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
