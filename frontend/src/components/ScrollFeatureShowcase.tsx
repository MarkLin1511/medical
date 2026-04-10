"use client";

import { useEffect, useRef, useState } from "react";

type StoryChapter = {
  step: string;
  eyebrow: string;
  title: string;
  description: string;
  detail: string;
  bullets: string[];
  panelTitle: string;
  panelSummary: string;
  metricLabel: string;
  metricValue: string;
  activeSignals: string[];
  orbitLabel: string;
};

const chapters: StoryChapter[] = [
  {
    step: "01",
    eyebrow: "Fragmented portals",
    title: "As you scroll, MedBridge starts by pulling scattered records into one live patient layer.",
    description:
      "The first thing people feel is relief: Epic, athenahealth, eClinicalWorks, and hospital exports stop behaving like separate universes.",
    detail:
      "This chapter is about record gravity. Patients stop remembering where each lab or note lives because MedBridge becomes the surface above the portals.",
    bullets: [
      "Portal connections become one patient graph instead of a login zoo.",
      "Outside systems still count even when all they give you is a portal export.",
      "The record stays source-aware so clinicians can trust what they see.",
    ],
    panelTitle: "Unified source fabric",
    panelSummary: "Connected portals, uploads, and wearable feeds are stitched into one continuity layer.",
    metricLabel: "Active systems",
    metricValue: "7 live sources",
    activeSignals: ["Epic MyChart linked", "athenahealth import ready", "Outside consult packet detected"],
    orbitLabel: "source graph online",
  },
  {
    step: "02",
    eyebrow: "Document intelligence",
    title: "Then the page slows down and shows the messy reality: PDFs, screenshots, referral packets, and discharge paperwork.",
    description:
      "MedBridge is strongest where healthcare is weakest. The app can ingest ugly documents, let AI scrape them, and hold the output for review before it changes the chart.",
    detail:
      "This is the product moment where a dead PDF becomes a living clinical object. The document is parsed, summarized, and broken into labs, meds, visits, and next steps.",
    bullets: [
      "Upload hospital packets, scanned charts, and portal screenshots.",
      "AI extraction drafts land in a review queue instead of blindly mutating the record.",
      "Approved findings flow straight into the quantified dashboard.",
    ],
    panelTitle: "AI review queue",
    panelSummary: "Documents are scraped into structured findings with confidence, warnings, and approval controls.",
    metricLabel: "Pending review",
    metricValue: "3 packets waiting",
    activeSignals: ["Discharge summary parsed", "Lab PDF mapped to trend lines", "Medication list extracted"],
    orbitLabel: "document rescue engaged",
  },
  {
    step: "03",
    eyebrow: "Quantified self, clinically grounded",
    title: "Next, the story becomes personal: wearables and clinical labs live on the same quantified health dashboard.",
    description:
      "This is where MedBridge separates from a normal portal. Heart rate, HRV, blood pressure, A1c, glucose, and cholesterol can all shape one body-level view.",
    detail:
      "The dashboard is no longer just a chart list. It becomes a whole-health command center with body-system scores, blind spots, manual lab entry, and recent imports.",
    bullets: [
      "Typed lab values can be added manually when a patient gets results outside the portal.",
      "Wearable data and uploaded clinical records influence the same dashboard state.",
      "The quantified view stays linked to the original source and provenance.",
    ],
    panelTitle: "Quantified health cockpit",
    panelSummary: "Daily signals and medical records now influence one whole-body dashboard instead of living in separate apps.",
    metricLabel: "Quant score",
    metricValue: "91 / 100",
    activeSignals: ["A1c trend updated", "Resting HR improving", "Continuity score lifted by approved document import"],
    orbitLabel: "whole-health view locked",
  },
  {
    step: "04",
    eyebrow: "Translate and move care forward",
    title: "Finally, MedBridge stops being a viewer and becomes a transfer layer.",
    description:
      "Approved data can be translated into portable packets so another provider or portal receives one cleaner version of the patient story.",
    detail:
      "This is the handoff step. Instead of repeating history or sending raw PDFs around, the app exports normalized information that another care setting can consume.",
    bullets: [
      "Create cleaner provider packets from approved records and source-aware findings.",
      "Download FHIR bundles for downstream systems and future portal workflows.",
      "Keep the patient in control of what gets shared and when.",
    ],
    panelTitle: "Translation layer",
    panelSummary: "MedBridge turns normalized health state into a packet that can move to the next provider without rebuilding context from scratch.",
    metricLabel: "Export-ready",
    metricValue: "124 resources",
    activeSignals: ["FHIR packet assembled", "Provider handoff summary generated", "Consent log attached to export"],
    orbitLabel: "handoff packet ready",
  },
];

