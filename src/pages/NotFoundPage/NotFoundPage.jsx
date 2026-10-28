import { Link } from "react-router";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage({ isPlaylist = false }) {
  return (
    <main className={styles.page} aria-labelledby="not-found-heading">
      <span className={styles.badge}>YZY / LOST IN THE MIX</span>
      <div className={styles.code} aria-label="Error 404">
        <span aria-hidden="true">4</span>
        <span className={styles.record} aria-hidden="true">
          <span className={styles.recordLabel}>YZY</span>
        </span>
        <span aria-hidden="true">4</span>
      </div>
      <h1 id="not-found-heading" className={styles.title}>
        {isPlaylist ? "Playlist not found" : "Page not found"}
      </h1>
      <p className={styles.description}>
        {isPlaylist
          ? "This playlist does not exist in your library."
          : "Looks like this track skipped a beat. The page you are looking for does not exist."}
      </p>
      <div className={styles.actions}>
        <Link to={isPlaylist ? "/library" : "/"} className={styles.link}>
          {isPlaylist ? "Back to library" : "Back to home"}
          <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link to="/search" className={styles.secondaryLink}>
          Find your next track
        </Link>
      </div>
    </main>
  );
}
