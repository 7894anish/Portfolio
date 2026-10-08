import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Focus, WhatIBuild, EducationAndLearning } from "@/components/focus";
import { Contact } from "@/components/contact";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { alternates: { canonical: "/" }, openGraph: { url: "/" } };

export default function Home() {
  const person = { "@context": "https://schema.org", "@type": "Person", name: siteConfig.name, url: siteConfig.url, jobTitle: siteConfig.title, address: { "@type": "PostalAddress", addressLocality: "Bhubaneswar", addressRegion: "Odisha", addressCountry: "IN" }, sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl].filter(Boolean), knowsAbout: ["Full-stack development", "Angular", "Generative AI", "Python", "Enterprise software"] };
  return <main id="main-content"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} /><Hero /><div className="stack-strip"><div className="container"><span className="mono">BUILT ON STRONG FOUNDATIONS</span><div>{["Angular", "TypeScript", "Node.js", "Python", "LangChain", "LangGraph", "PostgreSQL"].map((name, i) => <span key={name}><span className="stack-mark">{["△", "TS", "⬡", "Py", "⌘", "⑂", "▱"][i]}</span>{name}</span>)}</div></div></div><Projects /><About /><Skills /><Experience /><Focus /><WhatIBuild /><EducationAndLearning /><Contact /><Reveal /></main>;
}
