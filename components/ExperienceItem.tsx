import type { ExperienceEntry } from "@/lib/content";

export default function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="border-l-2 border-surface-strong pl-6 [&:not(:last-child)]:mb-14">
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-xl font-semibold">{entry.role}</h3>
        <span className="font-mono text-xs text-muted">{entry.dates}</span>
      </div>
      <p className="mb-6 text-sm font-semibold text-accent-soft">{entry.org}</p>

      {entry.stats ? (
        <div className="mb-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-surface-strong/70 py-5 sm:grid-cols-4">
          {entry.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-2xl font-semibold tabular-nums text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        {entry.bullets.map((bullet) => (
          <div
            key={bullet.label}
            className="rounded-xl bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="mb-1.5 text-sm font-semibold text-foreground">{bullet.label}</p>
            <p className="text-[14px] leading-relaxed text-foreground/80">{bullet.detail}</p>
            {bullet.link ? (
              <a
                href={bullet.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 rounded-md bg-background px-2 py-1 font-mono text-xs text-accent hover:text-accent-soft"
              >
                ↗ {bullet.link.text}
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </article>
  );
}