export default function ScrollFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const aIndex = Number((a.target as HTMLElement).dataset.index ?? 0);
            const bIndex = Number((b.target as HTMLElement).dataset.index ?? 0);
            return aIndex - bIndex;
          });

        if (visible.length > 0) {
          const lastVisible = visible[visible.length - 1];
          setActiveIndex(Number((lastVisible.target as HTMLElement).dataset.index ?? 0));
        }
      },
      {
        rootMargin: "-18% 0px -32% 0px",
        threshold: [0.2, 0.55, 0.8],
      }
    );

    itemRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const activeChapter = chapters[activeIndex];

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="section-label">Scroll story</span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            The product should reveal itself the way the workflow reveals itself in real care.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Instead of dumping every feature at once, MedBridge should unfold like a patient journey: connect, rescue, quantify, then translate forward.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-12">
            {chapters.map((chapter, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={chapter.step}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  data-index={index}
                  className="min-h-[72vh] lg:min-h-[88vh]"
                >
                  <div
                    className={`glass-panel-soft sticky top-28 rounded-[2rem] p-6 transition-all duration-500 sm:p-8 ${
                      isActive
                        ? "border-cyan-300/18 bg-cyan-400/[0.07] shadow-[0_20px_60px_rgba(1,8,17,0.42)]"
                        : "opacity-55"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-gradient-to-br from-cyan-300 via-teal-300 to-violet-400 px-4 py-3 text-lg font-semibold text-slate-950">
                        {chapter.step}
                      </div>
                      <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">{chapter.eyebrow}</div>
                    </div>

                    <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-white">{chapter.title}</h3>
                    <p className="mt-4 text-base leading-8 text-slate-200">{chapter.description}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{chapter.detail}</p>

                    <div className="mt-6 space-y-3">
                      {chapter.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                          <span className="text-sm leading-7 text-slate-200">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="glass-panel panel-border-glow relative overflow-hidden rounded-[2.15rem] p-6">
                <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.2),transparent_60%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-cyan-200/60">Feature preview</div>
                      <div className="mt-1 text-2xl font-semibold text-white">{activeChapter.panelTitle}</div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                      {activeChapter.orbitLabel}
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.7rem] border border-white/8 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-cyan-200/60">{activeChapter.metricLabel}</div>
                        <div className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-white">{activeChapter.metricValue}</div>
                        <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">{activeChapter.panelSummary}</p>
                      </div>

                      <div className="flex flex-col gap-2">
                        {chapters.map((chapter, index) => (
                          <button
                            key={chapter.step}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            className={`h-2.5 w-12 rounded-full transition-all duration-300 ${
                              index === activeIndex ? "bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" : "bg-white/10"
                            }`}
                            aria-label={`Jump to step ${chapter.step}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 grid gap-3">
                      {activeChapter.activeSignals.map((signal, index) => (
                        <div
                          key={signal}
                          className={`rounded-2xl border px-4 py-3 transition-all duration-500 ${
                            index === 0
                              ? "border-cyan-300/18 bg-cyan-400/[0.08] text-cyan-100"
                              : index === 1
                                ? "border-violet-300/16 bg-violet-400/[0.08] text-violet-100"
                                : "border-emerald-300/16 bg-emerald-400/[0.08] text-emerald-100"
                          }`}
                        >
                          <div className="text-sm font-medium">{signal}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="glass-panel-soft rounded-[1.5rem] p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-cyan-200/60">Why this matters</div>
                      <div className="mt-3 text-sm leading-7 text-slate-300">
                        Apple-style pacing lets the user feel each capability in sequence instead of scanning a wall of features.
                      </div>
                    </div>
                    <div className="glass-panel-soft rounded-[1.5rem] p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-cyan-200/60">What changes</div>
                      <div className="mt-3 text-sm leading-7 text-slate-300">
                        The sticky preview keeps one emotional center while the scroll chapters gradually reveal the system.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
