import { experience } from "../../data/experience";
import SectionHeading from "../common/SectionHeading";

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-20 dark:bg-slate-900/40 lg:px-8" style={{ background: 'var(--offwhite)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Experience" title="Learning by building useful things." />

        <div className="max-w-3xl border-l border-slate-200 pl-6 dark:border-slate-700">
          {experience.map((item) => (
            <article key={item.title} className="relative pb-10 last:pb-0">
              <span className="absolute left-[-1.92rem] top-1 h-3 w-3 rounded-full" style={{ border: "2px solid var(--surface)", background: "var(--accent)" }} />
              <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>{item.period}</p>
              <h3 className="mt-2 text-xl font-bold" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
              <p className="mt-3 leading-7" style={{ color: "var(--text-muted)" }}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
