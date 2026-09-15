interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl mb-12">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--olive)" }}>
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-serif tracking-tight text-slate-950 dark:text-white md:text-4xl" style={{ color: "var(--text-primary)" }}>
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;