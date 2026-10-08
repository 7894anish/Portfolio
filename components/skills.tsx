import { Braces, Database, Sparkles, Wrench } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading, Tags } from "@/components/ui";

const icons = { frontend: Braces, backend: Database, ai: Sparkles, tools: Wrench };
export function Skills() {
  return <section id="skills" className="section container"><div className="section-top"><SectionHeading number="03" label="TOOLS OF THE TRADE" title={<>The right tools.<br /><span className="text-muted">Connected by good thinking.</span></>} /><p className="section-aside">A full-stack toolkit, with a growing<br />focus on intelligent applications.</p></div><div className="skills-grid">{skillGroups.map((group, index) => { const Icon = icons[group.icon as keyof typeof icons]; return <article className="skill-card" key={group.name}><div className="skill-card-top"><Icon size={23} strokeWidth={1.5} /><span className="mono">0{index + 1}</span></div><h3>{group.name}</h3><p>{group.label}</p><Tags items={group.technologies} /></article>; })}</div></section>;
}
