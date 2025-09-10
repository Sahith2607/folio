"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  targetValue: number;
  duration?: number;
}

export default function AnimatedCounter({
  targetValue,
  duration = 2000,
}: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number | null = null;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            setCurrentValue(Math.floor(targetValue * percentage));
            if (progress < duration) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [targetValue, duration]);

  return <span ref={ref}>{currentValue}</span>;
}
