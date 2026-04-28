import Link from "next/link";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import styles from "./page.module.css";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <main className={styles.screen}>
      <div className={styles.bgIllu} aria-hidden="true">
        <svg viewBox="0 0 380 760" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-20 280 Q80 220 180 250 Q280 280 410 220"
            fill="none"
            stroke="#E8D5B0"
            strokeWidth="48"
            strokeLinecap="round"
            opacity="0.45"
          />
          <path
            d="M-20 310 Q90 240 180 272 Q280 304 410 244"
            fill="none"
            stroke="#E8D5B0"
            strokeWidth="22"
            strokeLinecap="round"
            opacity="0.3"
          />
          <path
            d="M-20 248 Q70 200 180 224 Q280 248 410 200"
            fill="none"
            stroke="#C4673A"
            strokeWidth="9"
            strokeLinecap="round"
            opacity="0.16"
          />
          <path
            d="M-20 700 Q90 660 200 680 Q310 700 420 660"
            fill="none"
            stroke="#E8D5B0"
            strokeWidth="38"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M-20 720 Q90 686 200 706 Q310 724 420 690"
            fill="none"
            stroke="#E8D5B0"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.28"
          />
        </svg>
      </div>

      <div className={styles.topBar}>
        <LocaleSwitcher />
      </div>

      <section className={styles.center}>
        <p className={styles.wordmark}>{t("wordmark")}</p>
        <p className={styles.tagline}>{t("tagline")}</p>
      </section>

      <section className={styles.quoteBlock}>
        <div className={styles.quote}>
          <p>{t("body1")}</p>
          <p>{t("body2")}</p>
          <p>{t("body3")}</p>
        </div>
      </section>

      <section className={styles.ctaArea}>
        <Link className={styles.startCta} href={`/${locale}/modules`}>
          {t("cta")}
        </Link>
      </section>

      <footer className={styles.footer}>
        <p>{t("footer")}</p>
      </footer>
    </main>
  );
}
