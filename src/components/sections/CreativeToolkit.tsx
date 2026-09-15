import { useCallback, useState } from "react";
import { designWorks, type DesignWork } from "../../data/creative";
import DesignLightbox from "../common/DesignLightbox";
import SectionHeading from "../common/SectionHeading";

function CreativeToolkit() {
  const [activeWork, setActiveWork] = useState<DesignWork | null>(null);
  const closeLightbox = useCallback(() => setActiveWork(null), []);
  const categories = ["Brand Identity", "Promotional Design", "Merchandise / Branding"] as const;

  return (
    <section id="design" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visual & Brand Design"
          title="Designing identities beyond the code."
          description="I also create visual assets for brands, events, and digital experiences — from logos and promotional posters to branded merchandise."
        />

        <div className="space-y-10">
          {categories.map((category) => {
            const works = designWorks.filter((work) => work.category === category);
            const frameClass = category === "Brand Identity" ? "aspect-square" : category === "Promotional Design" ? "aspect-[3/4]" : "aspect-[4/3]";
            const gridClass = category === "Brand Identity" ? "grid-cols-2 sm:grid-cols-3" : category === "Promotional Design" ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2";

            return (
              <div key={category}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--olive)" }}>{category}</p>
                <div className={`grid gap-3 sm:gap-5 ${gridClass}`}>
                  {works.map((work) => (
                    <button key={work.image} type="button" onClick={() => setActiveWork(work)} className={`group relative overflow-hidden rounded-sm border text-left transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 ${frameClass}`} style={{ background: "var(--surface)", borderColor: "var(--border)" }} aria-label={`Open preview for ${work.title}, ${work.category}`}>
                      <img src={work.image} alt={work.alt} className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02] sm:p-5" />
                      <span className="absolute inset-x-0 bottom-0 p-3 sm:p-4" style={{ background: "rgb(12 13 14 / 0.82)" }}><span className="block text-sm font-bold text-white">{work.title}</span><span className="mt-0.5 block text-xs text-stone-200">{work.category}</span></span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-6" style={{ color: "var(--text-muted)" }}>Visual design is a complementary part of my practice, helping me contribute to both the functional and visual side of digital projects.</p>
      </div>
      <DesignLightbox work={activeWork} onClose={closeLightbox} />
    </section>
  );
}

export default CreativeToolkit;
