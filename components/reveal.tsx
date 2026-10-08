"use client";
import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll(".section-heading, .project-card, .skill-card, .facts-panel, .build-grid article, .learning-panel").forEach(el => {
      if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add("reveal"); observer.observe(el); }
    });
    return () => observer.disconnect();
  }, []);
  return null;
}
