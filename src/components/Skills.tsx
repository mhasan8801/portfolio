"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, Cpu, Code2, Database, Layout, Search } from "lucide-react";
import { skillGroups } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  Search:   <Search   style={{ color: "var(--accent)" }} />,
  Cpu:      <Cpu      style={{ color: "var(--accent)" }} />,
  Database: <Database style={{ color: "var(--accent)" }} />,
  Layout:   <Layout   style={{ color: "var(--accent)" }} />,
  Code2:    <Code2    style={{ color: "var(--accent)" }} />,
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h2 className="text-gradient" style={{ fontSize: "3rem", marginBottom: "1rem" }}>{t("skills.title")}</h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto" }}>
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-4" style={{ gap: "1.5rem" }}>
          {skillGroups.map((group, i) => (
            <div key={i} className="glass" style={{ padding: "2.5rem" }}>
              <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                {iconMap[group.icon]}
                <h3 style={{ fontSize: "1.25rem" }}>{group.title}</h3>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {group.skills.map((skill, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                    <CheckCircle2 size={14} style={{ color: "var(--accent)" }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
