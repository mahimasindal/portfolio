"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-24 border-t border-surface-strong/60 py-16 transition-all duration-700 ease-out sm:py-20 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent-soft">
            {label}
          </span>
          <span className="h-px flex-1 bg-surface-strong/80" />
        </div>
        <h2 className="mb-10 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
