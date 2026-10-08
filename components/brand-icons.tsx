import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

// Brand marks are kept separate from Lucide's interface icon set.
export function Github({ size = 16, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M12 .8a11.3 11.3 0 0 0-3.57 22c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.26-1.65-1.26-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.64 1.22 3.28.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.58 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.69.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.34-2.63 5.3-5.14 5.58.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .8Z" /></svg>;
}

export function Linkedin({ size = 16, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M12 17v-7m0 3a3 3 0 0 1 6 0v4" /><circle cx="8" cy="7.2" r=".6" fill="currentColor" stroke="none" /></svg>;
}
