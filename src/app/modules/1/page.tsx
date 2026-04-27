import Link from "next/link";
import styles from "./page.module.css";

const steps = [
  "Leg eine Hand auf deine Brust oder deinen Bauch.",
  "Spuer den Kontakt deiner Hand mit deinem Koerper.",
  "Atme einmal tief ein und langsam wieder aus.",
  "Sag innerlich: Ich weiss, dass du aufgepasst hast. Danke. Im Moment bin ich hier.",
  "Atme noch einmal ruhig ein und aus.",
];

export default function ModuleOnePage() {
  return (
    <main className={styles.screen}>
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
          <p className={styles.eyebrow}>MODUL 1</p>
          <h1 className={styles.h1}>Dein Koerper hat</h1>
          <h1 className={styles.h1}>aufgepasst</h1>
          <p className={styles.sub}>Verstehen, was passiert ist</p>
        </div>
      </header>

      <section className={styles.body}>
        <div className={styles.quote}>
          <p>
            Du hast schwere Dinge erlebt. Dein Koerper hat genau das getan, wofuer
            er gemacht wurde: er hat dich geschuetzt.
          </p>
        </div>

        <p className={styles.sectionLabel}>WAS PASSIERT IST</p>
        <p className={styles.bodyText}>
          Wenn wir in grosser Gefahr sind, schaltet unser Koerper sofort in einen
          besonderen Modus. Automatisch. Ohne dass wir etwas tun muessen.
        </p>

        <p className={styles.sectionLabel}>WIE FUNKTIONIERT DAS?</p>
        <p className={styles.bodyText}>
          Stell dir vor, dein Gehirn hat einen Waechter. Er schlaeft nie. Wenn er
          Gefahr erkennt, gibt er Alarm und dein Koerper reagiert: das Herz schlaegt
          schneller, die Muskeln spannen sich an, alles ist bereit.
        </p>

        <div className={styles.merksatz}>
          <p>Das ist nicht krank. Das ist Schutz.</p>
        </div>

        <p className={styles.sectionLabel}>WARUM ES NOCH DA IST</p>
        <p className={styles.bodyText}>
          Der Waechter hat gelernt: die Welt ist gefaehrlich. Das vergisst er nicht
          so schnell. Auch wenn Du heute an einem sicheren Ort bist. Deshalb kannst
          du heute noch spueren:
        </p>
        <p className={styles.listItem}>
          Anspannung ohne Grund - Schreckhaftigkeit - Schlafprobleme - Gedanken die
          auftauchen - das Gefuehl neben sich zu sein
        </p>
        <p className={styles.bodyText}>
          All das macht Sinn. Dein Koerper will dich immer noch beschuetzen.
        </p>

        <div className={styles.merksatz}>
          <p>Was Du erlebt hast, ist nicht normal. Wie Du heute reagierst, ist normal.</p>
        </div>

        <p className={styles.sectionLabel}>UEBUNG</p>
        <p className={styles.exerciseName}>Den Waechter begruessen</p>

        {steps.map((step, index) => (
          <div className={styles.stepCard} key={step}>
            <span className={styles.stepNum}>{index + 1}</span>
            <span className={styles.stepText}>{step}</span>
          </div>
        ))}

        <div className={styles.reflection}>
          <p>
            Gibt es eine Reaktion aus der Liste oben, die du bei dir kennst? Du
            musst nichts aufschreiben. Es reicht, wenn du kurz bei dir nachspuerst.
          </p>
        </div>

        <p className={styles.closing}>
          Dein Koerper hat schwere Zeiten ueberlebt. Das zeigt, wie viel Kraft in
          dir steckt.
        </p>

        <div className={styles.safety}>
          <p>
            Falls du dich nach diesem Modul unwohl fuehlst: Mach eine Pause. Tu
            etwas, das dir gut tut.
          </p>
          <p>
            <strong>Dargebotene Hand</strong> 143 - taeglich, 24h
          </p>
        </div>
      </section>

      <footer className={styles.nav}>
        <Link className={styles.brand} href="/modules">
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
