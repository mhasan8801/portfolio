"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { certifications, education, educationId, training, trainingId } from "@/data/content";
import { ShieldCheck, Cloud, BadgeCheck, GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={22} style={{ color: "var(--accent)" }} />,
  Cloud:       <Cloud       size={22} style={{ color: "var(--accent)" }} />,
  BadgeCheck:  <BadgeCheck  size={22} style={{ color: "var(--accent)" }} />,
};

export default function Certifications() {
  const { language, t } = useLanguage();
  const eduData = language === "id" ? educationId : education;
  const trainingData = language === "id" ? trainingId : training;

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="text-gradient" style={{ fontSize: "3rem", textAlign: "center", marginBottom: "5rem" }}>
          {t("certs.title")}
        </h2>

        <div className="grid grid-cols-3" style={{ gap: "2rem", alignItems: "start" }}>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2" style={{ marginBottom: "2rem" }}>
              <Award size={20} style={{ color: "var(--accent)" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{t("certs.certifications")}</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {certifications.map((cert, i) => (
                <div key={i} className="glass" style={{ padding: "1.5rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ padding: "0.6rem", background: "var(--accent-muted)", borderRadius: "0.6rem", flexShrink: 0 }}>
                    {iconMap[cert.icon]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.35rem", lineHeight: "1.4" }}>{cert.name}</p>
                    <div className="flex items-center gap-2">
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                        style={{ fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}
                      >
                        {cert.issuer}
                        <ExternalLink size={12} />
                      </a>
                      <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>·</span>
                      <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2" style={{ marginBottom: "2rem" }}>
              <GraduationCap size={20} style={{ color: "var(--accent)" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{t("certs.education")}</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {eduData.map((edu, i) => (
                <div key={i} className="glass" style={{ padding: "1.5rem" }}>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <p style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{edu.degree}</p>
                    <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.875rem" }}>{edu.institution}</p>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", padding: "0.25rem 0.75rem", background: "var(--glass)", borderRadius: "1rem", border: "1px solid var(--glass-border)", display: "inline-block", marginBottom: "0.75rem" }}>
                    {edu.period}
                  </span>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: "1.6" }}>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Training */}
          <div>
            <div className="flex items-center gap-2" style={{ marginBottom: "2rem" }}>
              <BookOpen size={20} style={{ color: "var(--accent)" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{t("certs.training")}</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {trainingData.map((train, i) => (
                <div key={i} className="glass" style={{ padding: "1.5rem" }}>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <p style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{train.name}</p>
                    <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.875rem" }}>{train.institution}</p>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", padding: "0.25rem 0.75rem", background: "var(--glass)", borderRadius: "1rem", border: "1px solid var(--glass-border)", display: "inline-block", marginBottom: "0.75rem" }}>
                    {train.period}
                  </span>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: "1.6" }}>{train.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
