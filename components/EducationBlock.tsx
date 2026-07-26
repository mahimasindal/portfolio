import { education } from "@/lib/content";

export default function EducationBlock() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div>
        <h3 className="font-display text-lg font-semibold">{education.school}</h3>
        <p className="mb-1 text-[15px] text-foreground/85">{education.degree}</p>
        <p className="font-mono text-xs text-muted">{education.dates}</p>
      </div>
      <div className="flex flex-col gap-3 text-sm text-foreground/85">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
            Languages
          </span>
          <p>{education.languages}</p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
            Certification
          </span>
          <p>{education.certification}</p>
        </div>
      </div>
    </div>
  );
}
