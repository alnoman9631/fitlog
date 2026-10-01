import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#181818] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/50"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Muscle groups */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#ccff00] backdrop-blur-sm"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Difficulty */}
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase text-black">
            {workout.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-black uppercase leading-tight text-white transition group-hover:text-[#ccff00]">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-[#888888]">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
          <div className="flex items-center gap-2">
            <Clock3 size={15} className="text-[#ccff00]" />
            <div>
              <p className="text-[9px] uppercase text-[#666666]">Time</p>
              <p className="text-xs font-bold text-white">
                {workout.duration} min
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Flame size={15} className="text-[#ccff00]" />
            <div>
              <p className="text-[9px] uppercase text-[#666666]">Calories</p>
              <p className="text-xs font-bold text-white">
                {workout.caloriesBurned}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Star size={15} className="fill-[#ccff00] text-[#ccff00]" />
            <div>
              <p className="text-[9px] uppercase text-[#666666]">Rating</p>
              <p className="text-xs font-bold text-white">
                {workout.rating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}