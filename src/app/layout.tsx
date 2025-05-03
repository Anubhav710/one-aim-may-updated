import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopDown from "@/components/TopDown";
import { LanguageProvider } from "@/contexts/LanguageContext";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "One Aim E-Learning",
  description:
    "One Aim E-Learning platform offers quality education with courses for all skill levels. Learn at your own pace with our expert-led curriculum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body
        className={`font-poppins antialiased bg-gradient-to-b from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE]`}
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
