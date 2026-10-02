import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkoutGrid from "@/components/WorkoutGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="library"
          className="min-h-[500px] bg-[#111111] px-5 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-black tracking-[0.25em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase text-white sm:text-5xl">
              THE LIBRARY
            </h2>

            <p className="mt-4 text-[#888888]">
              Twelve lifts covering every major muscle group.
            </p>

            <div className="mt-10">
              <WorkoutGrid />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}