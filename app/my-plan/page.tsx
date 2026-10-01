"use client";

import Link from "next/link";
import { Clock3, Flame, Dumbbell } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useFitLog } from "@/context/FitLogContext";

export default function MyPlanPage() {
  const { plan, saved } = useFitLog();

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#111111] px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black tracking-[0.25em] text-[#ccff00]">
            YOUR TRAINING
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase text-white sm:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-4 max-w-xl text-[#888888]">
            Build your daily workout plan and keep your saved exercises in one
            place.
          </p>

          {/* Metrics */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#181818] p-6">
              <Dumbbell size={20} className="text-[#ccff00]" />

              <p className="mt-4 text-xs font-bold uppercase text-[#666666]">
                Exercises
              </p>

              <p className="mt-1 text-3xl font-black text-white">
                {plan.length}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#181818] p-6">
              <Clock3 size={20} className="text-[#ccff00]" />

              <p className="mt-4 text-xs font-bold uppercase text-[#666666]">
                Minutes
              </p>

              <p className="mt-1 text-3xl font-black text-white">
                {totalMinutes}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#181818] p-6">
              <Flame size={20} className="text-[#ccff00]" />

              <p className="mt-4 text-xs font-bold uppercase text-[#666666]">
                Calories
              </p>

              <p className="mt-1 text-3xl font-black text-white">
                {totalCalories}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-12 flex gap-3 border-b border-white/10 pb-4">
            <button
              type="button"
              className="rounded-full bg-[#ccff00] px-5 py-2 text-xs font-black text-black"
            >
              TODAY'S PLAN
            </button>

            <button
              type="button"
              className="rounded-full border border-white/15 px-5 py-2 text-xs font-black text-white"
            >
              SAVED
            </button>
          </div>

          {/* Plan */}
          <section className="mt-8">
            {plan.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/10 px-6 py-20 text-center">
                <p className="text-2xl font-black uppercase text-white">
                  NOTHING HERE YET
                </p>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#777777]">
                  Add workouts from the library to build your plan for today.
                </p>

                <Link
                  href="/#library"
                  className="mt-7 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black text-black transition hover:bg-[#d9ff4d]"
                >
                  BROWSE WORKOUTS
                </Link>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {plan.map((workout) => (
                  <div
                    key={workout.id}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-[#181818]"
                  >
                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="h-52 w-full object-cover"
                    />

                    <div className="p-5">
                      <h2 className="text-xl font-black uppercase text-white">
                        {workout.name}
                      </h2>

                      <p className="mt-2 text-sm text-[#777777]">
                        {workout.equipment}
                      </p>

                      <div className="mt-5 flex gap-4 text-xs font-bold text-[#999999]">
                        <span>{workout.duration} min</span>
                        <span>{workout.caloriesBurned} cal</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Saved count for now */}
          <p className="mt-8 text-sm text-[#666666]">
            Saved workouts: {saved.length}
          </p>
        </div>
      </main>
    </>
  );
}