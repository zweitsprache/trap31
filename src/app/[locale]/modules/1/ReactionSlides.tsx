"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import styles from "./page.module.css";

type Props = {
  chips: string[];
  progressStep: number;
  progressTotal: number;
};

export default function ReactionSlides({ chips, progressStep, progressTotal }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const goToNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, chips.length - 1));
  };

  const goToPrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (event) => {
    if (event.touches.length === 0) {
      return;
    }
    touchStartXRef.current = event.touches[0].clientX;
    touchStartYRef.current = event.touches[0].clientY;
  };

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (event) => {
    if (touchStartXRef.current == null || touchStartYRef.current == null) {
      return;
    }

    if (event.changedTouches.length === 0) {
      touchStartXRef.current = null;
      touchStartYRef.current = null;
      return;
    }

    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;
    const deltaX = endX - touchStartXRef.current;
    const deltaY = endY - touchStartYRef.current;

    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40;
    if (isHorizontalSwipe) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  return (
    <section className={`${styles.slide} ${styles.reactionSlide}`}>
      <Link href="/" className={styles.slideBrand}>
        <span className={styles.slideBrandPrimary}>arivio</span>
        <span className={styles.slideBrandSecondary}> | Willkommen bei Dir</span>
      </Link>
      <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
      <p className={styles.storyLabel}>KENNST DU DAS?</p>
      <div
        className={styles.reactionCarousel}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <ul
          className={styles.reactionTrack}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {chips.map((chip) => (
            <li key={chip} className={styles.reactionItem}>
              <p className={styles.reactionText}>{chip}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.reactionDots} aria-label="Reaktion Seiten">
        {chips.map((chip, index) => (
          <button
            key={`dot-${chip}`}
            type="button"
            className={`${styles.reactionDot} ${index === activeIndex ? styles.reactionDotActive : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Reaktion ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
      <div
        className={styles.slideProgress}
        role="progressbar"
        aria-label="Lesefortschritt"
        aria-valuemin={1}
        aria-valuemax={progressTotal}
        aria-valuenow={progressStep}
      >
        <span
          className={styles.slideProgressFill}
          style={{ width: `${(progressStep / progressTotal) * 100}%` }}
        />
      </div>
    </section>
  );
}
