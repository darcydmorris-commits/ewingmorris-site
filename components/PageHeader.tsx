import { Eyebrow } from "./Eyebrow";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className={styles.title}>{title}</h1>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </div>
    </header>
  );
}
