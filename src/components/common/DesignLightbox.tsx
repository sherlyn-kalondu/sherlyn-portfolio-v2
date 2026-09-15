import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { DesignWork } from "../../data/creative";

interface DesignLightboxProps {
  work: DesignWork | null;
  onClose: () => void;
}

function DesignLightbox({ work, onClose }: DesignLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!work) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, work]);

  if (!work) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="design-lightbox-title" className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:flex sm:items-center sm:justify-center">
      <button type="button" aria-label="Close image preview" className="fixed inset-0 cursor-default" onClick={onClose} style={{ background: "rgb(0 0 0 / 0.68)" }} />
      <figure className="relative mx-auto w-full max-w-4xl rounded-md p-4 sm:p-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
        <button ref={closeButtonRef} type="button" aria-label="Close image preview" onClick={onClose} className="modal-close absolute right-5 top-5 z-10 rounded p-2" style={{ background: "var(--surface)", color: "var(--text-primary)", border: "1px solid var(--border)" }}><X size={20} aria-hidden="true" /></button>
        <div className="flex min-h-72 items-center justify-center overflow-hidden rounded-sm" style={{ background: "var(--offwhite)" }}><img src={work.image} alt={work.alt} className="max-h-[70vh] w-full object-contain" /></div>
        <figcaption className="flex flex-col gap-1 pt-4 sm:flex-row sm:items-baseline sm:justify-between"><h2 id="design-lightbox-title" className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{work.title}</h2><p className="text-sm font-semibold" style={{ color: "var(--olive)" }}>{work.category}</p></figcaption>
      </figure>
    </div>
  );
}

export default DesignLightbox;
