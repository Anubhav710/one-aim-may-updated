import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import TopDown from "@/components/TopDown";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className={`font-poppins overflow-x-clip antialiased bg-gradient-to-b from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE]`}
        suppressHydrationWarning
      >
        {children}
        <TopDown />
      </body>
    </html>
  );
}
