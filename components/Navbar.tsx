"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const { plan, saved } = useFitLog();

  const isWorkoutPage =
    pathname === "/" || pathname.startsWith("/workout/");

  const isMyPlanPage = pathname.startsWith("/my-plan");

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
            className={`text-sm font-semibold transition ${
              isWorkoutPage
                ? "text-[#ccff00]"
                : "text-white hover:text-[#ccff00]"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-semibold transition ${
              isMyPlanPage
                ? "text-[#ccff00]"
                : "text-white hover:text-[#ccff00]"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/my-plan"
            className="bg-[#ccff00] px-5 py-2.5 text-xs font-black !text-black rounded-full transition hover:bg-[#d9ff4d]"
            style={{
              color: "#000000",
              backgroundColor: "#ccff00",
            }}
          >
            PLAN {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="bg-[#ccff00] px-5 py-2.5 text-xs font-black !text-black rounded-full transition hover:bg-[#d9ff4d]"
            style={{
              color: "#000000",
              backgroundColor: "#ccff00",
            }}
          >
            SAVED {saved.length}
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-2 text-[10px] font-black !text-black"
            style={{
              color: "#000000",
              backgroundColor: "#ccff00",
            }}
          >
            PLAN {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-2 text-[10px] font-black !text-black"
            style={{
              color: "#000000",
              backgroundColor: "#ccff00",
            }}
          >
            SAVED {saved.length}
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
              className={`text-sm font-semibold transition ${
                isWorkoutPage
                  ? "text-[#ccff00]"
                  : "text-white hover:text-[#ccff00]"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold transition ${
                isMyPlanPage
                  ? "text-[#ccff00]"
                  : "text-white hover:text-[#ccff00]"
              }`}
            >
              My Plan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}