import styles from "./Blockquote.module.css";

type BlockquoteProps = {
  quote: string;
  attribution?: string;
};

export function Blockquote({ quote, attribution }: BlockquoteProps) {
  return (
    <figure className={styles.figure}>
      <blockquote className={styles.quote}>{quote}</blockquote>
      {attribution ? <figcaption className={styles.attribution}>- {attribution}</figcaption> : null}
    </figure>
  );
}
