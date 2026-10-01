"use client";

import { useEffect, useState } from "react";
import { getWorkouts } from "@/lib/api";
import type { Workout } from "@/types/workout";
import WorkoutCard from "@/components/WorkoutCard";

export default function WorkoutGrid() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch {
        setError("Unable to load workouts.");
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  if (loading) {
    return (
      <div className="grid min-h-[300px] place-items-center">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-[#ccff00]" />

          <p className="mt-5 text-sm font-semibold text-[#888888]">
            Loading workouts…
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 px-6 py-12 text-center">
        <p className="text-sm font-semibold text-red-400">{error}</p>
      </div>
    );
  }

  if (workouts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/10 px-6 py-16 text-center">
        <p className="text-lg font-black uppercase text-white">
          No workouts available
        </p>

        <p className="mt-2 text-sm text-[#666666]">
          The workout API currently returned no exercises.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}