"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Send, ExternalLink, Code } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section"
      style={{ background: "radial-gradient(circle at bottom right, var(--accent-muted), transparent 40%)" }}>
      <div className="container">
        <div className="grid grid-cols-2" style={{ gap: "4rem" }}>
          <div>
            <h2 className="text-gradient" style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>{t("contact.title")}</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginBottom: "3rem", lineHeight: "1.6" }}>
              {t("contact.subtitle")}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="flex items-center gap-4">
                <div className="glass" style={{ padding: "0.8rem", borderRadius: "0.8rem", color: "var(--accent)" }}><Mail size={24} /></div>
                <div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Email</p>
                  <p style={{ fontWeight: 600 }}>{siteConfig.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="glass" style={{ padding: "0.8rem", borderRadius: "0.8rem", color: "var(--accent)" }}><ExternalLink size={24} /></div>
                <div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>LinkedIn</p>
                  <p style={{ fontWeight: 600 }}>{siteConfig.linkedin}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="glass" style={{ padding: "0.8rem", borderRadius: "0.8rem", color: "var(--accent)" }}><Code size={24} /></div>
                <div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>GitHub</p>
                  <p style={{ fontWeight: 600 }}>{siteConfig.github}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="glass" style={{ padding: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 600 }}>{t("contact.name")}</label>
              <input type="text" placeholder={t("contact.namePlaceholder")}
                style={{ background: "var(--input-bg)", border: "1px solid var(--glass-border)", padding: "1rem", borderRadius: "0.5rem", color: "var(--foreground)", outline: "none" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 600 }}>{t("contact.email")}</label>
              <input type="email" placeholder={t("contact.emailPlaceholder")}
                style={{ background: "var(--input-bg)", border: "1px solid var(--glass-border)", padding: "1rem", borderRadius: "0.5rem", color: "var(--foreground)", outline: "none" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 600 }}>{t("contact.message")}</label>
              <textarea rows={4} placeholder={t("contact.messagePlaceholder")}
                style={{ background: "var(--input-bg)", border: "1px solid var(--glass-border)", padding: "1rem", borderRadius: "0.5rem", color: "var(--foreground)", outline: "none", resize: "none" }}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}>
              {t("contact.send")} <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
