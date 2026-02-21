import mmoImg from "@/assets/product-mmo-anode.jpg";
import castIronImg from "@/assets/product-cast-iron.jpg";
import zincImg from "@/assets/product-zinc-anode.jpg";
import magnesiumImg from "@/assets/product-magnesium-anode.jpg";
import lcProbeImg from "@/assets/product-lc-probe.jpg";
import testStationImg from "@/assets/product-test-station.jpg";
import rectifierImg from "@/assets/product-rectifier.jpg";
import datacellImg from "@/assets/product-datacell.jpg";
import thorImg from "@/assets/product-thor-control.jpg";

const products = [
  {
    img: mmoImg,
    title: "MMO Titanium Anodes",
    subtitle: "Impressed Current Anodes",
    desc: "Mixed metal oxide coated titanium disc and tubular anodes for impressed current cathodic protection systems. Long operational life, minimal maintenance, and high current efficiency across all environments.",
    applications: ["Pipelines & Risers", "Storage Tanks", "Marine Structures", "Deep Groundbeds"],
  },
  {
    img: castIronImg,
    title: "High Silicon Cast Iron Anodes",
    subtitle: "Sacrificial / Distributed Anode Systems",
    desc: "Robust high-silicon cast iron anodes for deep groundbeds and large infrastructure applications where high current output and long service life are required.",
    applications: ["Deep Groundbeds", "Industrial Plants", "Large Infrastructure", "Transmission Pipelines"],
  },
  {
    img: zincImg,
    title: "Zinc Anodes",
    subtitle: "Marine Sacrificial Anodes",
    desc: "Marine-grade zinc sacrificial anodes optimized for seawater environments. Effective protection for submerged and tidal zone metallic structures.",
    applications: ["Ship Hulls", "Offshore Platforms", "Jetties & Ports", "Submerged Structures"],
  },
  {
    img: magnesiumImg,
    title: "Magnesium Anodes",
    subtitle: "Soil & Freshwater Sacrificial Anodes",
    desc: "High-potential magnesium alloy anodes suited for underground pipelines, freshwater soils, and isolated structures requiring effective galvanic protection.",
    applications: ["Underground Pipelines", "Freshwater Soils", "Water Tanks", "Isolated Structures"],
  },
  {
    img: rectifierImg,
    title: "Transformer Rectifier Units",
    subtitle: "Impressed Current Power Supply",
    desc: "Switch-mode transformer rectifier units delivering precise DC current output for impressed current cathodic protection systems. Compact, efficient, and field-proven for industrial and pipeline applications.",
    applications: ["Pipeline ICCP", "Storage Tank Systems", "Industrial Plants", "Marine Facilities"],
  },
  {
    img: thorImg,
    title: "Thor CP Control System",
    subtitle: "Intelligent CP Control & Monitoring",
    desc: "Advanced cathodic protection control unit with integrated data logging, alarm management, and remote communication capability. Designed for automated monitoring and system regulation of complex CP installations.",
    applications: ["Multi-Zone Systems", "Remote Monitoring", "Pipeline Networks", "Industrial CP"],
  },
  {
    img: lcProbeImg,
    title: "LC Corrosion Detection Probes",
    subtitle: "Corrosion Detection & Measurement",
    desc: "Linear polarisation resistance (LPR) and corrosion detection probes for real-time metal loss rate measurement. Essential for predictive corrosion management and early warning systems.",
    applications: ["Process Pipework", "Water Systems", "Chemical Plants", "Offshore Topsides"],
  },
  {
    img: datacellImg,
    title: "DataCell Remote Logger",
    subtitle: "Wireless CP Data Acquisition",
    desc: "Compact remote data logger for wireless acquisition of cathodic protection potentials and system parameters. Enables cloud-based monitoring without manual survey requirements.",
    applications: ["Pipeline Test Points", "Remote Monitoring", "Permanent Installations", "Data Collection"],
  },
  {
    img: testStationImg,
    title: "Test Stations & Monitoring Posts",
    subtitle: "Field Diagnostics & CP Survey",
    desc: "Field test posts, junction boxes, and integrated monitoring units for regular CP system diagnostics, pipe-to-soil potential surveys, and data acquisition in pipeline and infrastructure applications.",
    applications: ["Pipeline Test Points", "CP Surveys", "Permanent Monitoring", "System Verification"],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Equipment Supply</p>
          <div className="divider-amber mx-auto mb-6" />
          <h2 className="section-heading" style={{ color: "hsl(var(--foreground))" }}>
            Corrosion Protection <span className="gradient-text">Products</span>
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            TG Simon supplies certified cathodic protection hardware sourced from
            qualified manufacturers — engineered for long-term performance in demanding environments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="card-surface rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-3px] group"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden" style={{ background: "hsl(var(--navy-mid))" }}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: "hsl(var(--amber))" }}
                >
                  {p.subtitle}
                </p>
                <h3
                  className="text-lg font-bold mb-3 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-display)", color: "hsl(var(--foreground))" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {p.desc}
                </p>

                {/* Applications */}
                <div
                  className="border-t pt-4"
                  style={{ borderColor: "hsl(var(--border))" }}
                >
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-2"
                    style={{ color: "hsl(var(--steel-light))" }}
                  >
                    Typical Applications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.applications.map((a) => (
                      <span
                        key={a}
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          background: "hsl(var(--amber) / 0.1)",
                          color: "hsl(var(--amber))",
                          border: "1px solid hsl(var(--amber) / 0.2)",
                        }}
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
