"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--surface)] shadow-lg border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-heading font-semibold text-[var(--text)]">
          EthioTravel
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-[var(--text)] font-medium">
          <Link href="/">Home</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="btn">Explore</button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[var(--text)]"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--surface)] border-t border-[var(--border)] p-5 space-y-4 text-[var(--text)]">
          <Link href="/" className="block">Home</Link>
          <Link href="/destinations" className="block">
            Destinations
          </Link>
          <Link href="/packages" className="block">Packages</Link>
          <Link href="/blog" className="block">Blog</Link>
          <Link href="/contact" className="block">Contact</Link>

          <button className="btn w-full mt-4">Explore</button>
        </div>
      )}
    </nav>
  );
}
