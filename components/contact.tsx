"use client";

import { useState, type FormEvent } from "react";
import { Check, LoaderCircle, Send } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { ProfileLink } from "@/components/profile-links";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "unconfigured">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!siteConfig.contactEndpoint) { setStatus("unconfigured"); return; }
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return;
    setStatus("sending");
    try {
      const response = await fetch(siteConfig.contactEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ name: data.get("name"), email: data.get("email"), message: data.get("message") }), signal: AbortSignal.timeout(15000) });
      if (!response.ok) throw new Error("Message delivery failed");
      setStatus("success"); form.reset();
    } catch { setStatus("error"); }
  }
  return <section id="contact" className="section container contact-section"><div className="contact-copy"><div className="eyebrow"><span>08</span><span className="small-line" />LET’S CONNECT</div><h2>Let’s build<br />something<br /><span className="accent">intelligent.</span></h2><p>I’m open to opportunities in AI, GenAI, full-stack engineering, and enterprise software. Have something in mind? Let’s start a conversation.</p><div className="contact-links"><ProfileLink kind="email" /><ProfileLink kind="linkedin" /><ProfileLink kind="github" /></div><div className="contact-location"><span className="status-dot" />Based in Bhubaneswar. Open to what’s next.</div></div><form className="contact-form" onSubmit={submit}><h3>A good idea starts with hello.</h3><p>Tell me a little about what you’re thinking.</p><div className="form-field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} /></div><div className="form-field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="alex@company.com" required maxLength={254} /></div><div className="form-field"><label htmlFor="contact-message">What’s on your mind?</label><textarea id="contact-message" name="message" placeholder="An opportunity, a project, or just a hello…" rows={4} required minLength={10} maxLength={5000} /></div><div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div><button type="submit" className="button button-primary" disabled={status === "sending"}>{status === "sending" ? <LoaderCircle size={16} className="spin" /> : status === "success" ? <Check size={16} /> : <Send size={16} />}{status === "sending" ? "Sending…" : "Send message"}</button><div className="form-status" aria-live="polite">{status === "success" && <p className="success-message">Your message was sent. Thank you for reaching out.</p>}{status === "error" && <p className="error-message">Your message couldn’t be sent. Please try again or use one of the contact links.</p>}{(!siteConfig.contactEndpoint || status === "unconfigured") && <p>Message delivery isn’t connected yet. {siteConfig.email ? "Please use the Email me link." : "Contact details will be available soon."}{status === "unconfigured" && " Your message has not been sent."}</p>}</div></form></section>;
}
