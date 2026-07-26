import { personality } from "@/lib/content";

export default function PersonalityBlock() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div className="rounded-2xl bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.1em] text-accent-soft">
          {personality.reading.status}
        </p>
        <h3 className="font-display text-lg font-semibold">{personality.reading.title}</h3>
        <p className="text-sm text-foreground/75">by {personality.reading.author}</p>
      </div>

      <div>
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.1em] text-muted">
          When I&apos;m not at my desk
        </p>
        <div className="flex flex-wrap gap-3">
          {personality.hobbies.map((hobby) => (
            <span
              key={hobby}
              className="rounded-md bg-surface px-3 py-2 text-sm text-foreground/85 transition-colors duration-200 hover:bg-surface-strong"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
