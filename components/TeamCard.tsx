import type { TeamMember } from "@/content/team";
import styles from "./TeamCard.module.css";

type TeamCardProps =
  | {
      member: TeamMember;
      initials?: never;
      name?: never;
      title?: never;
      focus?: never;
      bio?: never;
      email?: never;
    }
  | {
      member?: never;
      initials: string;
      name: string;
      title: string;
      focus: string;
      bio: string;
      email?: string;
    };

export function TeamCard(props: TeamCardProps) {
  const data = "member" in props && props.member
    ? {
        initials: props.member.initials,
        name: props.member.name,
        title: props.member.title,
        focus: props.member.focus,
        bio: props.member.bio,
        email: undefined,
      }
    : props;

  return (
    <article className={styles.card}>
      <div className={styles.placeholder}>
        <span className={styles.initials}>{data.initials}</span>
      </div>
      <h3 className={styles.name}>{data.name}</h3>
      <p className={styles.title}>{data.title}</p>
      <p className={styles.focus}>{data.focus}</p>
      <p className={styles.bio}>{data.bio}</p>
      {data.email ? (
        <a href={`mailto:${data.email}`} className={styles.email}>
          {data.email}
        </a>
      ) : null}
    </article>
  );
}
