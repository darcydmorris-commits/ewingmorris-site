"use client";

import type { ReactNode } from "react";
import { Children, useEffect, useRef, useState } from "react";
import styles from "./ScrollReveal.module.css";

type ScrollRevealProps = {
  children: ReactNode;
  stagger?: boolean;
  className?: string;
};

export function ScrollReveal({ children, stagger = false, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!stagger) {
    return <div ref={ref} className={`${styles.reveal} ${visible ? styles.visible : ""} ${className ?? ""}`}>{children}</div>;
  }

  return (
    <div ref={ref} className={`${styles.group} ${visible ? styles.visible : ""} ${className ?? ""}`}>
      {Children.toArray(children).map((child, index) => (
        <div key={index} className={styles.item}>
          {child}
        </div>
      ))}
    </div>
  );
}
