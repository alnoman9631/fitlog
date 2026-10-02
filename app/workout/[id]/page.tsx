import Link from "next/link";
import {
  ArrowLeft,
  Clock3,
  Flame,
  Star,
  Dumbbell,
  Target,
  Repeat,
} from "lucide-react";
import { getWorkoutById } from "@/lib/api";
import Navbar from "@/components/Navbar";
import WorkoutActions from "@/components/WorkoutActions";
import Footer from "@/components/Footer";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#111111] px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Back button */}
          <Link
            href="/#library"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-5 py-2.5 text-xs font-black text-black transition hover:bg-[#d9ff4d]"
          >
            <ArrowLeft size={16} />
            BACK TO LIBRARY
          </Link>

          {/* Main content */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Image */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#181818]">
              <img
                src={workout.image}
                alt={workout.name}
                className="h-[420px] w-full object-cover sm:h-[550px]"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              {/* Muscle groups */}
              <div className="flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase text-black"
                  >
                    {muscle}
                  </span>
                ))}

                <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-black uppercase text-white">
                  {workout.difficulty}
                </span>
              </div>

              {/* Title */}
              <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                {workout.name}
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#999999]">
                {workout.description}
              </p>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {/* Duration */}
                <div className="rounded-xl border border-white/10 bg-[#181818] p-4">
                  <Clock3 size={18} className="text-[#ccff00]" />

                  <p className="mt-3 text-[10px] font-bold uppercase text-[#666666]">
                    Duration
                  </p>

                  <p className="mt-1 font-black text-white">
                    {workout.duration} min
                  </p>
                </div>

                {/* Calories */}
                <div className="rounded-xl border border-white/10 bg-[#181818] p-4">
                  <Flame size={18} className="text-[#ccff00]" />

                  <p className="mt-3 text-[10px] font-bold uppercase text-[#666666]">
                    Calories
                  </p>

                  <p className="mt-1 font-black text-white">
                    {workout.caloriesBurned}
                  </p>
                </div>

                {/* Sets */}
                <div className="rounded-xl border border-white/10 bg-[#181818] p-4">
                  <Repeat size={18} className="text-[#ccff00]" />

                  <p className="mt-3 text-[10px] font-bold uppercase text-[#666666]">
                    Sets
                  </p>

                  <p className="mt-1 font-black text-white">
                    {workout.sets}
                  </p>
                </div>

                {/* Rating */}
                <div className="rounded-xl border border-white/10 bg-[#181818] p-4">
                  <Star
                    size={18}
                    className="fill-[#ccff00] text-[#ccff00]"
                  />

                  <p className="mt-3 text-[10px] font-bold uppercase text-[#666666]">
                    Rating
                  </p>

                  <p className="mt-1 font-black text-white">
                    {workout.rating}
                  </p>
                </div>
              </div>

              {/* Specifications */}
              <div className="mt-8 grid gap-4 border-y border-white/10 py-6 sm:grid-cols-2">
                {/* Equipment */}
                <div className="flex items-center gap-3">
                  <Dumbbell size={18} className="text-[#ccff00]" />

                  <div>
                    <p className="text-[10px] font-bold uppercase text-[#666666]">
                      Equipment
                    </p>

                    <p className="text-sm font-bold text-white">
                      {workout.equipment}
                    </p>
                  </div>
                </div>

                {/* Reps */}
                <div className="flex items-center gap-3">
                  <Target size={18} className="text-[#ccff00]" />

                  <div>
                    <p className="text-[10px] font-bold uppercase text-[#666666]">
                      Reps
                    </p>

                    <p className="text-sm font-bold text-white">
                      {workout.reps}
                    </p>
                  </div>
                </div>
              </div>

              {/* Plan and Save actions */}
              <WorkoutActions workout={workout} />
            </div>
          </div>

          {/* Instructions */}
          <section className="mt-16 border-t border-white/10 pt-12">
            <p className="text-xs font-black tracking-[0.25em] text-[#ccff00]">
              HOW TO PERFORM
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
              INSTRUCTIONS
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {workout.instructions.map((instruction, index) => (
                <div
                  key={instruction}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-[#181818] p-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-sm font-black text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-1 text-sm leading-6 text-[#aaaaaa]">
                    {instruction}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}