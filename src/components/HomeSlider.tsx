"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./HomeSlider.module.css";

type Slide = {
  image: string;
  overlay: string;
  title: string;
  headline: string;
};

const SLIDES: Slide[] = [
  {
    image: "/images/azimuth-ai-banner-03-scaled.jpg",
    overlay: "rgba(0, 0, 0, 0.48)",
    title: "Accessible Computing",
    headline: "Building a More equitable future",
  },
  {
    image: "/images/azimuth-ai-banner-01-scaled.jpg",
    overlay: "rgba(0, 0, 0, 0.68)",
    title: "ASICs for a Sustainable Edge",
    headline: "Pushing The Boundaries of Edge Computing Efficiency",
  },
];

const INTERVAL = 7000;

export default function HomeSlider() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  const go = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className={styles.slider}
      aria-roledescription="carousel"
      aria-label="Azimuth AI highlights"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.image + i}
          className={i === index ? styles.slideActive : styles.slide}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={i !== index}
        >
          <div className={styles.overlay} style={{ backgroundColor: slide.overlay }} />
          <div className={styles.content}>
            <h2 className={styles.title}>{slide.title}</h2>
            <h1 className={styles.headline}>
              <span>
                <strong>{slide.headline}</strong>
              </span>
            </h1>
          </div>
        </div>
      ))}

      <button
        type="button"
        className={styles.prev}
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        type="button"
        className={styles.next}
        onClick={() => go(index + 1)}
        aria-label="Next slide"
      >
        <span aria-hidden="true">›</span>
      </button>

      <div className={styles.dots}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === index ? styles.dotActive : styles.dot}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </section>
  );
}
