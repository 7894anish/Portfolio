import Link from "next/link";
import { ProfileLink } from "@/components/profile-links";

export function Footer() {
  return <footer className="footer container"><div className="footer-top"><Link className="wordmark" href="/#home">anish<span className="accent">.</span></Link><p>AI Developer <span>·</span> Full-Stack Engineer</p><div className="footer-links"><ProfileLink kind="github" /><ProfileLink kind="linkedin" /><ProfileLink kind="email" /><ProfileLink kind="resume" /></div></div><div className="footer-bottom"><span>© 2026 Anish Avinaba Muduli</span><span>Bhubaneswar, India <span className="accent">↗</span></span><span>Thoughtfully designed. Carefully engineered.</span></div></footer>;
}
