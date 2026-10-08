import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeading, Tags } from "@/components/ui";
import { ProjectVisual } from "@/components/project-visual";

export function Projects() {
  return <section id="projects" className="section container"><div className="section-top"><SectionHeading number="01" label="SELECTED WORK" title={<>Built with purpose.<br /><span className="text-muted">Designed for the real world.</span></>} /><p className="section-aside">Enterprise data, intelligent assistants,<br />and the engineering that connects them.</p></div><div className="projects-grid">{projects.map((project, index) => <article key={project.slug} className={`project-card ${project.featured ? "featured" : ""}`}><Link className="project-art-link" href={`/projects/${project.slug}/`} aria-label={`View ${project.title} case study`} tabIndex={-1}><ProjectVisual visual={project.visual} /></Link><div className="project-body"><div className="project-category mono"><span>{project.category}</span><span>0{index + 1}</span></div><h3><Link href={`/projects/${project.slug}/`}>{project.title}</Link>{project.featured && <span className="featured-tag">FEATURED</span>}</h3><p>{project.description}</p><Tags items={project.technologies.slice(0, 5)} /><div className="project-card-footer"><span>{project.features.slice(0, 2).join(" · ")}</span><Link href={`/projects/${project.slug}/`} aria-label={`View ${project.title} case study`}>View case study <span className="link-plus">+</span></Link></div></div></article>)}</div></section>;
}
