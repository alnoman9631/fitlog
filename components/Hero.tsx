import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-black tracking-[0.25em] text-[#ccff00] sm:text-sm">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            <span className="text-[#ccff00]">LOG EVERY SET.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#999999] sm:text-lg">
            Build stronger habits with a focused workout library. Choose your
            lifts, track every session, and stay consistent with your training.
          </p>

          <Link
            href="#library"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-3.5 text-sm font-black !text-black transition hover:scale-105 hover:bg-[#d9ff4d]"
            style={{
              color: "#000000",
              backgroundColor: "#ccff00",
            }}
          >
            BROWSE WORKOUTS
            <ArrowDownRight size={18} />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -inset-4 rounded-3xl bg-[#ccff00]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1a1a1a]">
            <img
              src="https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740"
              alt="Workout training"
              className="h-[420px] w-full object-cover sm:h-[500px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#ccff00]">
                  TRAIN HARD
                </p>

                <p className="mt-1 text-xl font-black text-white">
                  STAY CONSISTENT
                </p>
              </div>

              <div className="rounded-full bg-[#ccff00] px-3 py-2 text-xs font-black text-black">
                FITLOG
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}