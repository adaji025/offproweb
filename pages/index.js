import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Home/Hero";
import IntroPro from "@/components/Home/IntroPro";
import TransactionSteps from "@/components/Home/TransactionSteps";
import Connect from "@/components/Home/Connect";
import Faq from "@/components/Home/Faq";
import Download from "@/components/Home/Download";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div
        className={`min-h-screen w-full flex items-center mt-[100px] bg-[#FBFBFB] banner`}
      >
        <Hero />
      </div>

      <IntroPro />

      <TransactionSteps />

      <Connect />

      <Faq />
      <Download />
    </>
  );
}
