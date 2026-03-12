import styles from "./Card.module.css";

type CardProps = {
  number: string;
  title: string;
  description: string;
};

export function Card({ number, title, description }: CardProps) {
  return (
    <article className={styles.card}>
      <p className={styles.number}>{number}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
