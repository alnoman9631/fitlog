"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-white sm:text-2xl"
        >
          FIT<span className="text-[#ccff00]">LOG</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-white transition hover:text-[#ccff00]"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="text-sm font-semibold text-white transition hover:text-[#ccff00]"
          >
            My Plan
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black text-black transition hover:bg-[#d9ff4d]"
          >
            PLAN 0
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-[#ccff00] px-4 py-2 text-xs font-black text-[#ccff00] transition hover:bg-[#ccff00] hover:text-black"
          >
            SAVED 0
          </Link>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-2 text-[10px] font-black text-black"
          >
            PLAN 0
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg border border-white/15 p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#111111] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold text-white hover:text-[#ccff00]"
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold text-white hover:text-[#ccff00]"
            >
              My Plan
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold text-[#ccff00]"
            >
              Saved Workouts
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}