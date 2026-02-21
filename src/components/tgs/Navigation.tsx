import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Corrosion Mgmt", href: "#corrosion" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "hsl(218 57% 6% / 0.97)"
          : "hsl(218 57% 6% / 0.5)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "var(--shadow-nav)" : "none",
        borderBottom: scrolled ? "1px solid hsl(var(--border))" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="TG Simon"
            className="h-10 w-auto object-contain"
          />
          <span
            className="hidden sm:block text-[9px] tracking-[0.18em] uppercase"
            style={{ color: "hsl(var(--amber))" }}
          >
            Corrosion Engineering
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm ml-2">
            Request Consultation
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          style={{ color: "hsl(var(--foreground))" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-6 py-4 space-y-3"
          style={{
            borderColor: "hsl(var(--border))",
            background: "hsl(218 57% 6% / 0.98)",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link block py-2"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm block text-center mt-4">
            Request Consultation
          </a>
        </div>
      )}
    </header>
  );
}
