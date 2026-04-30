import Link from "next/link";
import { localeNames, locales } from "@/i18n/config";
import styles from "./landing.module.css";

type LanguageOption =
  | { key: string; label: string; href: string }
  | { key: string; label: string; href?: undefined };

const languageOptions: LanguageOption[] = [
  ...locales.map((locale) => ({
    key: locale,
    label: localeNames[locale],
    href: `/${locale}/gender`,
  })),
  ...Array.from({ length: 15 }, (_, index) => ({
    key: `placeholder-${index + 4}`,
    label: `Language ${index + 4}`,
  })),
];

export default function RootPage() {
  return (
    <main className={styles.screen}>
      <div className={styles.bgImg} aria-hidden="true" />
      <div className={styles.bgOverlay} aria-hidden="true" />

      <div className={styles.topBar}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandPrimary}>arivio</span>
        </Link>
        <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.logo} />
      </div>

      <section className={styles.panel}>
        <p className={styles.wordmark}>Willkommen<br />bei Dir</p>
        <div className={styles.languageGrid}>
          {languageOptions.map((option) => (
            option.href ? (
              <Link key={option.key} href={option.href} className={styles.languageCard}>
                <span className={styles.languageStack}>
                  {option.key !== "de" ? (
                    <span className={styles.languageCode}>{option.key.toUpperCase()}</span>
                  ) : null}
                  <span>{option.label}</span>
                </span>
              </Link>
            ) : (
              <div key={option.key} className={`${styles.languageCard} ${styles.placeholderCard}`}>
                {option.label}
              </div>
            )
          ))}
        </div>
      </section>
    </main>
  );
}
