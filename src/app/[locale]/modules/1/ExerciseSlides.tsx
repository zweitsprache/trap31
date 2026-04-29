"use client";

import { useRef, useState } from "react";
import styles from "./page.module.css";

type Props = {
  steps: string[];
};

export default function ExerciseSlides({ steps }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const updateActiveIndexFromTime = (currentTime: number, duration: number) => {
    if (!Number.isFinite(duration) || duration <= 0) {
      return;
    }

    const progress = Math.min(Math.max(currentTime / duration, 0), 0.999999);
    const nextIndex = Math.min(Math.floor(progress * steps.length), steps.length - 1);
    setActiveIndex(nextIndex);
  };

  const goToNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, steps.length - 1));
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
    <section className={`${styles.slide} ${styles.exerciseSlide}`}>
      <p className={styles.slideBrand}>
        <span className={styles.slideBrandPrimary}>arivio</span>
        <span className={styles.slideBrandSecondary}> | Willkommen bei Dir</span>
      </p>
      <img src="/logos/sihlspace_003a_orange.svg" alt="" className={styles.slideLogo} />
      <p className={styles.storyLabel}>ÜBUNG</p>
      <p className={styles.exerciseName}>Den Wächter beruhigen</p>
      <div
        className={styles.exerciseCarousel}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={styles.exerciseTrack}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {steps.map((step) => (
            <div key={step} className={styles.exerciseItem}>
              <div className={styles.exerciseCard}>
                <span className={styles.stepText}>{step}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.exerciseDots} aria-label="Übung Schritte">
        {steps.map((step, index) => (
          <button
            key={`exercise-dot-${step}`}
            type="button"
            className={`${styles.exerciseDot} ${index === activeIndex ? styles.exerciseDotActive : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Schritt ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
      <video
        ref={videoRef}
        className={styles.video}
        controls
        playsInline
        preload="metadata"
        src="/videos/arivio_01_male_DE_.mp4"
        onLoadedMetadata={(event) => {
          updateActiveIndexFromTime(event.currentTarget.currentTime, event.currentTarget.duration);
        }}
        onTimeUpdate={(event) => {
          updateActiveIndexFromTime(event.currentTarget.currentTime, event.currentTarget.duration);
        }}
        onSeeked={(event) => {
          updateActiveIndexFromTime(event.currentTarget.currentTime, event.currentTarget.duration);
        }}
        onEnded={() => {
          setActiveIndex(steps.length - 1);
        }}
      />
    </section>
  );
}
