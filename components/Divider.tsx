import styles from "./Divider.module.css";

export function Divider({ accent = false }: { accent?: boolean }) {
  return <hr className={accent ? `${styles.divider} ${styles.accent}` : styles.divider} />;
}
