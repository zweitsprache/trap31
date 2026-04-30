import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import ReactionSlides from "./ReactionSlides";
import ExerciseSlides from "./ExerciseSlides";
import styles from "./page.module.css";

function SlideProgress({ current, total }: { current: number; total: number }) {
  const safeCurrent = Math.min(Math.max(current, 1), total);
  const progressWidth = `${(safeCurrent / total) * 100}%`;

  return (
    <div
      className={styles.slideProgress}
      role="progressbar"
      aria-label="Lesefortschritt"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={safeCurrent}
    >
      <span className={styles.slideProgressFill} style={{ width: progressWidth }} />
    </div>
  );
}

function SlideBrand() {
  return (
    <Link href="/" className={styles.slideBrand}>
      <span className={styles.slideBrandPrimary}>arivio</span>
      <span className={styles.slideBrandSecondary}> | Willkommen bei Dir</span>
    </Link>
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
  "Leg eine Hand auf Deine Brust oder Deinen Bauch.",
  "Spür den Kontakt Deiner Hand mit Deinem Körper.",
  "Atme einmal tief ein und langsam wieder aus.",
  "Sag innerlich: Ich weiss, dass Du aufgepasst hast.",
  "Danke.",
  "Im Moment bin ich hier sicher.",
  "Atme noch einmal ruhig ein und aus.",
];

export default async function ModuleOneV2Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const totalSlides = 11;

  return (
    <main className={styles.screen}>
      <div className={styles.slider}>
        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <span className={styles.bgNumber} aria-hidden="true">1</span>
          <p className={styles.sub}>VERSTEHEN, WAS PASSIERT IST</p>
          <h1 className={styles.h1}>Dein innerer Helfer hat aufgepasst</h1>
          <SlideProgress current={1} total={totalSlides} />
        </section>

        <section className={`${styles.slide} ${styles.quoteSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <p className={styles.storyLabel}>DEINE GESCHICHTE</p>
          <div className={styles.quote}>
            <p>Du hast in der Vergangenheit vielleicht schwere Dinge erlebt.</p>
            <p>Vielleicht in Deinem Heimatland, vielleicht auf dem Weg in die Schweiz.</p>
            <p>Dein Körper hat in diesen schwierigen Situationen etwas ganz Wichtiges gemacht.</p>
            <p><strong>Er hat Dich beschützt.</strong></p>
          </div>
          <SlideProgress current={2} total={totalSlides} />
        </section>

        <section className={`${styles.slide} ${styles.accentSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <p className={styles.storyLabel}>WAS PASSIERT BEI GEFAHR?</p>
          <p className={styles.bodyLarge}>Wenn wir in schwierigen Situationen oder grosser Gefahr sind, arbeitet unser Körper anders.</p>
          <p className={styles.bodyLarge}>Ohne, dass wir etwas tun müssen.</p>
          <p className={styles.bodyLarge}><strong>Automatisch.</strong></p>
          <SlideProgress current={3} total={totalSlides} />
        </section>

        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <p className={styles.storyLabel}>WIE FUNKTIONIERT DAS?</p>
          <div className={`${styles.quote} ${styles.quoteNeutral}`}>
            <p>Stell dir vor, Dein Gehirn hat einen inneren Helfer.</p>
            <p>Wenn dieser Helfer Gefahr erkennt, schlägt er Alarm – und Dein Körper reagiert sofort.</p>
            <p><strong>Dein innerer Helfer schläft nie.</strong></p>
          </div>
          <SlideProgress current={4} total={totalSlides} />
        </section>

        <section className={`${styles.slide} ${styles.accentSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <p className={styles.storyLabel}>WARUM IST ES NOCH DA?</p>
          <div className={`${styles.quote} ${styles.quoteNeutral}`}>
            <p>Aus Deiner Geschichte hat Dein innerer Helfer gelernt: Die Welt ist gefährlich.</p>
            <p>Das kann er nicht so schnell vergessen. Darum beschützt er Dich noch.</p>
            <p><strong>Obwohl Du heute an einem sichereren Ort bist.</strong></p>
          </div>
          <SlideProgress current={5} total={totalSlides} />
        </section>

        <ReactionSlides chips={chips} progressStep={6} progressTotal={totalSlides} />

        <section className={`${styles.slide} ${styles.merksatzSlideLight}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <div className={styles.merksatz}>
            <p>Bist Du «falsch» oder «kaputt»?</p>
            <p>Stimmt etwas mit Dir nicht?</p>
            <p><strong>Nein.</strong></p>
          </div>
          <SlideProgress current={7} total={totalSlides} />
        </section>

        <section className={`${styles.slide} ${styles.merksatzSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <div className={styles.merksatz}>
            <p>Was Du erlebt hast, ist <strong>nicht</strong> <strong>normal</strong>.</p>
            <p>Wie Du heute reagierst, ist <strong>normal</strong>.</p>
          </div>
          <SlideProgress current={8} total={totalSlides} />
        </section>

        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <p className={styles.storyLabel}>WAS KANN ICH TUN?</p>
          <p className={`${styles.bodyLarge} ${styles.bodyLargeBottom}`}>
            Mit einer einfachen Übung kannst Du Deinem inneren Helfer zeigen:
          </p>
          <p className={styles.bodyLarge}>
            <strong>Im Moment brauche ich Dich nicht so sehr.</strong>
          </p>
          <SlideProgress current={9} total={totalSlides} />
        </section>

        <ExerciseSlides steps={steps} progressStep={10} progressTotal={totalSlides} />

        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <p className={styles.storyLabel}>WIE GEHT ES WEITER?</p>
          <SlideProgress current={11} total={totalSlides} />
        </section>
      </div>
    </main>
  );
}
