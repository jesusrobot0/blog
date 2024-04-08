import type { Metadata } from "next";
import { primaryFont } from "@/config/fonts";
import { Navigation } from "@/components/ui";
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
      <body className={primaryFont.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
