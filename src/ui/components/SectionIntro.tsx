type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
}: SectionIntroProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-petrol-600 dark:text-petrol-300">
        {eyebrow}
      </p>
      <h1 className="title-display mt-2 text-4xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-[color:var(--text-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
