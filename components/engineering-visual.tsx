import { Braces, Database, Layers3, Sparkles, Workflow } from "lucide-react";

export function EngineeringVisual() {
  return <div className="engineering-visual" role="img" aria-label="An abstract system diagram connecting interfaces, APIs, enterprise data, and AI orchestration.">
    <div className="diagram-caption mono"><span className="tiny-cross">+</span> SYSTEM ARCHITECTURE <span>FIG. 001</span></div>
    <div className="diagram-grid" />
    <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
    <svg className="connections" viewBox="0 0 520 440" fill="none" aria-hidden="true"><defs><linearGradient id="connection-gradient"><stop stopColor="#40dbc3" stopOpacity=".12" /><stop offset=".5" stopColor="#40dbc3" stopOpacity=".8" /><stop offset="1" stopColor="#40dbc3" stopOpacity=".15" /></linearGradient></defs><g stroke="url(#connection-gradient)" strokeWidth="1"><path d="M260 220 L120 100 M260 220 L409 122 M260 220 L104 295 M260 220 L412 315 M260 220 L260 381" /><path className="signal-line" d="M120 100 L260 220 L412 315" /><path className="signal-line signal-delay" d="M409 122 L260 220 L104 295" /></g><g fill="#54dcc5"><circle cx="185" cy="155" r="3" /><circle cx="339" cy="169" r="2.5" /><circle cx="340" cy="269" r="3" /><circle cx="182" cy="258" r="2.5" /></g></svg>
    <div className="core-node"><div className="core-top mono">INTELLIGENCE LAYER</div><div className="core-glyph"><span /><span /><span /><span /></div><strong>AI</strong><span className="core-bottom mono">REASON · CONNECT · BUILD</span></div>
    <div className="satellite satellite-ui"><span className="satellite-icon"><Layers3 size={21} /></span><div><strong>Interface</strong><span>Angular · React</span></div><span className="node-port" /></div>
    <div className="satellite satellite-agent"><span className="satellite-icon"><Workflow size={21} /></span><div><strong>Agents</strong><span>LangGraph</span></div><span className="node-port" /></div>
    <div className="satellite satellite-api"><span className="satellite-icon"><Braces size={21} /></span><div><strong>Backend</strong><span>Node.js · Python</span></div><span className="node-port" /></div>
    <div className="satellite satellite-data"><span className="satellite-icon"><Database size={21} /></span><div><strong>Data</strong><span>PostgreSQL</span></div><span className="node-port" /></div>
    <div className="diagram-output mono"><Sparkles size={13} /> INTELLIGENT APPLICATIONS</div>
    <div className="diagram-bottom mono"><span>HUMAN INTENT</span><span className="diagram-bottom-line" /><span>MEANINGFUL OUTPUT</span></div>
  </div>;
}
