import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "CityAlert Goma",
  description:
    "Plateforme communautaire de signalement d'incidents en temps réel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
      <Analytics />
    </html>
  );
}
