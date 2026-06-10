"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { experiences } from "@/data/content";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { language, t } = useLanguage();
  const data = experiences[language];

  return (
    <section id="experience" className="section">
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            {t("nav.experience")}
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }}>

          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "1.25rem",
            top: "0.5rem",
            bottom: "0.5rem",
            width: "2px",
            background: "linear-gradient(to bottom, var(--accent), transparent)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {data.map((exp, i) => (
              <div key={i} style={{ position: "relative", paddingLeft: "3.75rem" }}>

                {/* Dot */}
                <div style={{
                  position: "absolute",
                  left: "0.625rem",
                  top: "1.5rem",
                  width: "1.25rem",
                  height: "1.25rem",
                  borderRadius: "50%",
                  background: "var(--background)",
                  border: "2px solid var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}>
                  <div style={{
                    width: "6px", height: "6px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                  }} />
                </div>

                {/* Card */}
                <div className="glass" style={{ padding: "1.5rem 1.75rem" }}>

                  {/* Top row */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    flexWrap: "wrap",
                    marginBottom: "0.75rem",
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--heading-color)",
                        marginBottom: "0.2rem",
                        lineHeight: 1.3,
                      }}>
                        {exp.role}
                      </h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Briefcase size={12} style={{ color: "var(--accent)" }} />
                        <span style={{
                          color: "var(--accent)",
                          fontWeight: 600,
                          fontSize: "0.82rem",
                        }}>
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <span style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      padding: "0.3rem 0.85rem",
                      background: "var(--accent-muted)",
                      borderRadius: "9999px",
                      border: "1px solid var(--glass-border)",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Divider */}
                  <div style={{
                    height: "1px",
                    background: "var(--glass-border)",
                    marginBottom: "0.875rem",
                  }} />

                  {/* Description */}
                  <p style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: "1.7",
                  }}>
                    {exp.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
