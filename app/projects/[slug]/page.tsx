import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Globe } from "lucide-react";
import { Github } from "@/components/brand-icons";
import { projects } from "@/data/projects";
import { Tags } from "@/components/ui";
import { ProjectVisual } from "@/components/project-visual";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — Case study`, description: project.longDescription, alternates: { canonical: `/projects/${project.slug}/` }, openGraph: { title: `${project.title} — Engineering case study`, description: project.longDescription, url: `/projects/${project.slug}/`, type: "article" }, twitter: { card: "summary", title: `${project.title} — Engineering case study`, description: project.longDescription } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex(project => project.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return <main id="main-content" className="case-study container"><Link href="/#projects" className="back-link">All projects</Link><header className="case-header"><div className="eyebrow"><span>CASE STUDY 0{index + 1}</span><span className="small-line" />{project.category}</div><h1>{project.title}<span className="accent">.</span></h1><p>{project.longDescription}</p><Tags items={project.technologies} /></header><div className="case-art"><ProjectVisual visual={project.visual} /><span className="case-art-caption mono">CONCEPTUAL VISUALIZATION · NOT A PRODUCT SCREENSHOT</span></div><div className="case-layout"><aside className="case-sidebar"><span className="eyebrow">IN THIS CASE STUDY</span><nav aria-label="Case study sections">{["Overview", "Architecture", "Capabilities", "Contribution"].map((name, i) => <a href={`#${name.toLowerCase()}`} key={name}><span className="mono">0{i + 1}</span>{name}</a>)}</nav><div className="case-role"><span className="mono">MY ROLE</span><p>{project.role}</p></div>{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="profile-link"><Github size={16} />View source</a>}{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="profile-link"><Globe size={16} />Live project</a>}</aside><div className="case-content"><section id="overview"><span className="eyebrow">01 / OVERVIEW</span><h2>The problem</h2><p>{project.problem}</p><h3>The approach</h3><p>{project.solution}</p></section><section id="architecture"><span className="eyebrow">02 / SYSTEM DESIGN</span><h2>How it fits together.</h2><p>A high-level view of the technologies and responsibilities in this application.</p><div className="architecture-stack">{project.architecture.map((layer, i) => <article key={layer.title}><span className="mono">0{i + 1}</span><div><h3>{layer.title}</h3><p>{layer.description}</p></div></article>)}</div></section><section id="capabilities"><span className="eyebrow">03 / CAPABILITIES</span><h2>Built around the workflow.</h2><ul className="feature-list">{project.features.map(feature => <li key={feature}><Check size={16} />{feature}</li>)}</ul><h3>The technology</h3><Tags items={project.technologies} /></section><section id="contribution"><span className="eyebrow">04 / MY CONTRIBUTION</span><h2>The work behind the product.</h2><p>{project.role}</p><ul className="contribution-list">{project.contributions.map(item => <li key={item}><Check size={16} /><span>{item}</span></li>)}</ul></section></div></div><Link className="next-project" href={`/projects/${next.slug}/`}><span className="mono">EXPLORE THE NEXT PROJECT</span><strong>{next.title}<span className="accent"> +</span></strong><span>{next.category}</span></Link></main>;
}
