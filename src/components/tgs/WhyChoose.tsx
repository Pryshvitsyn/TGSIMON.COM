import { Clock, Globe, RefreshCw, BarChart2, CheckCircle, Target } from "lucide-react";

const reasons = [
  { icon: Clock, title: "20+ Years Engineering Expertise", desc: "Two decades of dedicated corrosion engineering across diverse industrial sectors and geographies." },
  { icon: Globe, title: "Worldwide Project Footprint", desc: "Active project experience across Europe, Asia Pacific, Middle East, and Australia." },
  { icon: RefreshCw, title: "Full Lifecycle Support", desc: "From initial assessment and design through installation, commissioning, and long-term monitoring." },
  { icon: BarChart2, title: "Data-Driven Corrosion Management", desc: "Combining engineering analysis with real-time data to optimize system performance and predict failures." },
  { icon: CheckCircle, title: "Certified Products & Equipment", desc: "Qualified supply chain with products meeting ISO, NACE/AMPP, and EN standards." },
  { icon: Target, title: "Precise Technical Execution", desc: "Rigorous engineering documentation and quality control from concept to commissioning." },
];

export default function WhyChoose() {
  return (
    <section
      className="py-24"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Value Proposition</p>
          <div className="divider-amber mx-auto mb-6" />
          <h2 className="section-heading" style={{ color: "hsl(var(--foreground))" }}>
            Why Choose <span className="gradient-text">TG Simon</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card-surface rounded-lg p-6 flex gap-4 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div
                className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "hsl(var(--amber) / 0.1)", border: "1px solid hsl(var(--amber) / 0.25)" }}
              >
                <Icon size={18} style={{ color: "hsl(var(--amber))" }} />
              </div>
              <div>
                <h3
                  className="font-bold text-sm uppercase tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "hsl(var(--foreground))", fontSize: "0.9rem" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
