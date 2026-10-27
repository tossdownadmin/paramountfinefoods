import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paramount Fine Foods | MetrixMate",
  description: "MetrixMate pitch dashboard with simulated data for Paramount Fine Foods.",
  icons: { icon: "/paramount-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
