import type { TeamMember } from "@/content/team";
import styles from "./TeamCard.module.css";

type TeamCardProps =
  | {
      member: TeamMember;
      tagline?: string;
      email?: string;
      focus?: string;
      initials?: never;
      name?: never;
      title?: never;
      bio?: never;
    }
  | {
      member?: never;
      initials: string;
      name: string;
      title: string;
      bio: string;
      focus?: string;
      tagline?: string;
      email?: string;
    };

export function TeamCard(props: TeamCardProps) {
  const data = "member" in props && props.member
    ? {
        initials: props.member.initials,
        name: props.member.name,
        title: props.member.title,
        focus: props.focus ?? props.member.focus,
        bio: props.member.bio,
        tagline: props.tagline,
        email: props.email,
      }
    : props;

  const bioParts = data.bio.split("\n\n");

  return (
    <article className={styles.card}>
      <div className={styles.placeholder}>
        <span className={styles.initials}>{data.initials}</span>
      </div>
      <h3 className={styles.name}>{data.name}</h3>
      <p className={styles.title}>{data.title}</p>
      {data.focus ? <p className={styles.focus}>{data.focus}</p> : null}
      <div className={styles.bioGroup}>
        {bioParts.map((part) => (
          <p key={part} className={styles.bio}>{part}</p>
        ))}
      </div>
      {data.tagline ? <p className={styles.tagline}>{data.tagline}</p> : null}
      {data.email ? (
        <a href={`mailto:${data.email}`} className={styles.email}>
          {data.email}
        </a>
      ) : null}
    </article>
  );
}
