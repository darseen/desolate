import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DESOLATE",
  description: "N/A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <div className="fixed right-[11rem] top-[-6rem] -z-10 h-20 w-[68.75rem] rounded-full bg-zinc-500 blur-[10rem]" />
        <div className="fixed left-[-35rem] top-[-1rem] -z-10 h-20 w-[68.75rem] rounded-full bg-[#2b2a2a] blur-[10rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
        <Header />
        {children}
      </body>
    </html>
  );
}
