import type { Metadata } from "next";
import { Geist, Fredoka } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Colpi — Le jeu de soirée",
  description: "Colpi, les meilleurs jeux de soirée dans une seule app. Le Million mais…, La Def, Le Casting, Le Juste Nombre et bien d'autres.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${fredoka.variable} h-full`}>
      <body className="min-h-full grain-overlay">{children}</body>
    </html>
  );
}
