"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navigation } from "@/data/navigation";
import { ProfileLink } from "@/components/profile-links";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}
function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const serverSnapshot = () => false;
const scrollSnapshot = () => window.scrollY > 24;
const themeSnapshot = () => document.documentElement.dataset.theme === "light";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useSyncExternalStore(subscribeScroll, scrollSnapshot, serverSnapshot);
  const light = useSyncExternalStore(subscribeTheme, themeSnapshot, serverSnapshot);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node) && !toggleRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const resize = () => { if (window.innerWidth > 900) setOpen(false); };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    window.addEventListener("resize", resize);
    return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside); window.removeEventListener("resize", resize); };
  }, [open]);
  function toggleTheme() {
    const next = !light;
    document.documentElement.dataset.theme = next ? "light" : "dark";
    try { localStorage.setItem("anish-theme", next ? "light" : "dark"); } catch { /* Storage is optional. */ }
  }
  return <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
    <div className="nav-shell">
      <Link className="wordmark" href="/#home" aria-label="Anish — home"><span className="brand-symbol">a<span>.</span></span><span>anish<span className="accent">.</span></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.label} href={item.href}>{item.label}</Link>)}</nav>
      <div className="nav-actions"><ProfileLink kind="github" iconOnly className="nav-social" /><ProfileLink kind="linkedin" iconOnly className="nav-social" /><ProfileLink kind="resume" iconOnly className="nav-social" /><button type="button" className="icon-button theme-toggle" onClick={toggleTheme} aria-label={light ? "Switch to dark theme" : "Switch to light theme"}>{light ? <Moon size={17} /> : <Sun size={17} />}</button><Link href="/#contact" className="button button-small nav-cta">Let’s talk<span className="status-dot" /></Link><button ref={toggleRef} type="button" className="icon-button menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    </div>
    {open && <div ref={menuRef} className="mobile-menu" id="mobile-navigation"><nav aria-label="Mobile navigation">{navigation.map((item, index) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}><span className="mono">0{index + 1}</span>{item.label}</Link>)}</nav><div className="mobile-socials"><ProfileLink kind="github" /><ProfileLink kind="linkedin" /><ProfileLink kind="resume" /></div></div>}
  </header>;
}
