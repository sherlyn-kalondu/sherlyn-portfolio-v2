import { ArrowDown, ArrowRight, Download, Globe, Mail, Send } from "lucide-react";
import Button from "../common/Button";

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-20 sm:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Editorial layout: removed decorative blobs and gradients */}
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                Hello, I&apos;m
              </p>
            </div>

            <h1 className="text-5xl leading-tight tracking-tight sm:text-6xl lg:text-6xl xl:text-7xl">
              <span className="block text-4xl font-serif text-slate-700">Sherlyn</span>
              <span className="block text-6xl font-extrabold" style={{ color: "var(--text-primary)" }}>Kalondu.</span>
            </h1>

            <h2 className="mt-7 max-w-xl text-2xl font-semibold leading-tight text-slate-800 dark:text-slate-200 sm:text-3xl">
              Building software that solves real business problems.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
              Final-year BSc Information Technology student at Maseno University, building practical software with React, TypeScript, Django, and PostgreSQL.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects">
                Explore My Work
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Button>
              <Button variant="outline" href="#contact">Let&apos;s Talk</Button>
              <Button variant="outline" href="/Sherlyn-Kalondu-CV.pdf" download>
                <Download className="mr-2" size={18} />Download CV
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-2" aria-label="Social links">
              <a href="https://github.com/sherlyn-kalondu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">
                <Globe size={21} />
              </a>
              <a href="https://www.linkedin.com/in/sherlyn-kalondu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">
                <Send size={21} />
              </a>
              <a href="mailto:sherlynkalondu4@gmail.com" aria-label="Email" className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">
                <Mail size={21} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
            <div className="relative mx-auto w-56 overflow-hidden rounded-none border border-slate-200 thin-card sm:w-64 lg:w-72" style={{ aspectRatio: '4 / 5', background: 'var(--surface)' }}>
              <img
                src="/sherlyn-profile.jpg"
                alt="Sherlyn Kalondu seated in an office"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-[48%_22%]"
              />
              {/* overlay removed for cleaner editorial composition */}
            </div>

            <div className="relative z-10 mx-auto mt-4 w-[calc(100%-1rem)] rounded-none border border-slate-200 bg-surface p-5 sm:w-[calc(100%-2rem)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--accent)" }} />
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>Currently Building</span>
                </div>
                <span className="font-mono text-xs text-slate-600 dark:text-slate-400">2026</span>
              </div>
              <p className="mt-4 font-semibold text-slate-900 dark:text-white">HR Management System</p>
              <p className="mt-1 text-sm dark:text-slate-300" style={{ color: 'var(--text-muted)' }}>Full Stack Development</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: 'var(--offwhite)', color: 'var(--text-primary)' }}>Django</span>
                <span className="rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: 'var(--offwhite)', color: 'var(--text-primary)' }}>React</span>
                <span className="rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: 'var(--offwhite)', color: 'var(--text-primary)' }}>PostgreSQL</span>
              </div>
            </div>

            <div className="absolute right-0 top-10 rounded-full px-3 py-1.5 text-xs font-semibold sm:right-2" style={{ border: '1px solid rgba(0,0,0,0.06)', background: 'var(--surface)', color: 'var(--text-primary)' }}>
              React &bull; Django
            </div>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to About section" className="relative mx-auto mb-6 mt-2 block w-fit text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:text-white sm:absolute sm:bottom-8 sm:left-1/2 sm:mb-0 sm:mt-0 sm:-translate-x-1/2">
        <ArrowDown className="motion-safe:animate-bounce" size={20} />
      </a>
    </section>
  );
}

export default Hero;
