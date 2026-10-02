"use client";

import { Check, Heart, Plus } from "lucide-react";
import toast from "react-hot-toast";
import { useFitLog } from "@/context/FitLogContext";
import type { Workout } from "@/types/workout";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useFitLog();

  const alreadyInPlan = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);

  function handleAddToPlan() {
    if (alreadyInPlan) return;

    addToPlan(workout);

    toast.success("Workout added to today's plan");
  }

  function handleSave() {
    if (alreadySaved) return;

    saveWorkout(workout);

    toast.success("Workout saved for later");
  }

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={alreadyInPlan}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-black !text-black transition ${alreadyInPlan
          ? "cursor-not-allowed bg-[#444444]"
          : "bg-[#ccff00] hover:bg-[#d9ff4d]"
          }`}
        style={{
          color: alreadyInPlan ? "#888888" : "#000000",
        }}
      >
        {alreadyInPlan ? <Check size={18} /> : <Plus size={18} />}

        {alreadyInPlan
          ? "ADDED TO TODAY'S PLAN"
          : "ADD TO TODAY'S PLAN"}
      </button>

      <button
        type="button"
        onClick={handleSave}
        disabled={alreadySaved}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-black !text-black transition ${alreadySaved
            ? "cursor-not-allowed bg-[#444444]"
            : "bg-[#ccff00] hover:bg-[#d9ff4d]"
          }`}
        style={{
          color: alreadySaved ? "#888888" : "#000000",
        }}
      >
        <Heart
          size={18}
          className={alreadySaved ? "fill-current" : ""}
        />

        {alreadySaved ? "SAVED" : "SAVE FOR LATER"}
      </button>
    </div>
  );
}