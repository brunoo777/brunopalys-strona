import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Offer } from "@/components/sections/Offer";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <Process />
        <Testimonials />
        <Offer />
        <Contact />
      </main>
    </>
  );
}
