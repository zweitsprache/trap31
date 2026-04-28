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

export default async function ModuleThreePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className={styles.screen}>
      <div className={styles.slider}>

        {/* Screen 1 — Intro */}
        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <span className={styles.bgNumber} aria-hidden="true">3</span>
          <h1 className={styles.h1}>Was in dir vorgeht</h1>
          <p className={styles.sub}>Wahrnehmen, was dein Körper dir sagt</p>
        </section>

        {/* Screen 2 — Opening */}
        <section className={`${styles.slide} ${styles.quoteSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <div className={`${styles.quote} ${styles.quoteNeutral}`}>
            <p>Manchmal reagiert dein Körper auf Dinge, die andere gar nicht bemerken.</p>
          </div>
          <p className={styles.bodyText}>Ein Geräusch. Ein Geruch. Eine bestimmte Uhrzeit.</p>
          <p className={styles.bodyText}>Plötzlich ist da diese Anspannung – und du weisst nicht warum.</p>
        </section>

        {/* Screen 3 — Merksatz */}
        <section className={`${styles.slide} ${styles.accentSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <p className={styles.bodyLarge}>Das ist kein Kontrollverlust.</p>
          <p className={styles.bodyLarge}>Dein Körper erinnert sich.</p>
        </section>

        {/* Footer / navigation */}
        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <div className={styles.safety}>
            <p>
              Falls du dich nach diesem Modul unwohl fühlst: Mach eine Pause. Tu
              etwas, das dir gut tut.
            </p>
            <p>
              <strong>Dargebotene Hand</strong> 143 – täglich, 24h
            </p>
          </div>
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
