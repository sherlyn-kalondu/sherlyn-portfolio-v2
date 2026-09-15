import SectionHeading from "../common/SectionHeading";

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <SectionHeading eyebrow="About me" title="A thoughtful builder for practical software." />
        <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
          <p>I&apos;m Sherlyn Kalondu, a Full Stack Developer and final-year BSc Information Technology student at Maseno University. I enjoy turning real-world workflows into practical software, from business management and HR systems to mobile applications.</p>
          <p>My experience spans React and TypeScript on the frontend, Django and Django REST Framework on the backend, and PostgreSQL for data-driven applications. Through academic projects and software development attachment experience, I&apos;ve worked across both frontend and backend development.</p>
          <div className="grid gap-4 pt-2 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"><p className="text-sm font-semibold text-slate-950 dark:text-white">Based in</p><p className="mt-1">Kenya</p></div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"><p className="text-sm font-semibold text-slate-950 dark:text-white">Education</p><p className="mt-1">BSc Information Technology</p></div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"><p className="text-sm font-semibold text-slate-950 dark:text-white">Focus</p><p className="mt-1">Business Applications</p></div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"><p className="text-sm font-semibold text-slate-950 dark:text-white">Development</p><p className="mt-1">Full Stack</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
