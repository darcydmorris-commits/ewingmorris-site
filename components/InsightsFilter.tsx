"use client";

import { useMemo, useState } from "react";
import styles from "./InsightsFilter.module.css";

type Entry = {
  date: string;
  category: string;
  title: string;
  description: string;
};

type InsightsFilterProps = {
  categories: string[];
  entries: Entry[];
};

export function InsightsFilter({ categories, entries }: InsightsFilterProps) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") {
      return entries;
    }

    return entries.filter((entry) => entry.category === active);
  }, [active, entries]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs} role="tablist" aria-label="Insight categories">
        {categories.map((category) => {
          const selected = category === active;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`${styles.tab} ${selected ? styles.active : ""}`}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className={styles.list}>
        {filtered.map((entry) => (
          <article key={`${entry.title}-${entry.category}`} className={styles.row}>
            <p className={styles.date}>{entry.date}</p>
            <p className={styles.category}>{entry.category}</p>
            <h3 className={styles.title}>{entry.title}</h3>
            <p className={styles.description}>{entry.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
