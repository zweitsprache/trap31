"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

type Props = {
  steps: string[];
};

export default function ExerciseSlides({ steps }: Props) {
  const [visibleCount, setVisibleCount] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const slideRef = useRef<HTMLElement | null>(null);
  const lastRevealRef = useRef(0);
  const inputLockUntilRef = useRef(0);
  const wheelGestureLockedRef = useRef(false);
  const wheelUnlockTimerRef = useRef<number | null>(null);
  const touchGestureConsumedRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchDeltaRef = useRef(0);

  const canRevealMore = visibleCount < steps.length;

  const revealNext = (): boolean => {
    if (!canRevealMore) {
      return false;
    }

    const now = Date.now();
    if (now < inputLockUntilRef.current) {
      return false;
    }

    if (now - lastRevealRef.current < 260) {
      return false;
    }

    lastRevealRef.current = now;
    inputLockUntilRef.current = now + 520;
    setVisibleCount((prev) => Math.min(prev + 1, steps.length));
    return true;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsActive(entry.isIntersecting));
      },
      {
        threshold: 0.65,
      }
    );

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive || !canRevealMore) {
      return;
    }

    const onWheel = (event: WheelEvent) => {
      if (event.deltaY <= 0) {
        return;
      }

      if (!wheelGestureLockedRef.current) {
        wheelGestureLockedRef.current = true;
        const didReveal = revealNext();
        if (didReveal) {
          event.preventDefault();
          event.stopPropagation();
        }
      } else {
        event.preventDefault();
        event.stopPropagation();
      }

      if (wheelUnlockTimerRef.current != null) {
        window.clearTimeout(wheelUnlockTimerRef.current);
      }

      wheelUnlockTimerRef.current = window.setTimeout(() => {
        wheelGestureLockedRef.current = false;
        wheelUnlockTimerRef.current = null;
      }, 220);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const downKeys = ["ArrowDown", "PageDown", "Space", " "];
      if (!downKeys.includes(event.key)) {
        return;
      }
      if (event.repeat) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      const didReveal = revealNext();
      if (didReveal) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 0) {
        return;
      }
      touchStartXRef.current = event.touches[0].clientX;
      touchDeltaRef.current = 0;
      touchGestureConsumedRef.current = false;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (touchStartXRef.current == null || event.touches.length === 0) {
        return;
      }

      const currentX = event.touches[0].clientX;
      const delta = touchStartXRef.current - currentX;

      if (delta <= 0) {
        return;
      }

      touchDeltaRef.current = delta;

      if (!touchGestureConsumedRef.current && touchDeltaRef.current > 30) {
        event.preventDefault();
        event.stopPropagation();
        touchGestureConsumedRef.current = true;
        revealNext();
      }
    };

    const onTouchEnd = () => {
      touchStartXRef.current = null;
      touchDeltaRef.current = 0;
      touchGestureConsumedRef.current = false;
    };

    window.addEventListener("wheel", onWheel, { passive: false, capture: true });
    window.addEventListener("keydown", onKeyDown, { capture: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true, capture: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false, capture: true });
    window.addEventListener("touchend", onTouchEnd, { capture: true });
    window.addEventListener("touchcancel", onTouchEnd, { capture: true });

    return () => {
      if (wheelUnlockTimerRef.current != null) {
        window.clearTimeout(wheelUnlockTimerRef.current);
        wheelUnlockTimerRef.current = null;
      }
      wheelGestureLockedRef.current = false;
      window.removeEventListener("wheel", onWheel, { capture: true });
      window.removeEventListener("keydown", onKeyDown, { capture: true });
      window.removeEventListener("touchstart", onTouchStart, { capture: true });
      window.removeEventListener("touchmove", onTouchMove, { capture: true });
      window.removeEventListener("touchend", onTouchEnd, { capture: true });
      window.removeEventListener("touchcancel", onTouchEnd, { capture: true });
    };
  }, [canRevealMore, isActive]);

  return (
    <section ref={slideRef} className={`${styles.slide} ${styles.exerciseSlide}`}>
      <p className={styles.sectionLabel}>UEBUNG</p>
      <p className={styles.exerciseName}>Den Wächter beruhigen</p>
      <div className={styles.stepsHorizontal}>
        {steps.slice(0, visibleCount).map((step, stepIndex) => (
          <div
            key={step}
            className={`${styles.stepCard} ${stepIndex === visibleCount - 1 ? styles.stepCardNew : ""}`}
          >
            <span className={styles.stepNum}>{stepIndex + 1}</span>
            <span className={styles.stepText}>{step}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
