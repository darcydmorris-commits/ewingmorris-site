import type { ReactNode } from "react";
import styles from "./CardElevated.module.css";

export function CardElevated({ children }: { children: ReactNode }) {
  return <article className={styles.card}>{children}</article>;
}
