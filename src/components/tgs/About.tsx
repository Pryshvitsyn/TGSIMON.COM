import { ShieldCheck, Settings, Package, Activity } from "lucide-react";

const scope = [
  { icon: ShieldCheck, label: "Corrosion Assessment & Risk Analysis" },
  { icon: Settings, label: "System Design & Engineering" },
  { icon: Package, label: "Equipment Supply & Installation" },
  { icon: Activity, label: "Monitoring & Life-Cycle Support" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ background: "hsl(var(--navy-mid))" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="section-label mb-4">About TG Simon</p>
            <div className="divider-amber mb-6" />
            <h2 className="section-heading mb-6" style={{ color: "hsl(var(--foreground))" }}>
              20+ Years of Corrosion{" "}
              <span className="gradient-text">Engineering Excellence</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              TG Simon is a corrosion engineering firm with over 20 years of experience
              delivering corrosion protection and cathodic protection services worldwide.
              We work with asset owners, EPCs, infrastructure operators, and industrial
              clients to help prevent metal degradation, extend asset life, and ensure
              safe operation.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Our scope spans the full corrosion protection lifecycle — from initial
              assessment through design, supply, installation, and long-term monitoring.
            </p>
          </div>

          {/* Right — scope grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scope.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="card-surface rounded-lg p-5 flex items-start gap-4 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: "hsl(var(--amber) / 0.12)" }}
                >
                  <Icon size={20} style={{ color: "hsl(var(--amber))" }} />
                </div>
                <p
                  className="text-sm font-medium leading-snug mt-1"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
