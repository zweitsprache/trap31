import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import ReactionSlides from "./ReactionSlides";
import ExerciseSlides from "./ExerciseSlides";
import styles from "./page.module.css";

function SlideBrand() {
  return (
    <p className={styles.slideBrand}>
      <span className={styles.slideBrandPrimary}>arivio</span>
      <span className={styles.slideBrandSecondary}> | Willkommen bei Dir</span>
    </p>
  );
}

const chips = [
  "Anspannung ohne Grund",
  "Schreckhaftigkeit",
  "Schlafprobleme",
  "Gedanken die auftauchen",
  "Das Gefühl neben sich zu sein",
];

const steps = [
  "Leg eine Hand auf deine Brust oder deinen Bauch.",
  "Spür den Kontakt deiner Hand mit deinem Körper.",
  "Atme einmal tief ein und langsam wieder aus.",
  "Sag innerlich: Ich weiss, dass du aufgepasst hast. Danke. Im Moment bin ich hier.",
  "Atme noch einmal ruhig ein und aus.",
];

export default async function ModuleOneV2Page({
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
          <span className={styles.bgNumber} aria-hidden="true">1</span>
          <h1 className={styles.h1}>Dein Wächter hat aufgepasst</h1>
          <p className={styles.sub}>Verstehen, was passiert ist</p>
        </section>

        <section className={`${styles.slide} ${styles.quoteSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <div className={styles.quote}>
            <p>Du hast schwere Dinge erlebt.</p>
            <p>Dein Körper hat genau das getan, wofür er gemacht wurde:</p>
            <p>Er hat dich geschützt.</p>
          </div>
        </section>

        <section className={`${styles.slide} ${styles.accentSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <p className={styles.bodyLarge}>Wenn wir in grosser Gefahr sind, schaltet unser Körper sofort in einen besonderen Modus.</p>
          <p className={styles.bodyLarge}>Automatisch.</p>
          <p className={styles.bodyLarge}>Ohne dass wir etwas tun müssen.</p>
        </section>

        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <div className={`${styles.quote} ${styles.quoteNeutral}`}>
            <p>Stell dir vor, dein Gehirn hat einen Wächter.</p>
            <p>Er schläft nie.</p>
            <p>Wenn er Gefahr erkennt, gibt er Alarm – und dein Körper reagiert sofort.</p>
          </div>
        </section>

        <section className={`${styles.slide} ${styles.accentSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <p className={styles.bodyLarge}>Das ist nicht krank.</p>
          <p className={styles.bodyLarge}>Das ist Schutz.</p>
        </section>

        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <p className={styles.sectionLabel}>WARUM IST ES NOCH DA?</p>
          <p className={styles.bodyText}>
            Der Wächter hat gelernt: die Welt ist gefährlich. Das vergisst er nicht
            so schnell. Auch wenn Du heute an einem sicheren Ort bist. Deshalb kannst
            du heute noch spüren:
          </p>
        </section>

        <ReactionSlides chips={chips} />

        <section className={`${styles.slide} ${styles.merksatzSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <div className={styles.merksatz}>
            <p>Was Du erlebt hast, ist nicht normal. Wie Du heute reagierst, ist normal.</p>
          </div>
        </section>

        <ExerciseSlides steps={steps} />

        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <div className={styles.reflection}>
            <p>
              Gibt es eine Reaktion aus der Liste oben, die du bei dir kennst? Du
              musst nichts aufschreiben. Es reicht, wenn du kurz bei dir nachspürst.
            </p>
          </div>
          <div className={styles.safety}>
            <p>
              Falls du dich nach diesem Modul unwohl fühlst: Mach eine Pause. Tu
              etwas, das dir gut tut.
            </p>
            <p>
              <strong>Dargebotene Hand</strong> 143 - täglich, 24h
            </p>
          </div>
          <div className={styles.actions}>
            <Link className={styles.actionLink} href={`/${locale}/modules/1`}>
              Original öffnen
            </Link>
            <Link className={styles.actionLink} href={`/${locale}/modules`}>
              Zur Übersicht
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
