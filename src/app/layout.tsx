import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { primaryFont } from "@/config/fonts";
import { Navbar } from "@/ui/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jesús Velasco",
  description: "lorem ipsum dolor sit amet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${primaryFont.className} text-[#121212]`}>
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
