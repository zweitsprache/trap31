import Link from "next/link";
import styles from "./page.module.css";

type ModuleCard = {
  id: number;
  title: string;
  subtitle: string;
  accent: string;
  cool?: boolean;
  href: string;
};

const cards: ModuleCard[] = [
  {
    id: 1,
    title: "Dein Beschützer hat aufgepasst",
    subtitle: "Verstehen, was passiert ist",
    accent: "#56473D",
    href: "/modules/1",
  },
  {
    id: 2,
    title: "Du bist nicht allein",
    subtitle: "Sehen, dass andere das auch kennen",
    accent: "#5A624C",
    href: "/modules/2",
  },
  {
    id: 3,
    title: "Was in dir vorgeht",
    subtitle: "Wahrnehmen, was dein Körper dir sagt",
    accent: "#825548",
    href: "/modules/3",
  },
  {
    id: 4,
    title: "Hier und jetzt ankommen",
    subtitle: "Spüren, dass dieser Moment sicher ist",
    accent: "#846940",
    href: "/modules/4",
  },
  {
    id: 5,
    title: "Was dir gut tut",
    subtitle: "Entdecken, was Kraft gibt",
    accent: "#5C5868",
    href: "#",
  },
  {
    id: 6,
    title: "Schlafen und Erholen",
    subtitle: "Lernen, wie Du Dir Ruhe schenkst",
    accent: "#475862",
    cool: true,
    href: "/modules/6",
  },
];

export default async function ModulesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className={styles.screen}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.topBar}>
          <p className={styles.slideBrand}>
            <span className={styles.slideBrandPrimary}>arivio</span>
          </p>
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
        </div>
        <header className={styles.head}>
          <p className={styles.eyebrow}>EINE REISE IN SECHS SCHRITTEN</p>
          <h1 className={styles.h1}>Willkommen bei Dir</h1>
          <p className={styles.lead}>
            Du kannst sie der Reihe nach machen oder dort einsteigen, wo Du willst. In
            Deinem Tempo.
          </p>
        </header>
      </div>

      <section className={styles.modules}>
        {cards.map((card) => (
          <Link
            key={card.id}
            className={styles.cardLink}
            href={card.href === "#" ? card.href : `/${locale}${card.href}`}
          >
            <article
              className={`${styles.modCard} ${card.cool ? styles.cool : ""}`}
              style={{ background: `linear-gradient(135deg, ${card.accent} 0%, color-mix(in srgb, ${card.accent} 60%, #000) 100%)` }}
            >
              <div className={styles.modBody}>
                <span
                  className={styles.modNum}
                  style={{ color: card.accent }}
                  aria-hidden="true"
                >
                  {card.id}
                </span>
                <div className={styles.modText}>
                  <p className={styles.modTitle}>{card.title}</p>
                  <p className={styles.modSub}>{card.subtitle}</p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
