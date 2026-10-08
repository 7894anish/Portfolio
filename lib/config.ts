// Replace these values or set the matching public environment variables.
// Unknown personal details are deliberately left empty.
export const siteConfig = {
  name: "Anish Avinaba Muduli",
  shortName: "Anish",
  title: "AI Developer & Full-Stack Engineer",
  location: "Bhubaneswar, Odisha, India",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  resumeUrl: "/resume.pdf",
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "",
  description: "Portfolio of Anish Avinaba Muduli, an AI-focused Full-Stack Developer building intelligent enterprise applications with Angular, TypeScript, Node.js, Python, LangChain, LangGraph, and PostgreSQL.",
};
