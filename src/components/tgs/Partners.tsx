import { CSSProperties } from "react";

interface Partner {
  name: string;
  style: CSSProperties;
}

const partners: Partner[] = [
  { name: "ALSTOM", style: { fontFamily: "'Oswald', sans-serif", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "2.8rem" } },
  { name: "AREVA", style: { fontFamily: "'Lato', sans-serif", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "1.6rem" } },
  { name: "Beaudrey", style: { fontFamily: "'Playfair Display', serif", fontWeight: 500, letterSpacing: "0.04em", fontStyle: "italic", fontSize: "1.1rem" } },
  { name: "DOOSAN", style: { fontFamily: "'Oswald', sans-serif", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: "1.5rem" } },
  { name: "e.on", style: { fontFamily: "'Lato', sans-serif", fontWeight: 900, letterSpacing: "0.02em", textTransform: "lowercase", fontSize: "1.6rem" } },
  { name: "FICHTNER", style: { fontFamily: "'Lato', sans-serif", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", fontSize: "2.6rem" } },
  { name: "HYUNDAI HEAVY INDUSTRIES", style: { fontFamily: "'Oswald', sans-serif", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "1.8rem" } },
  { name: "JAWA POWER", style: { fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "2rem" } },
  { name: "KSB", style: { fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 900, letterSpacing: "0.25em", textTransform: "uppercase", fontSize: "1.5rem" } },
  { name: "HITACHI", style: { fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "1.6rem" } },
  { name: "Ovivo", style: { fontFamily: "'Poppins', sans-serif", fontWeight: 600, letterSpacing: "0.08em", fontSize: "1.4rem" } },
  { name: "PÖYRY", style: { fontFamily: "'Montserrat', sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "2.5rem" } },
  { name: "SAMSUNG", style: { fontFamily: "'Montserrat', sans-serif", fontWeight: 300, letterSpacing: "0.4em", textTransform: "uppercase", fontSize: "2.8rem" } },
  { name: "SAUDI ARAMCO", style: { fontFamily: "'Oswald', sans-serif", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "1.5rem" } },
  { name: "Saudi Electricity Company", style: { fontFamily: "'Montserrat', sans-serif", fontWeight: 500, letterSpacing: "0.03em", fontSize: "1rem" } },
  { name: "SHELL", style: { fontFamily: "'Lato', sans-serif", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "1.7rem" } },
  { name: "SIEMENS", style: { fontFamily: "'Montserrat', sans-serif", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "2.7rem" } },
  { name: "VATTENFALL", style: { fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "2rem" } },
  { name: "Tractebel Engineering", style: { fontFamily: "'Playfair Display', serif", fontWeight: 400, letterSpacing: "0.04em", fontSize: "1.1rem" } },
  { name: "TRAFIKVERKET", style: { fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "1.4rem" } },
  { name: "TAPCO", style: { fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 900, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: "2.2rem" } },
  { name: "CORRPRO", style: { fontFamily: "'Anton', sans-serif", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "1.6rem" } },
  { name: "MATCOR", style: { fontFamily: "'Anton', sans-serif", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: "1.5rem" } },
  { name: "DENSO", style: { fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "1.4rem" } },
  { name: "Stopaq", style: { fontFamily: "'Poppins', sans-serif", fontWeight: 600, letterSpacing: "0.06em", fontSize: "1.3rem" } },
  { name: "Permasense", style: { fontFamily: "'Poppins', sans-serif", fontWeight: 500, letterSpacing: "0.05em", fontSize: "1.2rem" } },
  { name: "Farwest Corrosion", style: { fontFamily: "'Lato', sans-serif", fontWeight: 700, letterSpacing: "0.04em", fontSize: "1.1rem" } },
  { name: "ICOSPO", style: { fontFamily: "'Oswald', sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "1.8rem" } },
  { name: "Swede Gas", style: { fontFamily: "'Montserrat', sans-serif", fontWeight: 500, letterSpacing: "0.06em", fontSize: "1.3rem" } },
  { name: "Republic of Singapore THE AIR FORCE", style: { fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", fontSize: "1rem" } },
  { name: "Ministry of Electricity & Water", style: { fontFamily: "'Lato', sans-serif", fontWeight: 600, letterSpacing: "0.03em", fontSize: "1rem" } },
  { name: "TUAS", style: { fontFamily: "'Oswald', sans-serif", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "1.6rem" } },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="py-20"
      style={{
        background: "hsl(var(--navy-mid))",
        borderTop: "1px solid hsl(var(--border))",
        borderBottom: "1px solid hsl(var(--border))",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">Strategic Partners</span>
          <h2 className="section-heading mt-3">
            We Do Jobs All Over The{" "}
            <span className="gradient-text">World</span>
          </h2>
          <div className="divider-amber mx-auto mt-5" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {partners.map((p) => (
            <span
              key={p.name}
              className="select-none cursor-default inline-block"
              style={{
                color: "hsl(var(--steel-light))",
                opacity: 0.3,
                transition: "opacity 300ms, color 300ms, transform 300ms, text-shadow 300ms, filter 300ms",
                ...p.style,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.opacity = "1";
                el.style.color = "hsl(var(--amber-light))";
                el.style.transform = "scale(1.05)";
                el.style.textShadow = "0 0 25px hsl(var(--amber-glow) / 0.4), 0 0 50px hsl(var(--amber-glow) / 0.15)";
                el.style.filter = "brightness(1.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.opacity = "0.3";
                el.style.color = "hsl(var(--steel-light))";
                el.style.transform = "scale(1)";
                el.style.textShadow = "none";
                el.style.filter = "brightness(1)";
              }}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
