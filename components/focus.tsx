import { Bot, Database, PanelsTopLeft, Terminal, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { learning } from "@/data/skills";

export function Focus() {
  return <section id="focus" className="focus-wrap"><div className="container section"><div className="section-top"><SectionHeading number="05" label="THE NEXT CHAPTER" title={<>Where I’m heading<span className="accent">.</span></>} description="Expanding my full-stack background into AI engineering. The goal: intelligent systems with solid engineering underneath." /><span className="focus-marker"><Sparkles size={20} />IN CONTINUOUS DEVELOPMENT</span></div><div className="evolution"><div className="evolution-step"><span className="mono">THE FOUNDATION</span><h3>Full-stack<br />engineering</h3><p>Interfaces · APIs · Data & backend systems</p></div><span className="evolution-connector" /><div className="evolution-step"><span className="mono">THE DIRECTION</span><h3>Generative AI<br />& agentic systems</h3><p>LangChain · LangGraph · Tool calling</p></div><span className="evolution-connector" /><div className="evolution-step evolution-final"><span className="mono">THE INTERSECTION</span><h3>Intelligent enterprise<br />applications</h3><p>Context-aware · Data-connected · Useful</p></div></div><div className="focus-topics">{["LLM applications", "RAG", "SQL agents", "Metadata-aware systems", "AI-assisted workflows"].map(topic => <span key={topic}>{topic}</span>)}</div></div></section>;
}

export function WhatIBuild() {
  const items = [
    { Icon: Bot, title: "AI-powered applications", description: "Assistants and agentic workflows that connect natural language with real application capabilities." },
    { Icon: Database, title: "Enterprise data systems", description: "Interfaces and workflows for data quality, matching, reconciliation, and data operations." },
    { Icon: PanelsTopLeft, title: "Full-stack web applications", description: "Considered frontend experiences connected to APIs, databases, and backend services." },
    { Icon: Terminal, title: "Developer productivity tools", description: "Practical tools that make complex workflows easier to understand and work with." },
  ];
  return <section className="section container"><SectionHeading number="06" label="WHAT I BUILD" title={<>From the interface<br /><span className="text-muted">to the intelligence underneath.</span></>} /><div className="build-grid">{items.map(item => <article key={item.title}><item.Icon size={26} strokeWidth={1.4} /><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>;
}

export function EducationAndLearning() {
  return <section className="section container education-learning"><div><SectionHeading number="07" label="FOUNDATIONS" title="A scientific mindset." /><div className="education-item"><span className="education-dot" /><div><span className="mono">POSTGRADUATE</span><h3>Master of Computer Applications</h3><p>Trident Academy of Technology</p><span className="education-score">82.49% <span>ACADEMIC SCORE</span></span></div></div><div className="education-item"><span className="education-dot" /><div><span className="mono">UNDERGRADUATE</span><h3>Bachelor of Science</h3><p>Chemistry with Physics & Mathematics</p></div></div></div><div className="learning-panel"><div className="learning-heading"><span className="status-dot" /><span className="mono">CURRENTLY EXPLORING</span><span className="mono learning-version">ALWAYS A WORK IN PROGRESS</span></div><h3>The learning never stops.</h3><p>Following curiosity. Building understanding.</p><ol>{learning.map((item, index) => <li key={item.title}><span className="learning-index mono">0{index + 1}</span><div><h4>{item.title}</h4><p>{item.items}</p></div></li>)}</ol></div></section>;
}
