import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/wealth-management", label: "Wealth" },
  { href: "/strategies", label: "How We Invest" },
  { href: "/activism-special-situations", label: "Shareholder Engagement" },
  { href: "/team", label: "Team" },
  { href: "/insights", label: "Insights" },
  { href: "/legal", label: "Legal" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <Image src="/logo-white.png" alt="Ewing Morris" width={220} height={22} style={{ height: "22px", width: "auto" }} priority />
            <p className={styles.description}>
              Independent investment firm serving affluent families, entrepreneurs, professionals, and select institutions.
            </p>
            <p className={styles.location}>Toronto, Ontario, Canada</p>
          </div>
          <nav className={styles.nav} aria-label="Footer">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.legal}>
          <p>
            The information on this website is provided for general informational purposes only. Any investment with the firm is subject to applicable offering and account documentation, including important information regarding eligibility, strategy terms, and risk considerations.
          </p>
        </div>
      </div>
    </footer>
  );
}
