import type { ReactNode } from "react";

export function SectionHeading({ number, label, title, description }: { number: string; label: string; title: ReactNode; description?: string }) {
  return <div className="section-heading"><div className="eyebrow"><span>{number}</span><span className="small-line" />{label}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function Tags({ items }: { items: string[] }) {
  return <ul className="tags" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}
