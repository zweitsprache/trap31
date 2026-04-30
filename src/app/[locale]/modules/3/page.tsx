import Link from "next/link";
import styles from "./page.module.css";

function SlideBrand() {
  return (
    <Link href="/" className={styles.slideBrand}>
      <span className={styles.slideBrandPrimary}>arivio</span>
      <span className={styles.slideBrandSecondary}> | Willkommen bei Dir</span>
    </Link>
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

        {/* Screen 4 — Körpergedaechtnis */}
        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <h2 className={styles.h1}>Dein Körper hat ein Gedächtnis</h2>
          <p className={styles.bodyText}>
            Unser Gehirn speichert schwere Erlebnisse anders als normale Erinnerungen. Eine gewöhnliche Erinnerung fühlt sich an wie ein Foto - du schaust es an, und du weisst: Das war damals.
          </p>
          <p className={styles.bodyText}>
            Eine Erinnerung an etwas sehr Schweres fühlt sich manchmal anders an. Sie kann sich anfühlen wie ein Film, der plötzlich wieder abgespielt wird. Mit Bildern. Mit Körpergefühlen. Mit dem Gefühl, dass es gerade jetzt passiert.
          </p>
          <p className={styles.bodyText}>
            Das liegt nicht daran, dass du «verrückt» bist. Es liegt daran, wie das Gehirn unter extremem Stress speichert.
          </p>
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
