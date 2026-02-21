import { Search, Zap, Beaker, TrendingUp, Wrench, Activity } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Corrosion Assessment & Diagnostics",
    desc: "Detailed evaluation of asset condition and corrosion drivers using advanced inspection tools and electrochemical analysis.",
  },
  {
    icon: Zap,
    title: "Cathodic Protection System Design",
    desc: "Technical design of impressed current and sacrificial anode systems compliant with international standards (ISO 15589, NACE SP0169).",
  },
  {
    icon: Beaker,
    title: "Material Selection & Engineering Support",
    desc: "Alloy and coating recommendations based on predicted environmental performance and service life modeling.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Modeling & Monitoring Integration",
    desc: "Engineering analysis to anticipate corrosion trends and integrate real-time sensor data for proactive asset management.",
  },
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    desc: "Turnkey execution of cathodic protection systems — from groundbed installation to rectifier commissioning and system verification.",
  },
  {
    icon: Activity,
    title: "Maintenance & Long-Term Monitoring",
    desc: "Data-backed inspection schedules, performance optimization, and lifecycle reporting for sustained corrosion protection.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24"
      style={{ background: "hsl(var(--navy-mid))" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-4">What We Do</p>
          <div className="divider-amber mx-auto mb-6" />
          <h2 className="section-heading" style={{ color: "hsl(var(--foreground))" }}>
            Our <span className="gradient-text">Services</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card-surface rounded-lg p-6 transition-all duration-300 group hover:translate-y-[-2px]"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "hsl(var(--amber) / 0.1)", border: "1px solid hsl(var(--amber) / 0.2)" }}
              >
                <Icon size={22} style={{ color: "hsl(var(--amber))" }} />
              </div>
              <h3
                className="text-base font-bold mb-3 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-display)", color: "hsl(var(--foreground))", fontSize: "1rem" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                {desc}
              </p>
              <div
                className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "var(--gradient-amber)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
