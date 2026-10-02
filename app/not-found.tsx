import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#111111] px-5">
            <div className="w-full max-w-xl text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ccff00] text-black">
                    <Dumbbell size={30} />
                </div>

                <p className="mt-8 text-xs font-black tracking-[0.3em] text-[#ccff00]">
                    FITLOG ERROR
                </p>

                <h1 className="mt-4 text-7xl font-black text-white sm:text-8xl">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-black uppercase text-white">
                    WORKOUT NOT FOUND
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#777777]">
                    The page you&apos;re looking for doesn&apos;t exist or may have been
                    moved. Let&apos;s get you back to the workout library.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-6 py-3.5 text-xs font-black !text-black transition hover:bg-[#d9ff4d]"
                    style={{
                        color: "#000000",
                        backgroundColor: "#ccff00",
                    }}
                >
                    <ArrowLeft size={16} />
                    BACK TO WORKOUTS
                </Link>
            </div>
        </main>
    );
}