import Link from "next/link";
import { MapPin, MoveDown } from "lucide-react";
import { EngineeringVisual } from "@/components/engineering-visual";

export function Hero() {
  return <section className="hero container" id="home" aria-labelledby="hero-title">
    <div className="hero-content">
      <div className="availability"><span className="status-dot" />Open to AI / Full-Stack opportunities</div>
      <p className="hero-intro mono">HELLO, I’M ANISH AVINABA MUDULI</p>
      <h1 id="hero-title">Engineering<br />the <span className="intelligent-word">intelligent<span className="word-underline" /></span><br />side of software<span className="accent">.</span></h1>
      <p className="hero-description">AI-focused. Full-stack grounded. I build thoughtful interfaces, connected data systems, and applications that do more.</p>
      <div className="hero-buttons"><Link className="button button-primary" href="#projects">Explore my work</Link><Link className="button button-secondary" href="#contact">Let’s connect</Link></div>
      <div className="hero-meta"><span><MapPin size={14} />Bhubaneswar, India</span><span className="meta-divider" /><span>1+ year building enterprise software</span></div>
    </div>
    <EngineeringVisual />
    <div className="hero-footnote"><span className="mono">FULL-STACK FOUNDATIONS. AI-DRIVEN POSSIBILITIES.</span><a href="#projects" aria-label="Scroll to selected projects"><span className="mono">SCROLL TO EXPLORE</span><MoveDown size={15} /></a></div>
  </section>;
}
