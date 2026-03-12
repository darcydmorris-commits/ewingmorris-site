import type { ReactNode } from "react";
import styles from "./SectionWrapper.module.css";

type SectionWrapperProps = {
  muted?: boolean;
  dark?: boolean;
  narrow?: boolean;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({ muted, dark, narrow, children, className }: SectionWrapperProps) {
  const classes = [styles.section, muted ? styles.muted : "", dark ? styles.dark : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      <div className={narrow ? "container--narrow" : "container"}>{children}</div>
    </section>
  );
}
