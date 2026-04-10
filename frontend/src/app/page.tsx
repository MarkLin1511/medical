import Link from "next/link";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
} from "@/components/AnimatedSection";
import ScrollFeatureShowcase from "@/components/ScrollFeatureShowcase";

function LogoMark() {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-cyan-400 via-teal-300 to-violet-400 shadow-[0_0_28px_rgba(104,240,216,0.28)]">
      <div className="absolute inset-[1px] rounded-[1.25rem] bg-slate-950/90" />
      <svg className="relative z-10 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </div>
  );
}

const proofCards = [
  {
    value: "1 dashboard",
    label: "One patient view for labs, meds, scans, and outside records.",
  },
  {
    value: "FHIR + OCR",
    label: "Structured import when portals cooperate. Document intelligence when they do not.",
  },
  {
    value: "Patient-owned",
    label: "Share the clean record forward without waiting on a fax queue.",
  },
];

const trustLayers = [
  "HIPAA-first architecture",
  "Source-aware audit trail",
  "Encrypted originals retained",
  "Human review before messy data becomes canonical",
];

export default function Home() {
  return (
    <div className="app-shell ambient-grid min-h-screen overflow-x-hidden text-white">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/55 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <LogoMark />
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200/70">MedBridge</div>
              <div className="text-xs text-slate-400">The continuity layer for modern care</div>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <span className="eyebrow-stat px-3 py-1 text-xs">FHIR-native</span>
            <span className="eyebrow-stat px-3 py-1 text-xs">Document OCR</span>
            <span className="eyebrow-stat px-3 py-1 text-xs">Provider handoffs</span>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-slate-300 transition-colors hover:text-white">
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-gradient-to-r from-cyan-300 via-teal-300 to-violet-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Start building your record
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10">
              <FadeIn>
                <span className="section-label">Fragmented healthcare is the bug</span>
              </FadeIn>

              <FadeIn delay={0.05}>
                <h1 className="hero-title mt-7 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  Your chart should follow your body, not your hospital.
                </h1>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  MedBridge turns disconnected portals, referral PDFs, discharge packets, and scanned records into one
                  living patient record patients and providers can actually use.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/signup"
                    className="rounded-full bg-gradient-to-r from-cyan-300 via-teal-300 to-violet-400 px-7 py-3.5 text-center text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
                  >
                    Build your unified record
                  </Link>
                  <Link
                    href="/login"
                    className="rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-center text-base font-medium text-white transition-colors hover:bg-white/[0.08]"
                  >
                    Enter the live demo
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <span className="data-pill">Epic, athenahealth, eClinicalWorks, Cerner, MEDITECH</span>
                  <span className="data-pill">Structured import + messy record rescue</span>
                  <span className="data-pill">Patient-controlled sharing</span>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} className="relative">
              <div className="glass-panel panel-border-glow scanline relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
                <div className="flex items-center justify-between border-b border-white/8 pb-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-cyan-200/60">Continuity engine</div>
                    <div className="mt-1 text-xl font-semibold text-white">Patient mission control</div>
                  </div>
                  <div className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.08] px-3 py-1 text-xs text-emerald-200">
                    Live sync
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="glass-panel-soft metric-orb rounded-[1.6rem] p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/60">Continuity score</div>
                    <div className="mt-4 flex items-end gap-3">
                      <div className="text-6xl font-semibold tracking-[-0.06em] text-white">94</div>
                      <div className="pb-3 text-sm text-slate-400">of 100</div>
                    </div>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">
                      Strong records across labs, medications, and consult notes. Two outside systems still need
                      backfill.
                    </p>
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/6">
                      <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-cyan-300 via-teal-300 to-violet-400" />
                    </div>
                  </div>

                  <div className="glass-panel-soft rounded-[1.6rem] p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/60">Source fabric</div>
                    <div className="mt-4 space-y-3">
                      {[
                        { name: "Epic MyChart", status: "Connected", color: "bg-cyan-300" },
                        { name: "eClinicalWorks", status: "Document import", color: "bg-violet-300" },
                        { name: "LabCorp PDF", status: "Structured", color: "bg-emerald-300" },
                      ].map((source) => (
                        <div key={source.name} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                          <div className="flex items-center gap-3">
                            <span className={`h-2.5 w-2.5 rounded-full ${source.color}`} />
                            <span className="text-sm text-white">{source.name}</span>
                          </div>
                          <span className="text-xs text-slate-400">{source.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="glass-panel-soft rounded-[1.6rem] p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-white">Latest care context</div>
                      <div className="text-xs text-slate-400">Ready for handoff</div>
                    </div>
                    <div className="mt-4 space-y-4">
                      {[
                        ["Medication change", "Metformin adjusted after elevated A1c result"],
                        ["Outside specialist note", "Cardiology consult merged from scanned PDF"],
                        ["Share packet", "Referral packet ready for next PCP appointment"],
                      ].map(([title, text]) => (
                        <div key={title} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                          <div className="text-sm font-medium text-white">{title}</div>
                          <div className="mt-1 text-sm text-slate-400">{text}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-panel-soft rounded-[1.6rem] p-5">
                    <div className="text-sm font-medium text-white">Workflow before MedBridge</div>
                    <div className="mt-4 space-y-3">
                      {[
                        "Outside labs buried in a portal nobody checks",
                        "Referral packet arrives late and incomplete",
                        "Patient repeats history from memory again",
                      ].map((line) => (
                        <div key={line} className="rounded-2xl border border-rose-300/10 bg-rose-500/[0.06] px-4 py-3 text-sm text-rose-100">
                          {line}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-2xl border border-emerald-300/10 bg-emerald-400/[0.08] px-4 py-3 text-sm text-emerald-100">
                      After MedBridge: the next clinician opens one source-aware record instead of chasing five systems.
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-7xl">
            <FadeInStagger className="grid gap-4 md:grid-cols-3">
              {proofCards.map((card) => (
                <FadeInStaggerItem key={card.value}>
                  <div className="glass-panel-soft rounded-[1.75rem] p-6">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-white">{card.value}</div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{card.label}</p>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </section>

        <ScrollFeatureShowcase />

        <section className="px-4 py-12 sm:px-6 sm:py-18">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="glass-panel rounded-[2rem] p-7 sm:p-8">
              <span className="section-label">Execution model</span>
              <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Under the scroll effects, the core idea stays disciplined: ingest anything, normalize everything, share cleanly.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                The experience can feel cinematic, but the workflow underneath is still about durable trust, provenance, and clean handoffs across broken systems.
              </p>
              <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {trustLayers.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="px-4 pb-20 pt-8 sm:px-6 sm:pb-28">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="glass-panel panel-border-glow rounded-[2.25rem] px-6 py-10 text-center sm:px-12 sm:py-14">
              <span className="section-label">The hook is simple</span>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Stop making patients act like human middleware.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                MedBridge gives care teams a cleaner patient story and gives patients one place to carry it forward.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/signup"
                  className="rounded-full bg-gradient-to-r from-cyan-300 via-teal-300 to-violet-400 px-7 py-3.5 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
                >
                  Launch MedBridge
                </Link>
                <Link
                  href="/login"
                  className="rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/[0.08]"
                >
                  Explore the demo
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
}
