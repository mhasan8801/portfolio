"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const openDrawer = () => {
    setHasOpened(true);
    setIsOpen(true);
  };

  const pillStyle: React.CSSProperties = {
    display: "flex", alignItems: "center", gap: "0.4rem",
    padding: "0.3rem 0.75rem", borderRadius: "9999px",
    border: "1px solid var(--glass-border)",
    background: "var(--pill-bg)",
    fontSize: "0.72rem", fontWeight: 600,
    color: "var(--foreground)", cursor: "pointer",
    transition: "var(--transition)", whiteSpace: "nowrap" as const,
    fontFamily: "inherit",
    position: "relative", zIndex: 101,
  };

  const iconBtnStyle: React.CSSProperties = {
    width: "34px", height: "34px", borderRadius: "9999px",
    border: "1px solid var(--glass-border)",
    background: "var(--pill-bg)",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", transition: "var(--transition)",
    flexShrink: 0, color: "var(--foreground)", fontFamily: "inherit",
    position: "relative", zIndex: 101,
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-container">

          {/* Logo */}
          <Link href="/" className="nav-logo" style={{ position: "relative", zIndex: 101 }}>
            <span className="logo-m">m</span>
            <span className="logo-rest">hasan</span>
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop">
            {navLinks.map((link) => (
              <a key={link.key} href={link.href} className="nav-link">
                {t(link.key)}
              </a>
            ))}
            <button onClick={toggleTheme} style={iconBtnStyle} aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={14} style={{ color: "var(--accent)" }} /> : <Moon size={14} style={{ color: "var(--accent)" }} />}
            </button>
            <button onClick={() => setLanguage(language === "en" ? "id" : "en")} style={pillStyle}>
              <Globe size={12} style={{ color: "var(--accent)" }} />
              <span>{language === "en" ? "ID" : "EN"}</span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="nav-mobile" style={{ position: "relative", zIndex: 101 }}>
            <button onClick={toggleTheme} style={iconBtnStyle} aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={14} style={{ color: "var(--accent)" }} /> : <Moon size={14} style={{ color: "var(--accent)" }} />}
            </button>
            <button onClick={() => setLanguage(language === "en" ? "id" : "en")} style={pillStyle}>
              <Globe size={12} style={{ color: "var(--accent)" }} />
              <span>{language === "en" ? "ID" : "EN"}</span>
            </button>
            <button onClick={openDrawer} style={iconBtnStyle} aria-label="Open menu">
              <Menu size={16} />
            </button>
          </div>

        </div>
      </nav>

      {/* Drawer — only mounted after first open */}
      {hasOpened && (
        <>
          <div
            className={`drawer-backdrop ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(false)}
          />
          <div className={`drawer ${isOpen ? "open" : ""}`}>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute", top: "1.25rem", right: "1.25rem",
                ...iconBtnStyle, zIndex: 102,
              }}
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
            <nav className="drawer-nav">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="drawer-link"
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
