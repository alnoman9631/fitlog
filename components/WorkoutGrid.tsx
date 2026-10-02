"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { getWorkouts } from "@/lib/api";
import type { Workout } from "@/types/workout";
import WorkoutCard from "@/components/WorkoutCard";

type SortOption = "duration" | "calories" | "rating";

export default function WorkoutGrid() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("duration");

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

  const sortedWorkouts = useMemo(() => {
    const sorted = [...workouts];

    if (sortBy === "duration") {
      sorted.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      sorted.sort(
        (a, b) => a.caloriesBurned - b.caloriesBurned
      );
    }

    if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted;
  }, [workouts, sortBy]);

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
        <p className="text-sm font-semibold text-red-400">
          {error}
        </p>
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
    <div>
      {/* Sort Controls */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-bold text-[#777777]">
          {sortedWorkouts.length} WORKOUTS
        </p>

        <div className="flex items-center gap-3">
          <label
            htmlFor="sort-workouts"
            className="text-xs font-black uppercase tracking-wide text-[#777777]"
          >
            Sort By
          </label>

          <div className="relative">
            <select
              id="sort-workouts"
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value as SortOption)
              }
              className="appearance-none rounded-full border border-white/15 bg-[#181818] py-2.5 pl-4 pr-10 text-xs font-black uppercase text-white outline-none transition focus:border-[#ccff00]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <ChevronDown
              size={15}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#ccff00]"
            />
          </div>
        </div>
      </div>

      {/* Workout Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </div>
  );
}