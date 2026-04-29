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

export default async function ModuleTwoPage({
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
          <span className={styles.bgNumber} aria-hidden="true">2</span>
          <h1 className={styles.h1}>Du bist nicht allein</h1>
          <p className={styles.sub}>Sehen, dass andere das auch kennen</p>
        </section>

        {/* Screen 2 — Opening quote */}
        <section className={`${styles.slide} ${styles.quoteSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <p className={styles.storyLabel}>WIE GEHT ES DIR?</p>
          <div className={`${styles.quote} ${styles.quoteNeutral}`}>
            <p>Vielleicht…</p>
          </div>
          <div className={styles.markerGroup}>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>hast Du das Gefühl, dass <strong>niemand verstehen</strong> kann, was du erlebt hast.</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}><strong>schämst</strong> du dich für das, was du fühlst.</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>denkst du, dass andere Menschen das <strong>besser</strong> hinkriegen als du.</p>
            </div>
          </div>
        </section>

        {/* Screen 3 — Warum fühlen wir uns so allein damit? */}
        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <p className={styles.storyLabel}>WARUM FÜHLST DU DICH ALLEIN?</p>
          <p className={styles.bodyLarge}>
            Wenn wir etwas sehr Schweres erlebt haben, passieren oft zwei Dinge gleichzeitig:
          </p>
          <div className={styles.markerGroup}>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}><strong>Wir ziehen uns zurück.</strong> Weil wir niemanden belasten wollen. Weil wir nicht wissen, wie wir erklären sollen, was passiert ist. Weil Worte manchmal einfach nicht reichen.</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}><strong>Wir vergleichen uns mit anderen.</strong> Von aussen wirken andere Menschen oft stabiler, ruhiger, «normaler». Wir sehen nicht, was sie innerlich tragen.</p>
            </div>
          </div>
          <p className={styles.bodyLarge}><strong>Beides zusammen erzeugt ein sehr einsames Gefühl.</strong></p>
        </section>

        {/* Screen 4 — Was wir wissen */}
        <section className={`${styles.slide} ${styles.accentSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <p className={styles.storyLabel}>WAS WISSEN WIR?</p>
          <p className={styles.bodyLarge}>Menschen aus aller Welt, aus allen Kulturen und in allen Epochen der Geschichte haben schwere Zeiten erlebt – <strong>Flucht</strong>, <strong>Verlust</strong>, <strong>Gewalt</strong>, <strong>Angst</strong> um das eigene Leben und um geliebte Menschen.</p>
        </section>

        {/* Screen 5 — Reaktionen */}
        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <p className={styles.bodyText}>Und alle, die solche Zeiten durchlebt haben, kennen Reaktionen wie diese:</p>
          <div className={styles.markerGroup}>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>Das Gefühl, innerlich taub zu sein</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>Momente, in denen alles plötzlich wieder sehr nah ist</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>Schlafprobleme, Erschöpfung</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>Schwierigkeiten, sich zu konzentrieren</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>Das Gefühl, irgendwie nicht ganz da zu sein</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>Reizbarkeit, die einen selbst überrascht</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>Das Bedürfnis, allein zu sein – und gleichzeitig die Sehnsucht nach Nähe</p>
            </div>
          </div>
        </section>

        {/* Screen 7 — Merksatz */}
        <section className={`${styles.slide} ${styles.accentSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <p className={styles.bodyLarge}>Wenn Du das auch kennst, ist das kein Zeichen von Schwäche.</p>
          <p className={styles.bodyLarge}>Das ist ein Zeichen, dass Du ein <strong>Mensch</strong> bist.</p>
        </section>

        {/* Screen 8 — Scham ist ein schlechter Ratgeber */}
        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <div className={`${styles.quote} ${styles.quoteNeutral}`}>
            <p>Scham ist ein schlechter Ratgeber</p>
          </div>
          <p className={styles.bodyText}>Viele Menschen schämen sich für das, was sie fühlen. Manche denken:</p>
          <div className={styles.markerGroup}>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>«Ich sollte das längst überwunden haben.»</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>«Andere haben Schlimmeres erlebt und funktionieren trotzdem.»</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>«Ich bin eine Last für meine Familie.»</p>
            </div>
          </div>
          <p className={styles.bodyText}>Diese Gedanken sind verständlich. Aber sie stimmen nicht.</p>
          <p className={styles.bodyText}>Es gibt keine Frist, bis wann man «über etwas hinweg» sein muss. Der Wächter in dir arbeitet in seinem eigenen Tempo. Das lässt sich nicht erzwingen.</p>
        </section>

        {/* Screen 9 — Du musst nicht reden */}
        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <div className={`${styles.quote} ${styles.quoteNeutral}`}>
            <p>Du musst nicht reden</p>
          </div>
          <p className={styles.bodyText}>Manchmal hilft es, mit jemandem zu sprechen. Aber das ist nicht der einzige Weg.</p>
          <p className={styles.bodyText}>Heilung – oder besser gesagt: das allmähliche Besserwerden – geschieht auch in kleinen, stillen Momenten:</p>
          <div className={styles.markerGroup}>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>Wenn du eine Tasse Tee trinkst und den Geschmack wirklich spürst</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>Wenn du draussen bist und die Luft einatmest</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>Wenn du schläfst und dein Körper sich erholt</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>Wenn du lachst, auch wenn es kurz ist</p>
            </div>
            <div className={styles.markerBlock}>
              <p className={styles.markerText}>Wenn du dieses Modul liest</p>
            </div>
          </div>
          <p className={styles.bodyText}><strong>All das zählt.</strong></p>
        </section>

        {/* Screen 10 — Übung: Der innere Kreis */}
        <section className={styles.slide}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
          <p className={styles.sectionLabel}>ÜBUNG</p>
          <div className={`${styles.quote} ${styles.quoteNeutral}`}>
            <p>Der innere Kreis</p>
          </div>
          <p className={styles.bodyText}>Diese Übung hilft dir zu spüren, dass du nicht allein bist – ohne dass du mit jemandem sprechen musst.</p>
          <video
            className={styles.video}
            src="/videos/arivio_01_male_DE_.mp4"
            controls
            playsInline
          />
        </section>

        {/* Screen 11 — Abschluss */}
        <section className={`${styles.slide} ${styles.accentSlide}`}>
          <SlideBrand />
          <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.slideLogo} />
          <p className={styles.bodyLarge}>Du trägst viel. Vielleicht mehr, als andere sehen.</p>
          <p className={styles.bodyLarge}>Aber du trägst es nicht, weil du schwach bist.</p>
          <p className={styles.bodyLarge}>Du trägst es, weil du es bis hierher geschafft hast.</p>
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
