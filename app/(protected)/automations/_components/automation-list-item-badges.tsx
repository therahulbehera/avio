"use client";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

export default function AutomationListItemTag({ items }: { items: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(items.length);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const calculate = () => {
      let used = 0;
      let count = 0;

      for (const child of container.children) {
        const w = child.getBoundingClientRect().width;
        if (used + w > container.clientWidth) break;
        used += w;
        count++;
      }

      // remove 1 for the +N placeholder if needed
      if (count < items.length) count = Math.max(0, count - 1);

      setVisibleCount(count);
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [items]);

  const hidden = items.length - visibleCount;

  return (
    <div
      ref={containerRef}
      className="flex gap-2 max-w-64 md:max-w-96 overflow-hidden"
    >
      {items.slice(0, visibleCount).map((t, i) => (
        <Button
          variant={"outline"}
          key={i}
          className="px-2 rounded-full h-6 text-[12px] border"
        >
          {t}
        </Button>
      ))}

      {hidden > 0 && (
        <span className="px-2 rounded-full h-6 text-[12px] border flex items-center">
          +{hidden}
        </span>
      )}
    </div>
  );
}
