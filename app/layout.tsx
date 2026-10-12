import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({ subsets: ["latin", "latin-ext"], variable: "--font-display", weight: ["500", "600", "700", "800", "900"] });
const body = DM_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-body", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Atakan Batur | Sim Racing, Rock & Roll",
  description: "Push N Box Racing sürücüsü, müzisyen ve gitarist Atakan Batur'un yarış ve müzik dünyasına hoş geldin.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}