import { NavLink } from "react-router";
import styles from "./PlaylistCard.module.css";

export default function PlaylistCard({
  id,
  title = "Roadtrip Mix",
  songCount = 1,
}) {
  return (
    <NavLink
      to={`/playlist/${id}`}
      className={({ isActive }) =>
        `${styles.card} ${isActive ? styles.active : ""}`
      }
    >
      <div className={styles.cover}>
        <svg
          width="18"
          height="18"
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
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.subtitle}>
          Playlist · {songCount} {songCount === 1 ? "song" : "songs"}
        </span>
      </div>
    </NavLink>
  );
}
