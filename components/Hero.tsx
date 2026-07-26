import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { profile } from "@/lib/content";
import TaglineRotator from "@/components/TaglineRotator";

const PHOTO_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

function findPhoto(): string | null {
  for (const ext of PHOTO_EXTENSIONS) {
    if (fs.existsSync(path.join(process.cwd(), "public", `photo.${ext}`))) {
      return `/photo.${ext}`;
    }
  }
  return null;
}

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export default function Hero() {
  const photoSrc = findPhoto() ?? "/333333.png";

  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pb-16 pt-14 sm:pt-20">
      <div className="grid items-center gap-12 sm:grid-cols-[1.15fr_0.85fr] sm:gap-10">
        <div className="animate-fade-up">
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent-soft">
            {profile.title} · {profile.location}
          </p>
          <h1 className="mb-6 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl">
            {profile.headline}
          </h1>
          <p className="mb-6 max-w-xl text-[17px] leading-relaxed text-foreground/80">
            {profile.summary}
          </p>
          <div className="mb-7 min-h-[60px] max-w-xl sm:min-h-[40px]">
            <TaglineRotator />
          </div>
          <div className="mb-7 flex flex-wrap gap-3">
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-opacity hover:opacity-90"
            >
              View Résumé
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-foreground/25 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
            >
              Email Me
            </a>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted">
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
            <span aria-hidden>·</span>
            <span>{profile.openTo}</span>
          </div>
        </div>

        <div className="animate-fade-up relative mx-auto aspect-[4/5] w-full max-w-[280px] [animation-delay:150ms] sm:max-w-none">
          <div aria-hidden className="absolute -inset-4 sm:-inset-6">
            <div className="absolute left-[6%] top-[2%] h-32 w-32 rotate-6 rounded-[60%_40%_55%_45%/55%_45%_60%_40%] bg-accent opacity-85 sm:h-44 sm:w-44" />
            <div className="absolute bottom-[8%] left-[-2%] h-28 w-28 -rotate-12 rounded-[45%_55%_40%_60%/50%_60%_40%_50%] bg-accent-soft opacity-85 sm:h-36 sm:w-36" />
            <div className="absolute right-[2%] top-[20%] h-24 w-24 rotate-12 rounded-[50%_50%_60%_40%/60%_40%_50%_50%] bg-accent-warm opacity-90 sm:h-32 sm:w-32" />
            <div className="absolute bottom-[4%] right-[14%] h-16 w-16 rounded-full bg-accent-soft/70 sm:h-20 sm:w-20" />
          </div>
          {photoSrc ? (
            <Image
              src={photoSrc}
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 640px) 320px, 260px"
              className="relative z-10 object-contain drop-shadow-xl"
              priority
            />
          ) : (
            <div className="relative z-10 flex h-full w-full items-center justify-center">
              <span className="font-display text-6xl font-semibold text-foreground">
                {initials}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
