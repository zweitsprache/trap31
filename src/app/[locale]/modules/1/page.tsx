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
  "Dein Körper ist angespannt, ohne dass Du weisst warum.",
  "Du erschrickst bei lauten Geräuschen oder unerwarteten Bewegungen.",
  "Du kannst nicht gut schlafen.",
  "Schreckliche Gedanken oder Bilder tauchen plötzlich auf.",
  "Du fühlst Dich, als wärst Du neben Dir.",
  "Du bist gereizt oder erschöpft.",
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
          <p className={styles.sub}>VERSTEHEN, WAS PASSIERT IST</p>
          <h1 className={styles.h1}>Dein Wächter hat aufgepasst</h1>
        </section>

        <section className={`${styles.slide} ${styles.quoteSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <p className={styles.storyLabel}>DEINE GESCHICHTE</p>
          <div className={styles.quote}>
            <p>Du hast in der Vergangenheit vielleicht schwere Dinge erlebt.</p>
            <p>Vielleicht in Deinem Heimatland, vielleicht auf dem Weg in die Schweiz.</p>
            <p>Dein Körper hat in diesen schwierigen Situationen etwas ganz wichtiges gemacht:</p>
            <p><strong>Er hat Dich beschützt.</strong></p>
          </div>
        </section>

        <section className={`${styles.slide} ${styles.accentSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <p className={styles.storyLabel}>WAS PASSIERT BEI GEFAHR?</p>
          <p className={styles.bodyLarge}>Wenn wir in grosser Gefahr sind, schaltet unser Körper sofort in einen besonderen Modus.</p>
          <p className={styles.bodyLarge}>Ohne, dass wir etwas tun müssen.</p>
          <p className={styles.bodyLarge}><strong>Automatisch.</strong></p>
        </section>

        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <p className={styles.storyLabel}>WIE FUNKTIONIERT DAS?</p>
          <div className={`${styles.quote} ${styles.quoteNeutral}`}>
            <p>Stell dir vor, dein Gehirn hat einen Wächter.</p>
            <p>Wenn er Gefahr erkennt, gibt er Alarm – und dein Körper reagiert sofort.</p>
            <p><strong>Er schläft nie.</strong></p>
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
          <p className={styles.storyLabel}>WARUM IST ES NOCH DA?</p>
          <div className={`${styles.quote} ${styles.quoteNeutral}`}>
            <p>Aus Deiner Geschichte hat der Wächter gelernt: Die Welt ist gefährlich.</p>
            <p>Das kann er nicht so schnell vergessen. Darum beschützt er Dich noch heute.</p>
            <p><strong>Auch wenn Du heute an einem sichereren Ort bist.</strong></p>
          </div>
        </section>

        <ReactionSlides chips={chips} />

        <section className={`${styles.slide} ${styles.merksatzSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <div className={styles.merksatz}>
            <p>Was Du erlebt hast, ist <strong>nicht</strong> <strong>normal</strong>.</p>
            <p>Wie Du heute reagierst, ist <strong>normal</strong>.</p>
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
