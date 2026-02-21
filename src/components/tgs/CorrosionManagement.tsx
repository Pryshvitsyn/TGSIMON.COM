import { AlertTriangle, FlaskConical, BarChart3, Cpu } from "lucide-react";

const mechanisms = [
  { icon: AlertTriangle, title: "Mechanism Identification", desc: "Uniform, pitting, SCC, crevice, galvanic, and microbiologically-influenced corrosion." },
  { icon: FlaskConical, title: "Environmental Assessment", desc: "Soil resistivity, pH, chloride concentration, moisture, temperature, and electrochemical conditions." },
  { icon: BarChart3, title: "Predictive Strategies", desc: "Data-driven models to anticipate corrosion behavior and plan mitigation before failure occurs." },
  { icon: Cpu, title: "Data-Driven Diagnostics", desc: "Engineering expertise combined with monitoring analytics to design durable corrosion control systems." },
];

export default function CorrosionManagement() {
  return (
    <section
      id="corrosion"
      className="py-24"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Methodology</p>
          <div className="divider-amber mx-auto mb-6" />
          <h2 className="section-heading mb-4" style={{ color: "hsl(var(--foreground))" }}>
            Corrosion Management <span className="gradient-text">Explained</span>
          </h2>
          <p
            className="text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Corrosion management at TG Simon is a systematic approach to understanding,
            predicting, mitigating, and controlling corrosion risk in metallic assets.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mechanisms.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="card-surface rounded-lg p-6 transition-all duration-300 group"
            >
              {/* Step number */}
              <div
                className="text-5xl font-bold mb-4 opacity-10"
                style={{ fontFamily: "var(--font-display)", color: "hsl(var(--amber))" }}
              >
                0{i + 1}
              </div>
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-4"
                style={{ background: "hsl(var(--amber) / 0.12)" }}
              >
                <Icon size={20} style={{ color: "hsl(var(--amber))" }} />
              </div>
              <h3
                className="text-base font-bold mb-2 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-display)", color: "hsl(var(--foreground))" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div
          className="mt-10 rounded-lg p-6 border-l-4 flex items-center gap-4"
          style={{
            background: "hsl(var(--navy-surface))",
            borderColor: "hsl(var(--amber))",
          }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            We combine <span style={{ color: "hsl(var(--foreground))" }} className="font-semibold">engineering expertise</span> with{" "}
            <span style={{ color: "hsl(var(--foreground))" }} className="font-semibold">data-driven diagnostics</span> to design
            corrosion control systems that last — protecting your critical assets from the inside out.
          </p>
        </div>
      </div>
    </section>
  );
}
