import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(218 57% 5% / 0.55) 0%, hsl(218 57% 5% / 0.85) 60%, hsl(218 57% 5% / 0.98) 100%)",
        }}
      />

      {/* Grid overlay for tech feel */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(210 30% 92%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 30% 92%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Label */}
        <p className="section-label mb-6">
          Global Corrosion Engineering
        </p>

        {/* Amber accent line */}
        <div className="divider-amber mx-auto mb-8" />

        {/* Headline */}
        <h1
          className="section-heading mb-6 leading-tight"
          style={{ color: "hsl(var(--foreground))" }}
        >
          Advanced Corrosion Management
          <br />
          <span className="gradient-text">&amp; Cathodic Protection</span>
          <br />
          Solutions
        </h1>

        {/* Sub-headline */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "hsl(var(--steel-light))" }}
        >
          Engineering, Installation &amp; Monitoring of Corrosion Prevention
          Systems for Critical Infrastructure
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-base">
            Request Technical Consultation
          </a>
          <a href="#services" className="btn-outline text-base">
            View Solutions
          </a>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto border-t pt-10"
          style={{ borderColor: "hsl(var(--border))" }}
        >
          {[
            { value: "20+", label: "Years Experience" },
            { value: "Global", label: "Project Footprint" },
            { value: "Full", label: "Lifecycle Support" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-bold mb-1"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "hsl(var(--amber))",
                }}
              >
                {s.value}
              </div>
              <div
                className="text-xs tracking-widest uppercase"
                style={{ color: "hsl(var(--steel-light))" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ color: "hsl(var(--steel))" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
