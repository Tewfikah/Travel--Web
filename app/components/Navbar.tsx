"use client";

import Link from "next/link";
import React from "react";

export default function Navbar(): JSX.Element {
  return (
    <header className="site-navbar bg-white/0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[var(--primary)]">EthioTravel</Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-[var(--accent-yellow)]">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-[var(--accent-yellow)]">About</Link>
          <Link href="/trips" className="text-gray-700 hover:text-[var(--accent-yellow)]">Trips</Link>
          <Link href="/contact" className="text-gray-700 hover:text-[var(--accent-yellow)]">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
