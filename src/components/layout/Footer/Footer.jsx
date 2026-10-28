import { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer({
  currentTrack = null,
  isPlaying = false,
  onTogglePlay,
  onPrevTrack,
  onNextTrack,
  onToggleSoundbar,
  isSoundbarOpen = false,
}) {
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(30);

  const durationStr = currentTrack?.duration || "0:00";

  return (
    <footer className={styles.footer} aria-label="Player Bar">
      <div className={styles.leftGroup}>
        {currentTrack ? (
          <>
            <img
              src={currentTrack.imageSrc}
              alt={currentTrack.title}
              className={styles.coverImg}
            />
            <div className={styles.trackMeta}>
              <span className={styles.trackTitle}>{currentTrack.title}</span>
              <span className={styles.trackArtist}>{currentTrack.artist}</span>
            </div>
            <button
              type="button"
              className={`${styles.likeBtn} ${isLiked ? styles.likeBtnActive : ""}`}
              onClick={() => setIsLiked((prev) => !prev)}
              aria-label="Save to your Liked Songs"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={isLiked ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
          </>
        ) : (
          <>
            <div className={styles.coverPlaceholder}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <div className={styles.trackMeta}>
              <span className={styles.trackTitle}>Nothing playing</span>
              <span className={styles.trackArtist}>
                Pick a song to start listening
              </span>
            </div>
          </>
        )}
      </div>

      <div className={styles.centerGroup}>
        <div className={styles.controls}>
          <button
            type="button"
            className={`${styles.iconBtn} ${isShuffle ? styles.activeIcon : ""}`}
            onClick={() => setIsShuffle((prev) => !prev)}
            aria-label="Shuffle"
            title="Shuffle"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 3h5v5" />
              <path d="M4 20L21 3" />
              <path d="M21 16v5h-5" />
              <path d="M15 15l6 6" />
              <path d="M4 4l5 5" />
            </svg>
          </button>

          <button
            type="button"
            className={styles.iconBtn}
            onClick={onPrevTrack}
            aria-label="Previous"
            title="Previous"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="19 20 9 12 19 4 19 20" />
              <line x1="5" y1="19" x2="5" y2="5" />
            </svg>
          </button>

          <button
            type="button"
            className={styles.playBtn}
            onClick={onTogglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="6 4 20 12 6 20 6 4" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className={styles.iconBtn}
            onClick={onNextTrack}
            aria-label="Next"
            title="Next"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="5 4 15 12 5 20 5 4" />
              <line x1="19" y1="5" x2="19" y2="19" />
            </svg>
          </button>

          <button
            type="button"
            className={`${styles.iconBtn} ${isRepeat ? styles.activeIcon : ""}`}
            onClick={() => setIsRepeat((prev) => !prev)}
            aria-label="Repeat"
            title="Repeat"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="17 1 21 5 17 9" />
              <path d="M3 11V9a4 4 0 0 1 4-4h14" />
              <polyline points="7 23 3 19 7 15" />
              <path d="M21 13v2a4 4 0 0 1-4 4H3" />
            </svg>
          </button>
        </div>

        <div className={styles.timeline}>
          <span className={styles.time}>{isPlaying ? "1:24" : "0:00"}</span>
          <div className={styles.timeBarWrapper}>
            <input
              type="range"
              min="0"
              max="100"
              value={isPlaying ? progress : 0}
              onChange={(e) => setProgress(Number(e.target.value))}
              className={styles.timeRange}
              aria-label="Track progress"
            />
          </div>
          <span className={styles.time}>{durationStr}</span>
        </div>
      </div>

      <div className={styles.rightGroup}>
        <button
          type="button"
          onClick={onToggleSoundbar}
          className={`${styles.iconBtn} ${isSoundbarOpen ? styles.activeIcon : ""}`}
          aria-label="Soundbar equalizer"
          title="Soundbar"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
          </svg>
        </button>

        <button
          type="button"
          className={styles.iconBtn}
          onClick={() => setIsMuted((prev) => !prev)}
          aria-label={isMuted ? "Unmute" : "Mute"}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="1" y1="1" x2="23" y2="23" />
              <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
              <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>
      </div>
    </footer>
  );
}
