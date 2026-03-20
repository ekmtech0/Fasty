import Image from "next/image";
import Link from "next/link";
import DeviceMockup from "@/components/ladingpage/DeviceMockup";
import Hero from "@/components/ladingpage/Hero";
import Funcionalidades from "@/components/ladingpage/Funcionalidades";
import Header from "@/components/ladingpage/Header";
import ShowPainel from "@/components/ladingpage/ShowPainel";
import PricingSection from "@/components/ladingpage/PricingSection";
import CTA from "@/components/ladingpage/CTA";
import Footer from "@/components/ladingpage/Footer";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col">
        <Header/>
        <Hero/>
        <Funcionalidades/>
        <ShowPainel/>
        <PricingSection/>
        <CTA/>
        <Footer/>
    </main>
  );
}
