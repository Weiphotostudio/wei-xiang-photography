import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Weixiang Photography",
  description: "High fashion photography studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="min-h-full flex flex-col bg-[#f8f5f0] text-[#2b2b2b] antialiased font-serif">
        {children}
      </body>
    </html>
  );
}