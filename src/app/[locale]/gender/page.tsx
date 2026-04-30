import Link from "next/link";
import styles from "./page.module.css";

export default async function GenderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className={styles.screen}>
      <div className={styles.bgImg} aria-hidden="true" />
      <div className={styles.bgOverlay} aria-hidden="true" />

      <div className={styles.topBar}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandPrimary}>arivio</span>
        </Link>
        <img src="/logos/sihlspace_003a_white.svg" alt="" className={styles.logo} />
      </div>

      <section className={styles.panel}>
        <h1 className={styles.wordmark}>Wer darf Dich heute begleiten?</h1>

                <div className={styles.genderGrid}>
          {Array.from({ length: 12 }).map((_, i) => (
            <Link key={i} href={`/${locale}`} className={styles.genderBtn} aria-label={`Option ${i + 1}`}>
              <div
                className={styles.genderBtnImg}
                style={{ backgroundImage: "url('/visuals/gemini-image-2_this_man_sitting_crosslegged_on_the_room_s_floor_smiling_gently_mid_close_up-0 (1).jpg')" }}
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
