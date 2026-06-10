"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/content";

export default function Blog() {
  const { language, t } = useLanguage();
  const posts = blogPosts[language];

  return (
    <section id="blog" className="section">
      <div className="container">
        <div style={{ marginBottom: "4rem" }}>
          <h2 className="text-gradient" style={{ fontSize: "3rem", marginBottom: "1rem" }}>{t("blog.title")}</h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "500px" }}>{t("blog.subtitle")}</p>
        </div>

        <div className="grid grid-cols-3">
          {posts.map((post, i) => (
            <a key={i} href={post.link} className="glass"
              style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem", transition: "var(--transition)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = ""; (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  <Calendar size={14} />
                  {post.date}
                </div>
                <ArrowUpRight size={20} style={{ color: "var(--text-muted)", transition: "var(--transition)" }} />
              </div>
              <h3 style={{ fontSize: "1.25rem", lineHeight: "1.4" }}>{post.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>{post.excerpt}</p>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)" }}>{post.readTime}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
