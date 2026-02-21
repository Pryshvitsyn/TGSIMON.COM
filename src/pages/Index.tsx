import Navigation from "@/components/tgs/Navigation";
import Hero from "@/components/tgs/Hero";
import About from "@/components/tgs/About";
import CorrosionManagement from "@/components/tgs/CorrosionManagement";
import Services from "@/components/tgs/Services";
import Solutions from "@/components/tgs/Solutions";
import Products from "@/components/tgs/Products";
import Projects from "@/components/tgs/Projects";
import Partners from "@/components/tgs/Partners";
import WhyChoose from "@/components/tgs/WhyChoose";
import Contact from "@/components/tgs/Contact";
import FloatingContact from "@/components/tgs/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--navy-deep))" }}>
      <Navigation />
      <Hero />
      <About />
      <CorrosionManagement />
      <Services />
      <Solutions />
      <Products />
      <Projects />
      <Partners />
      <WhyChoose />
      <Contact />
      <FloatingContact />
    </div>
  );
};

export default Index;
