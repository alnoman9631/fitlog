"use client";

import Link from "next/link";
import {
  Check,
  Clock3,
  Dumbbell,
  Flame,
  X,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";
import { useFitLog } from "@/context/FitLogContext";
import Footer from "@/components/Footer";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeSaved,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [completed, setCompleted] = useState<number[]>([]);

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const activeWorkouts =
    activeTab === "plan" ? plan : saved;

  function handleMarkAsDone(id: number) {
    const isAlreadyCompleted = completed.includes(id);

    if (isAlreadyCompleted) {
      setCompleted((current) =>
        current.filter((item) => item !== id)
      );

      toast("Workout marked as not done");
      return;
    }

    setCompleted((current) => [...current, id]);

    toast.success("Workout marked as done");
  }

  function handleRemove(id: number) {
    if (activeTab === "plan") {
      removeFromPlan(id);
      toast.success("Workout removed from today's plan");
    } else {
      removeSaved(id);
      toast.success("Workout removed from saved");
    }

    setCompleted((current) =>
      current.filter((item) => item !== id)
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#111111] px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
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
              onClick={() => setActiveTab("plan")}
              className={`rounded-full px-5 py-2 text-xs font-black transition ${activeTab === "plan"
                ? "bg-[#ccff00] text-black"
                : "border border-white/15 text-white hover:border-[#ccff00] hover:text-[#ccff00]"
                }`}
            >
              TODAY'S PLAN
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-full px-5 py-2 text-xs font-black transition ${activeTab === "saved"
                ? "bg-[#ccff00] text-black"
                : "border border-white/15 text-white hover:border-[#ccff00] hover:text-[#ccff00]"
                }`}
            >
              SAVED
            </button>
          </div>

          {/* Content */}
          <section className="mt-8">
            {activeWorkouts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/10 px-6 py-20 text-center">
                <p className="text-2xl font-black uppercase text-white">
                  NOTHING HERE YET
                </p>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#777777]">
                  {activeTab === "plan"
                    ? "Add workouts from the library to build your plan for today."
                    : "Save workouts from the library to keep them here for later."}
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
                {activeWorkouts.map((workout) => {
                  const isCompleted = completed.includes(workout.id);

                  return (
                    <div
                      key={workout.id}
                      className={`overflow-hidden rounded-2xl border bg-[#181818] transition ${isCompleted
                        ? "border-[#ccff00]/50 opacity-70"
                        : "border-white/10 hover:border-[#ccff00]/40"
                        }`}
                    >
                      {/* Image */}
                      <Link href={`/workout/${workout.id}`}>
                        <img
                          src={workout.image}
                          alt={workout.name}
                          className={`h-52 w-full object-cover transition duration-300 hover:scale-[1.02] ${isCompleted ? "grayscale" : ""
                            }`}
                        />
                      </Link>

                      <div className="p-5">
                        <Link href={`/workout/${workout.id}`}>
                          <h2
                            className={`text-xl font-black uppercase transition hover:text-[#ccff00] ${isCompleted
                              ? "text-[#777777] line-through"
                              : "text-white"
                              }`}
                          >
                            {workout.name}
                          </h2>
                        </Link>

                        <p className="mt-2 text-sm text-[#777777]">
                          {workout.equipment}
                        </p>

                        <div className="mt-5 flex gap-4 text-xs font-bold text-[#999999]">
                          <span>{workout.duration} min</span>
                          <span>{workout.caloriesBurned} cal</span>
                          <span>{workout.rating} ★</span>
                        </div>

                        {/* Actions */}
                        <div className="mt-5 flex gap-2">
                          <Link
                            href={`/workout/${workout.id}`}
                            className="flex-1 rounded-full border border-white/15 px-3 py-2.5 text-center text-[10px] font-black text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
                          >
                            VIEW DETAILS
                          </Link>

                          {activeTab === "plan" && (
                            <button
                              type="button"
                              onClick={() =>
                                handleMarkAsDone(workout.id)
                              }
                              className={`rounded-full px-3 py-2.5 text-[10px] font-black transition ${isCompleted
                                ? "bg-[#ccff00] text-black"
                                : "border border-[#ccff00] text-[#ccff00] hover:bg-[#ccff00] hover:text-black"
                                }`}
                              title={
                                isCompleted
                                  ? "Mark as not done"
                                  : "Mark as done"
                              }
                            >
                              <Check size={14} />
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() =>
                              handleRemove(workout.id)
                            }
                            className="rounded-full border border-red-500/30 px-3 py-2.5 text-red-400 transition hover:bg-red-500 hover:text-white"
                            title="Remove"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}