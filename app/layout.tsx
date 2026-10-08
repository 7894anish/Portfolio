import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | ${siteConfig.title}`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  openGraph: { type: "website", locale: "en_IN", siteName: `${siteConfig.name} — Portfolio`, title: `${siteConfig.name} | ${siteConfig.title}`, description: siteConfig.description },
  twitter: { card: "summary", title: `${siteConfig.name} | ${siteConfig.title}`, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: "try{document.documentElement.dataset.theme=localStorage.getItem('anish-theme')==='light'?'light':'dark'}catch(e){}" }} /></head><body><a className="skip-link" href="#main-content">Skip to content</a><Navbar />{children}<Footer /></body></html>;
}
