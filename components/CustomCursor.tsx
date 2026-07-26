"use client";

import { useEffect, useRef, useState } from "react";

const TRAIL_COUNT = 5;
const SIZES = [30, 26, 22, 18, 14];
const OPACITIES = [0.85, 0.72, 0.6, 0.5, 0.4];
const COLORS = ["bg-accent", "bg-accent-warm", "bg-accent-soft", "bg-accent", "bg-accent-warm"];
const SHAPES = [
  "60% 40% 55% 45% / 55% 45% 60% 40%",
  "45% 55% 40% 60% / 50% 60% 40% 50%",
  "50% 50% 60% 40% / 60% 40% 50% 50%",
  "40% 60% 45% 55% / 45% 55% 50% 50%",
  "55% 45% 50% 50% / 40% 60% 45% 55%",
];
const ROTATIONS = [8, -14, 20, -6, 12];
const EASE = [0.35, 0.26, 0.2, 0.16, 0.12];
const SPLAT_COLORS = ["bg-accent", "bg-accent-soft", "bg-accent-warm"];

type Splat = { id: number; x: number; y: number; color: string; size: number; shape: string };

export default function CustomCursor() {
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [splats, setSplats] = useState<Splat[]>([]);
  const splatId = useRef(0);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const trail = Array.from({ length: TRAIL_COUNT }, () => ({ ...mouse }));

    const handleMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleDown = (e: MouseEvent) => {
      const id = splatId.current++;
      const color = SPLAT_COLORS[id % SPLAT_COLORS.length];
      const shape = SHAPES[id % SHAPES.length];
      const size = 44 + Math.random() * 22;
      setSplats((prev) => [...prev, { id, x: e.clientX, y: e.clientY, color, size, shape }]);
      setTimeout(() => {
        setSplats((prev) => prev.filter((s) => s.id !== id));
      }, 650);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    let frame: number;
    const animate = () => {
      let targetX = mouse.x;
      let targetY = mouse.y;
      trail.forEach((point, i) => {
        point.x += (targetX - point.x) * EASE[i];
        point.y += (targetY - point.y) * EASE[i];
        targetX = point.x;
        targetY = point.y;
        const el = trailRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%) rotate(${ROTATIONS[i]}deg)`;
        }
      });
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        className={`pointer-events-none fixed inset-0 z-[100] transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              trailRefs.current[i] = el;
            }}
            className={`absolute left-0 top-0 ${COLORS[i]}`}
            style={{
              width: SIZES[i],
              height: SIZES[i],
              opacity: OPACITIES[i],
              borderRadius: SHAPES[i],
            }}
          />
        ))}
      </div>
      {splats.map((s) => (
        <div
          key={s.id}
          className={`animate-cursor-splat pointer-events-none fixed z-[100] ${s.color}`}
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            borderRadius: s.shape,
          }}
        />
      ))}
    </>
  );
}
