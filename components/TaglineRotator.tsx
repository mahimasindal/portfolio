"use client";

import { useEffect, useRef, useState } from "react";
import { taglines } from "@/lib/content";

export default function TaglineRotator() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      timeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % taglines.length);
        setVisible(true);
      }, 300);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <p
      className={`font-mono text-sm text-accent-soft transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      » {taglines[index]}
    </p>
  );
}
