import "./globals.css";
import type { Metadata } from "next";

// components
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// fonts
import { Urbanist } from "next/font/google";
const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hermes shop",
  description: "stor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} bg-[#ece2d0] w-full min-h-[100dvh]`}>
        <Navbar />
        <main className="lg:w-[70%] sm:w-[90%] mx-auto rounded-3xl mt-2 shadow-2xl flex justify-center items-center flex-col gap-y-3 relative">
          {children}
        </main>
        <Footer />
        <div className="w-full h-[1rem]"></div>
      </body>
    </html>
  );
}
