import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Somber | Bener Su",
  description: "Academic homepage of Bener Su, an undergraduate researcher in AI, BCI, and healthcare.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
