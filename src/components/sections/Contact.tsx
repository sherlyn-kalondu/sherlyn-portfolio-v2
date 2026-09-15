import { ArrowUpRight, Download, Globe, Mail } from "lucide-react";
import Button from "../common/Button";

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl px-6 py-12 sm:p-12 lg:flex lg:items-end lg:justify-between lg:p-16" style={{ background: "var(--surface)", color: "var(--text-primary)" }}>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--olive)" }}>Let&apos;s connect</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ color: "var(--text-primary)" }}>Have a project or opportunity in mind?</h2>
          <p className="mt-5 max-w-xl text-lg leading-8" style={{ color: "var(--text-muted)" }}>I&apos;m open to junior developer opportunities, internships, software development roles, and practical web projects.</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
          <Button href="mailto:sherlynkalondu4@gmail.com"><Mail className="mr-2" size={18} />Email Me</Button>
          <a className="inline-flex items-center rounded-xl border px-4 py-3 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2" href="https://www.linkedin.com/in/sherlyn-kalondu/" target="_blank" rel="noopener noreferrer" style={{ borderColor: "rgba(0,0,0,0.06)", color: "var(--text-primary)" }}>LinkedIn <ArrowUpRight className="ml-2" size={18} /></a>
          <a className="inline-flex items-center rounded-xl border px-4 py-3 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2" href="https://github.com/sherlyn-kalondu" target="_blank" rel="noopener noreferrer" style={{ borderColor: "rgba(0,0,0,0.06)", color: "var(--text-primary)" }}><Globe className="mr-2" size={18} />GitHub</a>
          <Button variant="outline" href="/Sherlyn-Kalondu-CV.pdf" download><Download className="mr-2" size={18} />Download CV</Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
