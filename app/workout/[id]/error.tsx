"use client";

import Link from "next/link";
import { RefreshCw, ArrowLeft } from "lucide-react";

export default function WorkoutError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#111111] px-5">
      <div className="w-full max-w-xl text-center">
        <p className="text-xs font-black tracking-[0.3em] text-[#ccff00]">
          FITLOG ERROR
        </p>

        <h1 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">
          UNABLE TO LOAD WORKOUT
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#777777]">
          Something went wrong while loading this workout. Please try again.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ccff00] px-6 py-3.5 text-xs font-black text-black transition hover:bg-[#d9ff4d]"
          >
            <RefreshCw size={16} />
            TRY AGAIN
          </button>

          <Link
            href="/#library"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-xs font-black text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
          >
            <ArrowLeft size={16} />
            BACK TO LIBRARY
          </Link>
        </div>
      </div>
    </main>
  );
}