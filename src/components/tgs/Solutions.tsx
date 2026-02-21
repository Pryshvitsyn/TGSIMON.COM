import { Cpu, Database, GitMerge } from "lucide-react";

const tech = [
  { icon: Cpu, title: "Risk Assessment Tools", desc: "Advanced corrosion risk modeling software to simulate environmental impacts and predict degradation timelines." },
  { icon: Database, title: "Monitoring Integration", desc: "Remote monitoring systems and data loggers that feed real-time electrochemical data into our analysis pipeline." },
  { icon: GitMerge, title: "Engineering Analytics", desc: "Systematic evaluation of CP system performance, trend analysis, and lifecycle optimization reporting." },
];

export default function Solutions() {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(213 45% 14%) 100%)",
        borderTop: "1px solid hsl(var(--border))",
        borderBottom: "1px solid hsl(var(--border))",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Technology & Approach</p>
          <div className="divider-amber mx-auto mb-6" />
          <h2 className="section-heading" style={{ color: "hsl(var(--foreground))" }}>
            Solutions &amp; <span className="gradient-text">Technology</span>
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            TG Simon uses advanced corrosion risk assessment tools and engineering methodology
            to simulate environmental impacts, predict corrosion behavior, and optimize
            mitigation measures across the full asset lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tech.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-lg p-6 text-center card-surface transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  background: "var(--gradient-amber)",
                  boxShadow: "var(--shadow-glow)",
                }}
              >
                <Icon size={24} style={{ color: "hsl(var(--navy-deep))" }} />
              </div>
              <h3
                className="font-bold text-base uppercase tracking-wide mb-3"
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
      </div>
    </section>
  );
}
