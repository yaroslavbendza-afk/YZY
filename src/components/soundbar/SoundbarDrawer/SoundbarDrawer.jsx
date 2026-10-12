import { useState } from "react";
import styles from "./SoundbarDrawer.module.css";

const waveformHeights = [
  20, 25, 30, 40, 50, 65, 80, 60, 45, 55, 75, 90, 70, 50, 40, 35, 30, 25, 20,
];

export default function SoundbarDrawer({
  isOpen = false,
  onClose,
  currentTrack = null,
  isPlaying = false,
}) {
  const [mids, setMids] = useState(50);
  const [bass, setBass] = useState(50);
  const [highs, setHighs] = useState(50);
  const [speed, setSpeed] = useState(1);

  if (!isOpen) return null;

  const handleReset = () => {
    setMids(50);
    setBass(50);
    setHighs(50);
    setSpeed(1);
  };

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Soundbar equalizer"
    >
      <aside className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerIcon}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 12h2.5L7 4l4 16 4-8 2.5 4H22" />
              </svg>
            </div>
            <div>
              <span className={styles.brandLabel}>UZY</span>
              <h3 className={styles.title}>Soundbar</h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        <section className={styles.previewSection}>
          <span className={styles.previewLabel}>SIGNAL PREVIEW</span>
          <div className={styles.previewStatus}>
            <span>
              {isPlaying && currentTrack
                ? `${currentTrack.title} · Live`
                : "No track playing"}
            </span>
            <span
              className={`${styles.statusDot} ${isPlaying ? styles.statusDotActive : ""}`}
            />
          </div>
          <div
            className={`${styles.waveform} ${isPlaying ? styles.waveformAnimated : ""}`}
          >
            {waveformHeights.map((h, i) => (
              <span
                key={i}
                className={styles.waveBar}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </section>

        <section className={styles.slidersSection} aria-label="Frequency bands">
          <div className={styles.sliderRow}>
            <div className={styles.sliderHeader}>
              <div className={styles.sliderTitleGroup}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 12h2.5L7 7l4 10 4-5 2.5 2H22" />
                </svg>
                <label htmlFor="mids">Mids</label>
              </div>
              <span className={styles.sliderValue}>{mids} %</span>
            </div>
            <input
              id="mids"
              type="range"
              min="0"
              max="100"
              value={mids}
              onChange={(e) => setMids(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.sliderRow}>
            <div className={styles.sliderHeader}>
              <div className={styles.sliderTitleGroup}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
                <label htmlFor="bass">Bass</label>
              </div>
              <span className={styles.sliderValue}>{bass} %</span>
            </div>
            <input
              id="bass"
              type="range"
              min="0"
              max="100"
              value={bass}
              onChange={(e) => setBass(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.sliderRow}>
            <div className={styles.sliderHeader}>
              <div className={styles.sliderTitleGroup}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.93 4.93 14.14 14.14" />
                </svg>
                <label htmlFor="highs">Drums (Highs)</label>
              </div>
              <span className={styles.sliderValue}>{highs} %</span>
            </div>
            <input
              id="highs"
              type="range"
              min="0"
              max="100"
              value={highs}
              onChange={(e) => setHighs(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.sliderRow}>
            <div className={styles.sliderHeader}>
              <div className={styles.sliderTitleGroup}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <label htmlFor="speed">Speed</label>
              </div>
              <span className={styles.sliderValue}>{speed.toFixed(2)} x</span>
            </div>
            <input
              id="speed"
              type="range"
              min="50"
              max="200"
              value={Math.round(speed * 100)}
              onChange={(e) => setSpeed(Number(e.target.value) / 100)}
              className={styles.rangeInput}
            />
          </div>
        </section>

        <footer className={styles.footer}>
          <button
            type="button"
            onClick={handleReset}
            className={styles.resetBtn}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            Reset
          </button>
          <p className={styles.footerNote}>
            Speed alters playback pace. Tone bands shape the live visualizer.
          </p>
        </footer>
      </aside>
    </div>
  );
}
