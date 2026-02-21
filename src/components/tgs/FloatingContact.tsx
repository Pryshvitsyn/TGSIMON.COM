import { useState, useEffect } from "react";
import { Phone, X, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  const [showScroll, setShowScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating button group — fixed right side */}
      <div
        className="fixed right-5 bottom-8 z-50 flex flex-col items-end gap-3 transition-all duration-500"
        style={{ opacity: showScroll ? 1 : 0, pointerEvents: showScroll ? "auto" : "none" }}
      >
        {/* Expanded card */}
        {open && (
          <div
            className="rounded-xl p-5 w-64 mb-1"
            style={{
              background: "hsl(var(--navy-mid))",
              border: "1px solid hsl(var(--amber) / 0.4)",
              boxShadow: "0 8px 32px hsl(218 57% 3% / 0.7)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "hsl(var(--amber))", fontFamily: "var(--font-display)" }}
            >
              Contact TG Simon
            </p>
            <div className="space-y-3">
              <a
                href="tel:+6596245903"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all"
                style={{
                  background: "hsl(var(--navy-surface))",
                  color: "hsl(var(--foreground))",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                <Phone size={15} style={{ color: "hsl(var(--amber))" }} />
                +65 9624 5903
              </a>
              <a
                href="https://wa.me/6596245903"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all"
                style={{
                  background: "hsl(142 70% 18%)",
                  color: "hsl(142 70% 75%)",
                  border: "1px solid hsl(142 50% 28%)",
                }}
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold"
                style={{
                  background: "var(--gradient-amber)",
                  color: "hsl(var(--navy-deep))",
                }}
                onClick={() => setOpen(false)}
              >
                Send Enquiry
              </a>
            </div>
          </div>
        )}

        {/* Round button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 relative"
          style={{
            background: "var(--gradient-amber)",
            boxShadow: "0 4px 20px hsl(28 85% 52% / 0.45)",
          }}
          aria-label="Contact us"
        >
          {open ? (
            <X size={22} style={{ color: "hsl(var(--navy-deep))" }} />
          ) : (
            <Phone size={22} style={{ color: "hsl(var(--navy-deep))" }} />
          )}

          {/* Pulse ring */}
          {!open && (
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-30"
              style={{ background: "hsl(var(--amber))" }}
            />
          )}
        </button>

        {/* Label beside button */}
        {!open && (
          <div
            className="absolute right-16 bottom-1 text-xs font-semibold tracking-wide whitespace-nowrap rounded px-3 py-1.5"
            style={{
              background: "hsl(var(--navy-mid))",
              color: "hsl(var(--amber))",
              border: "1px solid hsl(var(--amber) / 0.3)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            Contact us
          </div>
        )}
      </div>
    </>
  );
}
