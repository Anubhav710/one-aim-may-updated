import Header from "@/components/Header";
import React from "react";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${poppins.variable}`}>
      <Header />
      {children}
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default RootLayout;
