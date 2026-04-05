"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * Animated counter: tweens from 0 to target using GSAP.
 * Returns the current animated value.
 */
export function useCountUp(
  target: number,
  options?: { duration?: number; decimals?: number; delay?: number }
) {
  const { duration = 2, decimals = 0, delay = 0.4 } = options || {};
  const [value, setValue] = useState(0);
  const obj = useRef({ val: 0 });
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValue(target);
        return;
      }
      obj.current.val = 0;
      gsap.to(obj.current, {
        val: target,
        duration,
        delay,
        ease: "power3.out",
        onUpdate: () => {
          setValue(Number(obj.current.val.toFixed(decimals)));
        },
      });
    },
    { dependencies: [target], scope }
  );

  return { value, scope };
}

/**
 * Parse a stat string like "$75B", "73%", "4.7x" into parts.
 * Returns null if not parseable (e.g. "5-25x").
 */
export function parseStat(stat: string) {
  const match = stat.match(/^([^0-9]*)(\d+\.?\d*)(.*)$/);
  if (!match) return null;
  const value = parseFloat(match[2]);
  if (isNaN(value)) return null;
  return {
    prefix: match[1],
    value,
    suffix: match[3],
    decimals: match[2].includes(".") ? match[2].split(".")[1].length : 0,
  };
}
