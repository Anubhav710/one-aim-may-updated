import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopDown from "@/components/TopDown";
import { LanguageProvider } from "@/contexts/LanguageContext";

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
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body
        className={`font-poppins overflow-x-clip antialiased bg-gradient-to-b from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE]`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
          <TopDown />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
