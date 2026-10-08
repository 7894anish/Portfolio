"use client";

import { useState } from "react";
import { Download, Mail, X } from "lucide-react";
import { Github, Linkedin } from "@/components/brand-icons";
import { siteConfig } from "@/lib/config";

export function ProfileLink({ kind, iconOnly = false, className = "" }: { kind: "github" | "linkedin" | "email" | "resume"; iconOnly?: boolean; className?: string }) {
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const entry = {
    github: { label: "GitHub", href: siteConfig.githubUrl, Icon: Github },
    linkedin: { label: "LinkedIn", href: siteConfig.linkedinUrl, Icon: Linkedin },
    email: { label: "Email me", href: siteConfig.email ? `mailto:${siteConfig.email}` : "", Icon: Mail },
    resume: { label: "Resume", href: siteConfig.resumeUrl, Icon: Download },
  }[kind];
  const content = <><entry.Icon size={16} strokeWidth={1.7} />{!iconOnly && <span>{entry.label}</span>}</>;
  async function handlePlaceholder() {
    if (kind !== "resume") {
      setNotice(`${entry.label} details will be available soon. Thank you for your interest.`);
      return;
    }
    setBusy(true);
    try {
      const response = await fetch(siteConfig.resumeUrl, { method: "HEAD" });
      if (!response.ok || !response.headers.get("content-type")?.includes("application/pdf")) throw new Error("unavailable");
      const link = document.createElement("a");
      link.href = siteConfig.resumeUrl;
      link.download = "Anish-Avinaba-Muduli-Resume.pdf";
      link.click();
    } catch { setNotice("My resume will be available to download soon."); }
    finally { setBusy(false); }
  }
  return <>
    {entry.href && kind !== "resume" ? <a className={`profile-link ${className}`} href={entry.href} aria-label={entry.label} target={kind === "email" ? undefined : "_blank"} rel={kind === "email" ? undefined : "noopener noreferrer"}>{content}</a> : <button type="button" className={`profile-link ${className}`} aria-label={entry.label} disabled={busy} onClick={handlePlaceholder}>{content}</button>}
    {notice && <div className="toast" role="status"><p>{notice}</p><button type="button" aria-label="Dismiss notification" onClick={() => setNotice("")}><X size={18} /></button></div>}
  </>;
}
