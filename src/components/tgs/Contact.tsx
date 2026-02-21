import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    project: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Technical Consultation Request — TG Simon");
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\n\nProject Description:\n${form.project}`
    );
    window.location.href = `mailto:daniel_tgsimon@singnet.com.sg?subject=${subject}&body=${body}`;
  };

  const inputStyle = {
    background: "hsl(var(--navy-surface))",
    border: "1px solid hsl(var(--border))",
    color: "hsl(var(--foreground))",
    borderRadius: "0.375rem",
    padding: "0.75rem 1rem",
    width: "100%",
    fontSize: "0.875rem",
    outline: "none",
    fontFamily: "var(--font-body)",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: "hsl(var(--navy-mid))" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Get in Touch</p>
          <div className="divider-amber mx-auto mb-6" />
          <h2 className="section-heading" style={{ color: "hsl(var(--foreground))" }}>
            Request a <span className="gradient-text">Technical Consultation</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-base leading-relaxed mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
              Contact our engineering team to discuss your corrosion protection requirements.
              We work with asset owners, EPCs, and operators worldwide to deliver
              technically sound, cost-effective cathodic protection solutions.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: "hsl(var(--amber) / 0.1)", border: "1px solid hsl(var(--amber) / 0.25)" }}
                >
                  <MapPin size={18} style={{ color: "hsl(var(--amber))" }} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-semibold mb-1" style={{ color: "hsl(var(--steel-light))" }}>Address</p>
                  <p className="text-sm" style={{ color: "hsl(var(--foreground))" }}>
                    15 Industrial Park Road<br />Singapore 408600
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: "hsl(var(--amber) / 0.1)", border: "1px solid hsl(var(--amber) / 0.25)" }}
                >
                  <Phone size={18} style={{ color: "hsl(var(--amber))" }} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-semibold mb-1" style={{ color: "hsl(var(--steel-light))" }}>Phone / WhatsApp</p>
                  <a
                    href="tel:+6596245903"
                    className="text-sm hover:underline"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    +65 9624 5903
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: "hsl(var(--amber) / 0.1)", border: "1px solid hsl(var(--amber) / 0.25)" }}
                >
                  <Mail size={18} style={{ color: "hsl(var(--amber))" }} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-semibold mb-1" style={{ color: "hsl(var(--steel-light))" }}>Email</p>
                  <a
                    href="mailto:daniel_tgsimon@singnet.com.sg"
                    className="text-sm hover:underline"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    daniel_tgsimon@singnet.com.sg
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold tracking-widest uppercase block mb-1.5" style={{ color: "hsl(var(--steel-light))" }}>Name *</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "hsl(var(--amber))")}
                  onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
                />
              </div>
              <div>
                <label className="text-xs font-semibold tracking-widest uppercase block mb-1.5" style={{ color: "hsl(var(--steel-light))" }}>Company *</label>
                <input
                  required
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Organisation"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "hsl(var(--amber))")}
                  onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold tracking-widest uppercase block mb-1.5" style={{ color: "hsl(var(--steel-light))" }}>Email *</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "hsl(var(--amber))")}
                  onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
                />
              </div>
              <div>
                <label className="text-xs font-semibold tracking-widest uppercase block mb-1.5" style={{ color: "hsl(var(--steel-light))" }}>Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+65 …"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "hsl(var(--amber))")}
                  onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold tracking-widest uppercase block mb-1.5" style={{ color: "hsl(var(--steel-light))" }}>Project Description *</label>
              <textarea
                required
                name="project"
                value={form.project}
                onChange={handleChange}
                rows={5}
                placeholder="Briefly describe your project, asset type, and corrosion protection requirements…"
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderColor = "hsl(var(--amber))")}
                onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2 text-sm"
            >
              <Send size={15} />
              Request Technical Consultation
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div
        className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderColor: "hsl(var(--border))" }}
      >
        <p className="text-xs" style={{ color: "hsl(var(--steel))" }}>
          © {new Date().getFullYear()} TG Simon. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: "hsl(var(--steel))" }}>
          Corrosion Management & Cathodic Protection Engineering — Singapore
        </p>
      </div>
    </section>
  );
}
