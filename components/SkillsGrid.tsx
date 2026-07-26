import { skills } from "@/lib/content";

export default function SkillsGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {skills.map((group) => (
        <div key={group.category}>
          <h3 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.1em] text-muted">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-md bg-surface px-2.5 py-1 text-sm text-foreground/85 transition-colors duration-200 hover:bg-surface-strong"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
