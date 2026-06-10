"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Terminal, FileText } from "lucide-react";
import { siteConfig, about, heroTools } from "@/data/content";

// Pre-defined positions (% based) so each tool has a unique spot
const positions = [
  { top: "3%",  left: "4%"  },
  { top: "5%",  left: "42%" },
  { top: "1%",  left: "68%" },
  { top: "18%", left: "20%" },
  { top: "16%", left: "56%" },
  { top: "14%", left: "76%" },
  { top: "34%", left: "3%"  },
  { top: "32%", left: "36%" },
  { top: "30%", left: "65%" },
  { top: "50%", left: "14%" },
  { top: "48%", left: "48%" },
  { top: "50%", left: "72%" },
  { top: "66%", left: "2%"  },
  { top: "64%", left: "35%" },
  { top: "66%", left: "63%" },
  { top: "80%", left: "18%" },
];

// Each tool gets a unique float animation variant (1–4)
const floatVariants = [1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 3, 1, 4, 2, 1, 3];

export default function Hero() {
  const { language, t } = useLanguage();
  const aboutData = about[language];

  return (
    <section id="home" className="section"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "10rem", paddingBottom: "6rem" }}>
      <div className="container">

        {/* Top row */}
        <div className="grid grid-cols-2" style={{ gap: "4rem", marginBottom: "4rem", alignItems: "center" }}>

          {/* Left */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6" style={{ color: "var(--accent)" }}>
              <Terminal size={18} />
              <span className="font-semibold tracking-wider text-xs uppercase">{t("hero.badge")}</span>
            </div>
            <h1 className="text-gradient" style={{ fontSize: "clamp(2.8rem, 7vw, 4.5rem)", marginBottom: "1.5rem" }}>
              {t("hero.greeting")} <br />
              <span style={{ color: "var(--heading-color)" }}>{siteConfig.name}</span>
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "480px", marginBottom: "2.5rem", lineHeight: "1.8" }}>
              {aboutData.bio}
            </p>
            <div className="flex gap-4" style={{ flexWrap: "wrap" }}>
              <a href="#projects" className="btn btn-primary">
                {t("hero.cta")} <ArrowRight size={18} />
              </a>
              <a href={siteConfig.cvUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FileText size={18} /> {t("hero.cv")}
              </a>
            </div>
          </div>

          {/* Right — floating tools */}
          <div className="hidden md:flex items-center" style={{ height: "460px", position: "relative", overflow: "hidden", borderRadius: "1.5rem" }}>

            {/* Ambient glow */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: "1.5rem",
              background: "radial-gradient(ellipse at 60% 50%, var(--accent-muted) 0%, transparent 65%)",
              pointerEvents: "none",
            }} />

            {/* Floating tool pills */}
            {heroTools.map((tool, i) => (
              <div
                key={tool.label}
                className={`tool-bubble float-${floatVariants[i]}`}
                style={{
                  position: "absolute",
                  top: positions[i].top,
                  left: positions[i].left,
                  animationDelay: `${i * 0.15}s, ${i * 0.3}s`,
                  "--tool-color": tool.color,
                } as React.CSSProperties}
              >
                <span className="tool-bubble-dot" style={{ background: tool.color }} />
                <span className="tool-bubble-label">{tool.label}</span>
              </div>
            ))}


          </div>
        </div>

        {/* Stats row */}
        <div className="stats-grid">
          {about.stats.map((stat, i) => (
            <div key={i} className="glass" style={{ padding: "1.75rem", textAlign: "center" }}>
              <p style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--accent)", lineHeight: 1, marginBottom: "0.5rem" }}>
                {stat.value}
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: "1.4" }}>
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
