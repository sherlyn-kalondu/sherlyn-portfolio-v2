import { ArrowUpRight, Globe } from "lucide-react";
import { androidAppsRepository, projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import Badge from "../common/Badge";
import Card from "../common/Card";
import SectionHeading from "../common/SectionHeading";
import { useCallback, useState, type KeyboardEvent } from "react";
import ProjectModal from "../common/ProjectModal";

function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const closeModal = useCallback(() => setActive(null), []);

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Selected work" title="Building systems around real workflows." description="Projects that reflect the work I&apos;m learning through and contributing to." />
      <a href={androidAppsRepository} target="_blank" rel="noopener noreferrer" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold underline decoration-[var(--accent)] underline-offset-4" style={{ color: "var(--text-primary)" }}><Globe size={16} />View Android apps repository</a>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="project-card group flex min-h-80 cursor-pointer flex-col p-7 transition-transform hover:-translate-y-1 hover:border-[var(--accent)]"
            style={ project.featured ? { borderColor: 'var(--accent)' } : undefined }
            tabIndex={0}
            role="button"
            onClick={() => setActive(project)}
            onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(project); } }}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-sm" style={{ color: "var(--olive)" }}>0{index + 1}</span>

              <div className="flex items-center gap-3">
                <span
                  className="rounded-full px-2.5 py-1 text-xs font-semibold"
                  style={{
                    background: project.status === "In Progress" ? "var(--status-progress-bg)" : project.status === "Completed" ? "var(--status-complete-bg)" : "var(--offwhite)",
                    color: project.status === "In Progress" ? "var(--accent)" : project.status === "Completed" ? "var(--olive)" : "var(--text-primary)",
                  }}
                >
                  {project.status}
                </span>

                <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" style={{ color: "var(--text-primary)" }} />
              </div>
            </div>

            <div className="mt-auto">
              <p className="text-sm font-semibold" style={{ color: "var(--olive)" }}>{project.role}</p>
              <h3 className="mt-3 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
              <p className="mt-3 leading-7" style={{ color: "var(--text-muted)" }}>{project.description}</p>

              {project.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
      <ProjectModal project={active} onClose={closeModal} />
    </div></section>
  );
}

export default Projects;
