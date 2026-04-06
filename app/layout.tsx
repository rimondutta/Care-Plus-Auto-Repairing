import type { Metadata } from "next";
import { Bai_Jamjuree, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Care Plus Auto Repairing | Car Repair and Maintenance",
  description: "Best automobile maintenance workshop providing all types of car repair and maintenance services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baiJamjuree.variable} ${montserrat.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body 
        className="min-h-full flex flex-col bg-[#110E10] text-[#DEDEDE]"
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
