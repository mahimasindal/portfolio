import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-surface-strong/60 bg-surface/60">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent-soft">
          Get in touch
        </p>
        <h2 className="mb-6 font-display text-3xl font-semibold sm:text-4xl">
          Turning prototypes into production.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition-opacity hover:opacity-90"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex justify-center gap-x-4 font-mono text-xs text-muted">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <span aria-hidden>·</span>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <span aria-hidden>·</span>
          <a
            href={profile.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LeetCode
          </a>
        </div>
        <p className="mt-10 text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
