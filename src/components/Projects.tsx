"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Code } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/content";

export default function Projects() {
  const { language, t } = useLanguage();
  const data = projects[language];

  return (
    <section id="projects" className="section" style={{ background: "rgba(0, 255, 170, 0.02)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem" }}>
          <div>
            <h2 className="text-gradient" style={{ fontSize: "3rem", marginBottom: "1rem" }}>{t("projects.title")}</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "500px" }}>{t("projects.subtitle")}</p>
          </div>
          <a href="#" className="btn btn-outline" style={{ height: "fit-content" }}>{t("projects.viewAll")}</a>
        </div>

        <div className="grid grid-cols-3">
          {data.map((project, i) => (
            <div key={i} className="glass" style={{ overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ height: "200px", background: "var(--secondary)", position: "relative", borderBottom: "1px solid var(--glass-border)", overflow: "hidden" }}>
                <Image 
                  src="/project-default.svg" 
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={i < 3}
                />
              </div>
              <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: "0.7rem", color: "var(--accent)", padding: "0.2rem 0.6rem", background: "var(--accent-muted)", borderRadius: "2rem", fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{project.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "2rem", flex: 1 }}>{project.description}</p>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <a href={project.link} className="flex items-center gap-1 text-sm font-semibold hover:text-accent">
                    {t("projects.demo")} <ExternalLink size={14} />
                  </a>
                  <a href={project.github} className="flex items-center gap-1 text-sm font-semibold hover:text-accent">
                    {t("projects.source")} <Code size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
