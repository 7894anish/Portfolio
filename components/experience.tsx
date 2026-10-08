import { BriefcaseBusiness, Check } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading, Tags } from "@/components/ui";

export function Experience() {
  return <section id="experience" className="section container experience-section"><SectionHeading number="04" label="PROFESSIONAL JOURNEY" title={<>Real systems.<br /><span className="text-muted">Real experience.</span></>} description="Learning by building, debugging, and improving software people depend on." /><div className="experience-content"><div className="timeline-point"><BriefcaseBusiness size={19} /></div><div className="experience-label mono">ENTERPRISE SOFTWARE DEVELOPMENT</div><h3>{experience.title}</h3><p className="experience-duration">{experience.company && `${experience.company} · `}{experience.duration}{experience.startDate && ` · ${experience.startDate} — ${experience.endDate || "Present"}`}</p><p>{experience.summary}</p><ul className="contribution-list">{experience.contributions.map(item => <li key={item}><Check size={15} /><span>{item}</span></li>)}</ul><Tags items={["Angular", "TypeScript", "Node.js", "PostgreSQL", "AI integration"]} /></div></section>;
}
