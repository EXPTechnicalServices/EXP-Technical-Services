import { useState } from "react";
import { ArrowRight, CheckCircle2, CircuitBoard, Globe2, Wrench, Activity, Factory, FlaskConical, FlameKindling, Mail, MapPin, Phone, ShieldCheck, Timer } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <Logos />
      <Services />
      <Industries />
      <Approach />
      <CaseStudies />
      <About />
      <Certs />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="h-8 w-8 rounded-xl bg-neutral-900 text-white grid place-items-center">
              <CircuitBoard className="h-5 w-5" />
            </div>
            <span>EXP Technical Services</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-neutral-600">Services</a>
            <a href="#industries" className="hover:text-neutral-600">Industries</a>
            <a href="#approach" className="hover:text-neutral-600">Approach</a>
            <a href="#about" className="hover:text-neutral-600">About</a>
            <a href="#contact" className="hover:text-neutral-600">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-white text-sm font-medium hover:bg-neutral-800 active:bg-neutral-900">
            Start a project <ArrowRight className="h-4 w-4"/>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-100 via-white to-neutral-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600 mb-6">
              <ShieldCheck className="h-4 w-4" />
              Controls & automation engineering — USA & abroad
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Industrial controls, SCADA, and automation that scale — without drama
            </h1>
            <p className="mt-5 text-neutral-600 text-lg">
              EXP Technical Services designs, programs, and commissions robust control systems for
              pulp & paper, pharmaceuticals, oil & gas, and industrial chemical manufacturing. We deliver
              modernized PLC/SCADA, safety, and data layers that are rock‑solid and maintainable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-800">
                Request a proposal <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 font-medium hover:bg-neutral-50">
                Explore services
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-neutral-600">
              {[
                { icon: Timer, label: "On‑time commissioning" },
                { icon: ShieldCheck, label: "Validated & documented" },
                { icon: Globe2, label: "Remote + onsite support" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-neutral-200 bg-white shadow-sm p-6 grid">
              <HeroDiagram />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden sm:block">
              <Badge>Rockwell • Siemens • Ignition</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs shadow-sm">{children}</span>
  );
}

function HeroDiagram() {
  const nodes = [
    { label: "PLC / PAC", icon: CircuitBoard },
    { label: "SCADA / HMI", icon: Activity },
    { label: "Historian", icon: Factory },
    { label: "MES / ERP", icon: Wrench },
  ];
  return (
    <div className="grid place-items-center">
      <div className="grid grid-cols-2 gap-6 w-full">
        {nodes.map(({ label, icon: Icon }) => (
          <div key={label} className="rounded-xl border border-neutral-200 p-4 bg-neutral-50/60">
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5" />
              <div className="font-medium">{label}</div>
            </div>
            <p className="mt-2 text-sm text-neutral-600">Vendor‑agnostic design with clear drawings, code standards, and FAT/SAT.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-sm text-neutral-500">Secure, well‑documented layers with change control and versioning.</div>
    </div>
  );
}

function Logos() {
  const list = [
    "Rockwell Automation",
    "Siemens",
    "AVEVA / Wonderware",
    "Ignition",
    "Emerson",
    "Honeywell",
  ];
  return (
    <section className="py-8 border-y border-neutral-200 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Platforms</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-neutral-700">
          {list.map((name) => (
            <div key={name} className="rounded-xl border border-neutral-200 py-3 px-4 text-center bg-neutral-50">{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: CircuitBoard,
      title: "Controls Engineering",
      bullets: ["PLC/PAC architecture", "I/O design & panel builds", "UL 508A partners"],
    },
    {
      icon: Activity,
      title: "SCADA / HMI & Historians",
      bullets: ["Ignition, Wonderware, WinCC", "Alarming & KPIs", "Redundancy & disaster recovery"],
    },
    {
      icon: ShieldCheck,
      title: "Safety & Validation",
      bullets: ["SIL/PL risk assessments", "FAT/SAT & IQ/OQ docs", "Change control"],
    },
    {
      icon: Wrench,
      title: "Modernization & Migrations",
      bullets: ["S5/S7‑300 → 1500, PLC‑5 → ControlLogix", "Serial → Ethernet/IP/Profinet", "Virtualization"],
    },
    {
      icon: Globe2,
      title: "Global Commissioning",
      bullets: ["Remote + onsite startup", "Multi‑language HMIs", "Follow‑the‑sun support"],
    },
    {
      icon: Timer,
      title: "Consulting & Audits",
      bullets: ["Obsolescence roadmaps", "Network & cybersecurity baselines", "Spares & lifecycle"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
          <p className="mt-3 text-neutral-600">Full‑stack control systems — from requirements and drawings to tested, supported code in production.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 hover:shadow-sm">
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5" />
                <h3 className="font-medium">{s.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const industries = [
    { icon: Factory, name: "Pulp & Paper", blurb: "Wet end to finishing — stable loops, better uptime." },
    { icon: FlaskConical, name: "Pharmaceuticals", blurb: "GxP‑ready designs with validation packages." },
    { icon: FlameKindling, name: "Oil & Gas", blurb: "Hazardous area systems, telemetry, custody transfer." },
    { icon: Activity, name: "Industrial Chemicals", blurb: "Batch & continuous — safety first, always." },
  ];
  return (
    <section id="industries" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">Industries</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map(({ icon: Icon, name, blurb }) => (
            <div key={name} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <h3 className="font-medium">{name}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-700">{blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    { title: "Discover", text: "Requirements, P&IDs, standards, risk. No surprises later." },
    { title: "Design", text: "I/O, networks, panels, code standards, test plans." },
    { title: "Develop", text: "Implementation with reviews and version control." },
    { title: "Test", text: "FAT/SAT with clear punch lists and closure." },
    { title: "Commission", text: "Startup support, training, O&M packages." },
    { title: "Sustain", text: "Remote monitoring, patches, and lifecycle plans." },
  ];
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">How we work</h2>
          <p className="mt-3 text-neutral-600">A straight‑through process that keeps scope, quality, and schedule under control.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-xs text-neutral-500">Step {i + 1}</div>
              <h3 className="mt-1 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const items = [
    {
      title: "Paper mill DCS to PLC/SCADA migration",
      result: "28% fewer unplanned trips; complete in 6 weeks shutdown",
    },
    {
      title: "Pharma packaging line validation",
      result: "IQ/OQ executed with zero major deviations",
    },
    {
      title: "Tank farm telemetry rollout (APAC)",
      result: "Secure MQTT over cellular across 12 sites",
    },
  ];
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Selected results</h2>
            <p className="mt-3 text-neutral-600">Brief snapshots. Full references available on request.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-50">Request references</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((c) => (
            <div key={c.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{c.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">About EXP Technical Services</h2>
            <p className="mt-3 text-neutral-700">
              We’re a small, senior team with big‑plant experience. Our sweet spot is pragmatic engineering: the
              smallest change that delivers the biggest reliability and operability gains. We work in the US and
              internationally, and we document everything so your maintenance team isn’t left guessing.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Vendor‑neutral, standards‑driven</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Clear drawings, robust code, clean handover</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Remote support with sensible SLAs</li>
            </ul>
          </div>
          <Stats />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { label: "Projects commissioned", value: "120+" },
    { label: "Plants served", value: "60+" },
    { label: "Countries", value: "8" },
    { label: "Average punchlist closure", value: "< 10 days" },
  ];
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
      <div className="grid grid-cols-2 gap-6">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
            <div className="text-sm text-neutral-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Certs() {
  const certs = [
    "UL 508A Panel Shop (partner)",
    "OSHA 10/30, TWIC where required",
    "GxP / 21 CFR Part 11 aware",
    "TÜV‑informed safety approach",
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <div className="text-xs uppercase tracking-widest text-neutral-500">Capabilities & Qualifications</div>
          <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-neutral-700">
            {certs.map((c) => (
              <li key={c} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Have a controls or automation project?</h2>
            <p className="mt-3 text-neutral-300">Send a short brief — timeline, scope, platforms — and we’ll respond with next steps and a proposed path.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("idle");
  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sent");
  }
  return (
    <form id="contact" onSubmit={handleSubmit} className="rounded-2xl bg-white text-neutral-900 p-6 border border-neutral-700/30">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm">Name</label>
          <input required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input type="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="you@company.com" />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm">Company</label>
        <input className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="Company name" />
      </div>
      <div className="mt-4">
        <label className="text-sm">Project brief</label>
        <textarea rows={4} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="Timeline, scope, platforms (Rockwell, Siemens, Ignition, etc.)"></textarea>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-white font-medium hover:bg-neutral-800">
          Send <ArrowRight className="h-4 w-4" />
        </button>
        {status === "sent" && (
          <span className="text-sm text-green-600 flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Message queued (demo)</span>
        )}
      </div>
      <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm text-neutral-600">
        <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> info@exp‑techservices.com</div>
        <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> +1 (555) 010‑9920</div>
        <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> USA • International</div>
      </div>
    </form>
  );
}

function Footer() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Approach", href: "#approach" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-neutral-900 text-white grid place-items-center">
              <CircuitBoard className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold">EXP Technical Services</div>
              <div className="text-sm text-neutral-600">Controls • SCADA • Automation</div>
            </div>
          </div>
          <nav className="flex gap-6 text-sm">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-neutral-600">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} EXP Technical Services. All rights reserved.</div>
      </div>
    </footer>
  );
}
