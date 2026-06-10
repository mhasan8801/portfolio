import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: `${siteConfig.role} | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* Prevent theme flash on load */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');})();`
        }} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <footer className="container" style={{ padding: "4rem 0", textAlign: "center", color: "var(--text-muted)", borderTop: "1px solid var(--glass-border)" }}>
              <p suppressHydrationWarning>&copy; {new Date().getFullYear()} {siteConfig.footerText}</p>
            </footer>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
