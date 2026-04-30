import Link from "next/link";
import styles from "./page.module.css";

function SlideBrand() {
  return (
    <p className={styles.slideBrand}>
      <span className={styles.slideBrandPrimary}>arivio</span>
      <span className={styles.slideBrandSecondary}> | Willkommen bei Dir</span>
    </p>
  );
}

export default async function ModuleSixPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className={styles.screen}>
      <div className={styles.slider}>
        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <span className={styles.bgNumber} aria-hidden="true">6</span>
          <p className={styles.sub}>LERNEN, WIE DU DIR RUHE SCHENKST</p>
          <h1 className={styles.h1}>Schlafen und Erholen</h1>
        </section>

        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <p className={styles.bodyText}>
            Modul 6 wird gerade aufgebaut. Du kannst zur Übersicht zurückkehren und später
            weitermachen.
          </p>
          <div className={styles.actions}>
            <Link className={styles.actionLink} href={`/${locale}/modules`}>
              Zur Übersicht
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
