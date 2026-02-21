import { Globe, Pipette, Building2, Ship } from "lucide-react";

const regions = [
  {
    name: "Europe",
    projects: ["Onshore pipelines — Northern Europe", "Industrial plant protection — Germany", "Port & marine infrastructure — Netherlands"],
  },
  {
    name: "Asia Pacific",
    projects: ["Petrochemical storage terminals — Singapore", "Port infrastructure — Malaysia", "Industrial facilities — South Korea"],
  },
  {
    name: "Middle East",
    projects: ["Crude oil transmission pipelines", "Offshore platform cathodic protection", "Desalination plant structures"],
  },
  {
    name: "Australia",
    projects: ["Mining & resource infrastructure", "Coastal marine structures", "Gas pipeline networks"],
  },
];

const sectors = [
  { icon: Pipette, label: "Pipelines & Risers" },
  { icon: Building2, label: "Industrial Plants" },
  { icon: Ship, label: "Ports & Marine" },
  { icon: Globe, label: "Offshore Platforms" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
      style={{ background: "hsl(var(--navy-mid))" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Track Record</p>
          <div className="divider-amber mx-auto mb-6" />
          <h2 className="section-heading" style={{ color: "hsl(var(--foreground))" }}>
            Global Project <span className="gradient-text">Experience</span>
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            TG Simon has delivered cathodic protection and corrosion management solutions
            on major infrastructure projects across four continents.
          </p>
        </div>

        {/* Sector tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sectors.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "hsl(var(--amber) / 0.1)",
                border: "1px solid hsl(var(--amber) / 0.3)",
                color: "hsl(var(--amber))",
              }}
            >
              <Icon size={15} />
              {label}
            </div>
          ))}
        </div>

        {/* Regional grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {regions.map((r) => (
            <div key={r.name} className="card-surface rounded-lg p-6 transition-all duration-300 hover:translate-y-[-2px]">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded flex items-center justify-center"
                  style={{ background: "var(--gradient-amber)" }}
                >
                  <Globe size={15} style={{ color: "hsl(var(--navy-deep))" }} />
                </div>
                <h3
                  className="font-bold text-base uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-display)", color: "hsl(var(--foreground))" }}
                >
                  {r.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {r.projects.map((p) => (
                  <li
                    key={p}
                    className="text-sm flex items-start gap-2"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "hsl(var(--amber))" }}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="text-center mt-8 text-sm"
          style={{ color: "hsl(var(--steel))" }}
        >
          Applications include pipelines, bridges, storage terminals, ports, industrial plants, and offshore installations.
        </p>
      </div>
    </section>
  );
}
