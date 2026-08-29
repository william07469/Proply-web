import { useEffect, useRef } from "react";
import { reveal } from "scroll-craft";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const stop = reveal(ref.current, {
      direction: "up",
      distance: "20px",
      duration: 600,
      ease: [0.22, 1, 0.36, 1],
      delay,
      threshold: 0.1,
      once: true,
    });
    return stop;
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
