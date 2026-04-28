import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import styles from "./page.module.css";

const steps = [
  "Leg eine Hand auf deine Brust oder deinen Bauch.",
  "Spür den Kontakt deiner Hand mit deinem Körper.",
  "Atme einmal tief ein und langsam wieder aus.",
  "Sag innerlich: Ich weiss, dass du aufgepasst hast. Danke. Im Moment bin ich hier.",
  "Atme noch einmal ruhig ein und aus.",
];

export default async function ModuleOnePage({
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

      <section className={styles.body}>
        <header className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true">
            <svg viewBox="0 0 380 180" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M220 100 Q280 30 350 60 Q400 80 460 40" fill="none" stroke="#E8D5B0" strokeWidth="32" strokeLinecap="round" opacity="0.55" />
              <path d="M210 118 Q275 45 348 75 Q402 96 460 55" fill="none" stroke="#E8D5B0" strokeWidth="16" strokeLinecap="round" opacity="0.38" />
              <path d="M230 85 Q288 16 356 46 Q406 66 460 28" fill="none" stroke="#C4673A" strokeWidth="5" strokeLinecap="round" opacity="0.2" />
            </svg>
          </div>
          <div className={styles.accent} />
          <div className={styles.heroContent}>
            <div className={styles.badgeContainer}>
              <span className={styles.moduleBadge}>1</span>
            </div>
            <h1 className={styles.h1}>Dein Wächter hat aufgepasst</h1>
            <p className={styles.sub}>Verstehen, was passiert ist</p>
          </div>
        </header>
        <div className={styles.quote}>
          <p>
            Du hast schwere Dinge erlebt. Dein Körper hat genau das getan, wofür er
            gemacht wurde: er hat dich geschützt.
          </p>
        </div>

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

        <p className={styles.sectionLabel}>WARUM IST ES NOCH DA?</p>
        <p className={styles.bodyText}>
          Der Wächter hat gelernt: die Welt ist gefährlich. Das vergisst er nicht
          so schnell. Auch wenn Du heute an einem sicheren Ort bist. Deshalb kannst
          du heute noch spüren:
        </p>
        <ul className={styles.chipList}>
          <li className={styles.chip}>Anspannung ohne Grund</li>
          <li className={styles.chip}>Schreckhaftigkeit</li>
          <li className={styles.chip}>Schlafprobleme</li>
          <li className={styles.chip}>Gedanken die auftauchen</li>
          <li className={styles.chip}>Das Gefühl neben sich zu sein</li>
        </ul>
        <p className={styles.bodyText}>
          All das macht Sinn. Dein Körper will dich immer noch beschützen.
        </p>

        <div className={styles.merksatz}>
          <p>Was Du erlebt hast, ist nicht normal. Wie Du heute reagierst, ist normal.</p>
        </div>

        <p className={styles.sectionLabel}>ÜBUNG</p>
        <p className={styles.exerciseName}>Den Wächter beruhigen</p>

        {steps.map((step, index) => (
          <div className={styles.stepCard} key={step}>
            <span className={styles.stepNum}>{index + 1}</span>
            <span className={styles.stepText}>{step}</span>
          </div>
        ))}

        <div className={styles.reflection}>
          <p>
            Gibt es eine Reaktion aus der Liste oben, die du bei dir kennst? Du
            musst nichts aufschreiben. Es reicht, wenn du kurz bei dir nachspürst.
          </p>
        </div>

        <div className={styles.quote}>
          <p>
            Dein Körper hat schwere Zeiten überlebt. Das zeigt, wie viel Kraft in
            dir steckt.
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
      </section>

      <footer className={styles.nav}>
        <Link className={styles.brand} href={`/${locale}/modules`}>
          arivio
        </Link>
        <div>
          <span className={styles.navDot} />
          <span className={styles.navDotMuted} />
          <span className={styles.navDotMuted} />
          <span className={styles.navDotMuted} />
          <span className={styles.navDotMuted} />
          <span className={styles.navDotMuted} />
        </div>
        <span className={styles.nextHint}>Modul 2 -&gt;</span>
      </footer>
    </main>
  );
}
