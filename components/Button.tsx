import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "link";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const className = variant === "primary" ? styles.primary : styles.link;
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
