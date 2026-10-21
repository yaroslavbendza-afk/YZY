import { Link } from "react-router";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage({ isPlaylist = false }) {
  return (
    <main className={styles.page}>
      <span className={styles.code}>404</span>
      <h1>{isPlaylist ? "Playlist not found" : "Page not found"}</h1>
      <p>
        {isPlaylist
          ? "This playlist does not exist in your library."
          : "We could not find the page you requested."}
      </p>
      <Link to={isPlaylist ? "/library" : "/"} className={styles.link}>
        {isPlaylist ? "Back to library" : "Back to home"}
      </Link>
    </main>
  );
}
