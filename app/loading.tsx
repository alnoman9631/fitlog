export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#111111] px-5">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[#ccff00]" />

        <p className="mt-5 text-sm font-bold text-[#888888]">
          Loading FitLog…
        </p>
      </div>
    </main>
  );
}