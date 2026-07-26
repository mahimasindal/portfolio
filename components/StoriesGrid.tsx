import { stories } from "@/lib/content";

export default function StoriesGrid() {
  return (
    <div className="divide-y divide-surface-strong/60">
      {stories.map((story, index) => (
        <div key={story.title} className="flex gap-6 py-6 first:pt-0 last:pb-0">
          <span className="font-mono text-sm text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="mb-2 font-display text-lg font-semibold">{story.title}</h3>
            <p className="max-w-2xl text-[15px] leading-relaxed text-foreground/80">{story.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
