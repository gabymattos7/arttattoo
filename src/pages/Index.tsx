import { Navbar } from "@/components/Navbar";
import { LocationBar } from "@/components/LocationBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Artists } from "@/components/Artists";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <LocationBar />
      <Hero />
      <Portfolio />
      <About />
      <Artists />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
