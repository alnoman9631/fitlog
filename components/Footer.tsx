import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-white"
        >
          FIT<span className="text-[#ccff00]">LOG</span>
        </Link>

        <p className="text-sm text-[#666666]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

        <div className="flex gap-5 text-xs font-bold text-[#777777]">
          <Link
            href="/"
            className="transition hover:text-[#ccff00]"
          >
            WORKOUT
          </Link>

          <Link
            href="/my-plan"
            className="transition hover:text-[#ccff00]"
          >
            MY PLAN
          </Link>
        </div>
      </div>
    </footer>
  );
}