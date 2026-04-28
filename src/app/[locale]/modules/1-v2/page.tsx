import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import ReactionSlides from "./ReactionSlides";
import ExerciseSlides from "./ExerciseSlides";
import styles from "./page.module.css";

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
      <div className={styles.topBar}>
        <LocaleSwitcher />
      </div>

      <div className={styles.slider}>
        <section className={styles.slide}>
          <p className={styles.eyebrow}>MODUL 1</p>
          <h1 className={styles.h1}>Dein Wächter hat aufgepasst</h1>
          <p className={styles.sub}>Verstehen, was passiert ist</p>
        </section>

        <section className={styles.slide}>
          <div className={styles.quote}>
            <p>
              Du hast schwere Dinge erlebt. Dein Körper hat genau das getan, wofür er
              gemacht wurde: er hat dich geschützt.
            </p>
          </div>
        </section>

        <section className={styles.slide}>
          <p className={styles.sectionLabel}>WAS IST PASSIERT?</p>
          <p className={styles.bodyText}>
            Wenn wir in grosser Gefahr sind, schaltet unser Körper sofort in einen
            besonderen Modus. Automatisch. Ohne dass wir etwas tun müssen.
          </p>
          <div className={styles.visual}>
            <Image
              src="/visuals/visual_01_01.png"
              alt=""
              width={800}
              height={600}
              className={styles.visualImg}
            />
          </div>
        </section>

        <section className={styles.slide}>
          <p className={styles.sectionLabel}>WIE FUNKTIONIERT DAS?</p>
          <p className={styles.bodyText}>
            Stell dir vor, dein Gehirn hat einen Wächter. Er schläft nie. Wenn er
            Gefahr erkennt, gibt er Alarm und dein Körper reagiert: das Herz schlägt
            schneller, die Muskeln spannen sich an, alles ist bereit.
          </p>
          <div className={styles.merksatz}>
            <p>Das ist nicht krank. Das ist Schutz.</p>
          </div>
          <div className={styles.visual}>
            <Image
              src="/visuals/visual_01_02.png"
              alt=""
              width={800}
              height={600}
              className={styles.visualImg}
            />
          </div>
        </section>

        <section className={styles.slide}>
          <p className={styles.sectionLabel}>WARUM IST ES NOCH DA?</p>
          <p className={styles.bodyText}>
            Der Wächter hat gelernt: die Welt ist gefährlich. Das vergisst er nicht
            so schnell. Auch wenn Du heute an einem sicheren Ort bist. Deshalb kannst
            du heute noch spüren:
          </p>
        </section>

        <ReactionSlides chips={chips} />

        <section className={`${styles.slide} ${styles.merksatzSlide}`}>
          <div className={styles.merksatz}>
            <p>Was Du erlebt hast, ist nicht normal. Wie Du heute reagierst, ist normal.</p>
          </div>
        </section>

        <ExerciseSlides steps={steps} />

        <section className={styles.slide}>
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
