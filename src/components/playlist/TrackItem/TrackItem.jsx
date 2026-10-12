import styles from "./TrackItem.module.css";

export default function TrackItem({
  trackIndex = "01",
  title = "Guilt Trip",
  artist = "Kanye West",
  genre = "Classics",
  duration = "4:03",
  imageSrc = "/assets/images/guilt-trip.jpg",
  viewMode = "grid",
  isActive = false,
  isPlaying = false,
  onSelect,
}) {
  if (viewMode === "list") {
    return (
      <article
        className={`${styles.listRow} ${isActive ? styles.listRowActive : ""}`}
        onClick={onSelect}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect && onSelect();
          }
        }}
      >
        <span className={styles.trackIndex}>
          {isActive && isPlaying ? (
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.playingIndicator}
            >
              <rect x="4" y="4" width="4" height="16" />
              <rect x="16" y="4" width="4" height="16" />
            </svg>
          ) : (
            trackIndex
          )}
        </span>
        <div className={styles.listCoverWrapper}>
          <img
            src={imageSrc}
            alt={`${title} cover`}
            className={styles.listCoverImg}
            loading="lazy"
          />
        </div>
        <div className={styles.listMeta}>
          <h4
            className={`${styles.listTitle} ${isActive ? styles.textActive : ""}`}
          >
            {title}
          </h4>
          <span className={styles.listArtist}>{artist}</span>
        </div>
        <span className={styles.listGenre}>{genre}</span>
        <time className={styles.listDuration}>{duration}</time>
      </article>
    );
  }

  return (
    <article
      className={`${styles.gridCard} ${isActive ? styles.gridCardActive : ""}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect && onSelect();
        }
      }}
    >
      <div className={styles.gridCoverWrapper}>
        <img
          src={imageSrc}
          alt={`${title} cover`}
          className={styles.gridCoverImg}
          loading="lazy"
        />
        <div className={styles.playOverlay}>
          <button
            type="button"
            className={styles.playOverlayBtn}
            aria-label={`Play ${title}`}
          >
            {isActive && isPlaying ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
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
        </div>
      </div>
      <h4
        className={`${styles.gridTitle} ${isActive ? styles.textActive : ""}`}
      >
        {title}
      </h4>
      <span className={styles.gridArtist}>{artist}</span>
    </article>
  );
}
