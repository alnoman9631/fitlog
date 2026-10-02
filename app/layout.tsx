import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { FitLogProvider } from "@/context/FitLogContext";

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          {children}

          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 2500,
              style: {
                background: "#181818",
                color: "#ffffff",
                border: "1px solid #333333",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "600",
              },
              success: {
                iconTheme: {
                  primary: "#ccff00",
                  secondary: "#111111",
                },
              },
            }}
          />
        </FitLogProvider>
      </body>
    </html>
  );
}