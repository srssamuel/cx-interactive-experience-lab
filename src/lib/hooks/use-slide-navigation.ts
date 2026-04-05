"use client";

import { useState, useCallback, useEffect } from "react";

interface UseSlideNavigationOptions {
  totalSlides: number;
}

export function useSlideNavigation({ totalSlides }: UseSlideNavigationOptions) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = back, 1 = forward

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides || index === current) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current, totalSlides]
  );

  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't capture if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "Enter":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "Backspace":
          e.preventDefault();
          prev();
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(totalSlides - 1);
          break;
        default:
          // Number keys 1-9 for quick jump
          if (/^[1-9]$/.test(e.key)) {
            const target = parseInt(e.key, 10) - 1;
            if (target < totalSlides) {
              e.preventDefault();
              goTo(target);
            }
          }
          // 'f' for fullscreen
          if (e.key === "f" || e.key === "F") {
            e.preventDefault();
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              document.documentElement.requestFullscreen();
            }
          }
          break;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, goTo, totalSlides]);

  // Touch/swipe
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;

      // Only horizontal swipes (not vertical scroll)
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) next();
        else prev();
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [next, prev]);

  return {
    current,
    direction,
    next,
    prev,
    goTo,
    isFirst: current === 0,
    isLast: current === totalSlides - 1,
    progress: totalSlides > 1 ? current / (totalSlides - 1) : 0,
    totalSlides,
  };
}
