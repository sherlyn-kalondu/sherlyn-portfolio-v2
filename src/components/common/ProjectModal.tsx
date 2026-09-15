import { useEffect, useRef } from "react";
import { Globe, X } from "lucide-react";
import type { Project } from "../../data/projects";
import Badge from "./Badge";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="project-modal-title" className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:flex sm:items-center sm:justify-center">
      <button type="button" aria-label="Close project details" className="fixed inset-0 cursor-default" onClick={onClose} style={{ background: "rgb(0 0 0 / 0.58)" }} />

      <div className="relative mx-auto w-full max-w-2xl rounded-md p-6 sm:p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-primary)" }}>
        <button ref={closeButtonRef} type="button" aria-label="Close project details" onClick={onClose} className="modal-close absolute right-4 top-4 rounded p-2" style={{ color: "var(--text-primary)" }}>
          <X size={20} aria-hidden="true" />
        </button>

        <header>
          <p className="pr-10 text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--olive)" }}>{project.category}</p>
          <h2 id="project-modal-title" className="mt-2 pr-10 text-3xl font-bold tracking-tight">{project.title}</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full px-3 py-1 font-semibold" style={{ background: project.status === "In Progress" ? "var(--status-progress-bg)" : project.status === "Completed" ? "var(--status-complete-bg)" : "var(--offwhite)", color: project.status === "In Progress" ? "var(--accent)" : project.status === "Completed" ? "var(--olive)" : "var(--text-primary)" }}>{project.status}</span>
            <span className="rounded-full px-3 py-1" style={{ background: "var(--offwhite)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{project.role}</span>
          </div>
        </header>

        <section className="mt-6">
          <h3 className="text-lg font-semibold">Overview</h3>
          <p className="mt-2 leading-7" style={{ color: "var(--text-muted)" }}>{project.description}</p>
        </section>

        {project.features && project.features.length > 0 && <section className="mt-7"><h3 className="text-lg font-semibold">Key focus</h3><ul className="mt-3 grid gap-2 sm:grid-cols-2">{project.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm leading-6" style={{ color: "var(--text-muted)" }}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />{feature}</li>)}</ul></section>}

        {project.tags && project.tags.length > 0 && (
          <section className="mt-6">
            <h3 className="text-lg font-semibold">Technologies</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </section>
        )}

        {project.repositoryNote && <p className="mt-5 text-sm leading-6" style={{ color: "var(--text-muted)" }}>{project.repositoryNote}</p>}

        <footer className="mt-8 flex flex-wrap justify-end gap-3 border-t pt-5" style={{ borderColor: "var(--border)" }}>
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center rounded-xl px-4 py-2 font-medium"><Globe className="mr-2" size={17} />View on GitHub</a>}
          <button type="button" onClick={onClose} className="btn-outline rounded-xl px-4 py-2 font-medium">Close</button>
        </footer>
      </div>
    </div>
  );
}
