import { useCallback, useEffect, useRef, useState } from "react";

const TOP_OFFSET = 40;

function throttle<T extends (...args: unknown[]) => void>(fn: T, wait = 150) {
  let last = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    const remaining = wait - (now - last);
    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      last = now;
      fn(...args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        last = Date.now();
        timeout = null;
        fn(...args);
      }, remaining);
    }
  };
}

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | undefined>(undefined);
  const handlerRef = useRef<((...args: unknown[]) => void) | null>(null);

  const isPartiallyVisible = useCallback((el: Element) => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > TOP_OFFSET;
  }, []);

  const checkVisibility = useCallback(() => {
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (isPartiallyVisible(el)) {
        setActiveId((prev) => (prev === id ? prev : id));
        return;
      }
    }
    setActiveId(undefined);
  }, [sectionIds, isPartiallyVisible]);

  useEffect(() => {
    handlerRef.current = throttle(checkVisibility, 150);
    const handler = handlerRef.current!;
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler, { passive: true });
    window.addEventListener("orientationchange", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
      window.removeEventListener("orientationchange", handler);
    };
  }, [checkVisibility]);

  return activeId;
}
