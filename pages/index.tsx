import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Hero/Hero"
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
}
