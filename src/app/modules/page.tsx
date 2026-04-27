import Link from "next/link";
import styles from "./page.module.css";

type ModuleCard = {
  id: number;
  title: string;
  subtitle: string;
  accent: string;
  cool?: boolean;
  href: string;
  bg: React.ReactNode;
};

const cards: ModuleCard[] = [
  {
    id: 1,
    title: "Dein Koerper hat aufgepasst",
    subtitle: "Verstehen, was passiert ist",
    accent: "#C4673A",
    href: "/modules/1",
    bg: (
      <svg viewBox="0 0 228 88" preserveAspectRatio="xMaxYMid slice" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 56 Q90 14 150 30 Q200 42 260 18" fill="none" stroke="#E8D5B0" strokeWidth="20" strokeLinecap="round" opacity="0.55" />
        <path d="M40 70 Q90 30 150 46 Q200 58 260 34" fill="none" stroke="#E8D5B0" strokeWidth="10" strokeLinecap="round" opacity="0.4" />
        <path d="M40 44 Q90 4 150 18 Q200 30 260 8" fill="none" stroke="#C4673A" strokeWidth="4" strokeLinecap="round" opacity="0.22" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Du bist nicht allein",
    subtitle: "Sehen, dass andere das auch kennen",
    accent: "#C49A3C",
    href: "#",
    bg: (
      <svg viewBox="0 0 228 88" preserveAspectRatio="xMaxYMid slice" xmlns="http://www.w3.org/2000/svg">
        <path d="M250 92 Q200 30 130 38 Q70 46 32 92" fill="none" stroke="#E8D5B0" strokeWidth="22" strokeLinecap="round" opacity="0.5" />
        <path d="M268 96 Q210 18 132 26 Q60 34 18 96" fill="none" stroke="#C49A3C" strokeWidth="8" strokeLinecap="round" opacity="0.18" />
        <path d="M276 96 Q220 8 134 18 Q56 28 8 96" fill="none" stroke="#E8D5B0" strokeWidth="4" strokeLinecap="round" opacity="0.35" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Was in dir vorgeht",
    subtitle: "Wahrnehmen, was dein Koerper dir sagt",
    accent: "#E8A87C",
    href: "#",
    bg: (
      <svg viewBox="0 0 228 88" preserveAspectRatio="xMaxYMid slice" xmlns="http://www.w3.org/2000/svg">
        <path d="M250 8 Q180 18 148 46 Q120 72 138 92" fill="none" stroke="#E8D5B0" strokeWidth="22" strokeLinecap="round" opacity="0.45" />
        <path d="M256 14 Q172 30 142 58 Q116 80 136 96" fill="none" stroke="#E8A87C" strokeWidth="9" strokeLinecap="round" opacity="0.22" />
        <path d="M260 22 Q166 42 138 70 Q112 88 134 100" fill="none" stroke="#E8D5B0" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Hier ankommen",
    subtitle: "Spueren, dass dieser Moment sicher ist",
    accent: "#7A4F35",
    href: "#",
    bg: (
      <svg viewBox="0 0 228 88" preserveAspectRatio="xMaxYMid slice" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 92 Q90 36 160 60 Q210 78 260 50" fill="none" stroke="#E8D5B0" strokeWidth="24" strokeLinecap="round" opacity="0.45" />
        <path d="M20 96 Q86 26 162 54 Q214 74 264 42" fill="none" stroke="#7A4F35" strokeWidth="9" strokeLinecap="round" opacity="0.14" />
        <path d="M40 96 Q96 38 158 64 Q204 80 260 60" fill="none" stroke="#E8D5B0" strokeWidth="4" strokeLinecap="round" opacity="0.32" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Was dir gut tut",
    subtitle: "Entdecken, was Kraft gibt",
    accent: "#C8DDB8",
    href: "#",
    bg: (
      <svg viewBox="0 0 228 88" preserveAspectRatio="xMaxYMid slice" xmlns="http://www.w3.org/2000/svg">
        <path d="M120 96 Q160 38 220 26 Q252 20 280 26" fill="none" stroke="#C8DDB8" strokeWidth="22" strokeLinecap="round" opacity="0.6" />
        <path d="M110 100 Q154 30 218 18 Q250 12 280 16" fill="none" stroke="#E8D5B0" strokeWidth="9" strokeLinecap="round" opacity="0.4" />
        <path d="M132 96 Q170 44 222 32 Q252 26 280 30" fill="none" stroke="#C8DDB8" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Schlafen und Erholen",
    subtitle: "Lernen, wie Du Dir Ruhe schenkst",
    accent: "#D4E6EE",
    cool: true,
    href: "#",
    bg: (
      <svg viewBox="0 0 228 88" preserveAspectRatio="xMaxYMid slice" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 78 Q110 50 180 60 Q220 66 260 56" fill="none" stroke="#D4E6EE" strokeWidth="28" strokeLinecap="round" opacity="0.7" />
        <path d="M30 86 Q108 60 180 70 Q224 76 260 68" fill="none" stroke="#D4E6EE" strokeWidth="14" strokeLinecap="round" opacity="0.5" />
        <path d="M50 70 Q116 44 180 52 Q216 56 260 48" fill="none" stroke="#A8C4D4" strokeWidth="5" strokeLinecap="round" opacity="0.3" />
      </svg>
    ),
  },
];

export default function ModulesPage() {
  return (
    <main className={styles.screen}>
      <header className={styles.head}>
        <p className={styles.eyebrow}>DEINE REISE</p>
        <h1 className={styles.h1}>Sechs Module</h1>
        <p className={styles.lead}>
          Du kannst sie der Reihe nach machen oder dort einsteigen, wo Du willst. In
          Deinem Tempo.
        </p>
      </header>

      <section className={styles.progress}>
        <span className={styles.progressLabel}>FORTSCHRITT</span>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} />
        </div>
        <span className={styles.progressNum}>1 / 6</span>
      </section>

      <section className={styles.modules}>
        {cards.map((card) => (
          <Link key={card.id} className={styles.cardLink} href={card.href}>
            <article className={`${styles.modCard} ${card.cool ? styles.cool : ""}`}>
              <span className={styles.modAccent} style={{ background: card.accent }} />
              <div className={styles.modBg}>{card.bg}</div>
              <div className={styles.modHeader}>
                <span
                  className={styles.modNum}
                  style={{
                    background: card.accent,
                    color: card.id >= 5 ? "#3D2B1F" : "#FAF6F0",
                  }}
                >
                  {card.id}
                </span>
                <span className={styles.modLabel}>MODUL {card.id}</span>
              </div>
              <p className={styles.modTitle}>{card.title}</p>
              <p className={styles.modSub}>{card.subtitle}</p>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
