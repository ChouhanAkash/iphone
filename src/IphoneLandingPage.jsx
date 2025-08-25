import { useMemo } from "react";
import { motion } from "framer-motion";

export default function IphoneLandingPage() {
  const navItems = useMemo(
    () => [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "Entertainment",
      "Accessories",
      "Support",
    ],
    []
  );

  const chips = ["Overview", "Switch to iPhone", "Tech Specs"]; 

  return (
    <div className="min-h-screen w-full bg-black text-white font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial]">
      {/* Global Top Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/80 border-b border-white/5">
        <nav className="mx-auto max-w-[1200px] px-4 xl:px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Apple" className="grid place-items-center">
              <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                <path fill="currentColor" d="M12.2 6.2c1.1-1.3 1.8-3 1.6-4.7c-1.5.1-3.2 1-4.2 2.2c-1 1.1-1.9 2.9-1.7 4.5c1.6.1 3.2-.8 4.3-2zM19.8 20c-.6 1.1-1.4 2.3-2.5 2.3c-1.1 0-1.5-.7-2.8-.7c-1.3 0-1.7.7-2.8.7c-1.2 0-2.1-1.2-2.7-2.3C5.2 17.5 4 14 5.6 11.6c.9-1.4 2.3-2.2 3.8-2.2c1.1 0 2 .5 2.7.5c.7 0 1.9-.6 3.2-.6c.5 0 2.3.1 3.4 1.7c-.1.1-2 1.2-1.9 3.6c.1 2.9 2.5 3.9 2.6 3.9c0 0-.1.2-.2.5z"/>
              </svg>
            </a>
            <ul className="hidden md:flex items-center gap-5 text-sm text-white/80">
              {navItems.map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-default">{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4 opacity-90">
            <button aria-label="Search" className="hover:opacity-100 transition-opacity">🔍</button>
            <button aria-label="Bag" className="hover:opacity-100 transition-opacity">👜</button>
          </div>
        </nav>
      </header>

      {/* Subnav Chips */}
      <div className="w-full border-b border-white/5 bg-[#0b0b0b]">
        <div className="mx-auto max-w-[980px] px-4 xl:px-0 h-12 flex items-center gap-3 overflow-x-auto">
          {chips.map((c) => (
            <span
              key={c}
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-white/80 hover:text-white hover:border-white/20"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,#1f1f1f,transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-[980px] px-4 xl:px-0 py-16 md:py-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[44px] leading-[1.05] md:text-6xl font-semibold tracking-tight"
            >
              iPhone 15 Pro
            </motion.h1>
            <p className="mt-3 md:mt-4 text-lg md:text-2xl text-white/70">
              Titanium. So strong. So light. So Pro.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a className="rounded-full bg-[#0071e3] hover:bg-[#1580ff] px-5 py-2 text-sm font-medium">Buy</a>
              <a className="rounded-full border border-white/20 hover:border-white/40 px-5 py-2 text-sm font-medium">Learn more</a>
            </div>
          </div>

          {/* Device visual */}
          <div className="mt-10 md:mt-14">
  <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl rounded-3xl bg-black border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] overflow-hidden">
    <video
      src="https://www.apple.com/105/media/us/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/xlarge_2x.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    />
  </div>
</div>
        </div>
      </section>

      {/* Colorways */}
      <section className="border-t border-white/5 bg-[#0b0b0b]">
        <div className="mx-auto max-w-[980px] px-4 xl:px-0 py-14 md:py-20">
          <h2 className="text-2xl md:text-[28px] font-semibold tracking-tight text-center">Four stunning finishes.</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Natural Titanium", hex: "#d7d2cb" },
              { name: "Blue Titanium", hex: "#9bb3c0" },
              { name: "White Titanium", hex: "#e9e9ea" },
              { name: "Black Titanium", hex: "#303030" },
            ].map((c) => (
              <div key={c.name} className="text-center">
                <div
                  className="mx-auto h-16 w-16 rounded-full border border-white/10"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="mt-3 text-sm text-white/70">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature band */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-[1100px] px-4 xl:px-0 py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Titanium design",
                desc: "Aerospace‑grade titanium for an incredibly light Pro.",
                img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
              },
              {
                title: "A17 Pro chip",
                desc: "Next‑level GPU for immersive gaming and pro workflows.",
                img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
              },
              {
                title: "Pro camera system",
                desc: "7 pro lenses in your pocket. Capture incredible detail.",
                img: "https://images.unsplash.com/photo-1519183071298-a2962be96f83?q=80&w=1600&auto=format&fit=crop",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-3xl overflow-hidden border border-white/10 bg-[#0f0f0f]"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img src={card.img} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Big Promo */}
      <section className="border-t border-white/5 bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1100px] px-4 xl:px-0 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-[32px] md:text-[40px] font-semibold leading-tight tracking-tight">
                A17 Pro. Game‑changing chip. Groundbreaking performance.
              </h2>
              <p className="mt-4 text-white/70">
                Custom‑designed GPU delivers our biggest graphics redesign ever. Enjoy console‑style
                gaming and next‑level efficiency.
              </p>
              <div className="mt-6 flex gap-4">
                <a className="rounded-full bg-[#0071e3] hover:bg-[#1580ff] px-5 py-2 text-sm font-medium">Learn more</a>
                <a className="rounded-full border border-white/20 hover:border-white/40 px-5 py-2 text-sm font-medium">View tech specs</a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-black">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
                  alt="Chip"
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech specs strip */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-[980px] px-4 xl:px-0 py-14 md:py-20">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { k: "Display", v: "6.1\" / 6.7\"" },
              { k: "Chip", v: "A17 Pro" },
              { k: "Camera", v: "48MP main" },
              { k: "USB‑C", v: "USB 3 speeds" },
            ].map((s) => (
              <li key={s.k} className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-6">
                <div className="text-sm text-white/50">{s.k}</div>
                <div className="mt-1 text-2xl font-semibold">{s.v}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0b0b0b]">
        <div className="mx-auto max-w-[980px] px-4 xl:px-0 py-10 text-white/50 text-xs leading-relaxed">
          <p>
            This is an educational, UI‑only replica for interview/assignment purposes. Replace imagery and
            typography to match the official Apple iPhone page for pixel‑perfect parity.
          </p>
          <div className="mt-6 grid md:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="font-medium text-white/70">Column {i + 1}</div>
                {Array.from({ length: 5 }).map((__, j) => (
                  <div key={j} className="hover:text-white cursor-default">Link {j + 1}</div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Not Apple Inc.</div>
            <div className="flex items-center gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
              <span>Legal</span>
              <span>Site Map</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
