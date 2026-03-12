import styles from "./NumberedList.module.css";

type NumberedListProps = {
  items: string[];
};

export function NumberedList({ items }: NumberedListProps) {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <div key={item} className={styles.item}>
          <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
          <span className={styles.text}>{item}</span>
        </div>
      ))}
    </div>
  );
}
