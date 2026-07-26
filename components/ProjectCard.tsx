import type { ProjectEntry } from "@/lib/content";

export default function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <article className="rounded-2xl bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="font-display text-lg font-semibold">{project.name}</h3>
      <p className="mb-3 text-sm font-semibold text-accent-soft">{project.tagline}</p>
      <p className="mb-5 text-[15px] leading-relaxed text-foreground/85">{project.description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-background px-2 py-1 font-mono text-xs text-foreground/75"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.link ? (
        <a
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:text-accent-soft"
        >
          ↗ {project.link.text}
        </a>
      ) : null}
    </article>
  );
}
