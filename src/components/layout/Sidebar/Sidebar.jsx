import { Link, NavLink } from "react-router";
import PlaylistList from "../../playlist/PlaylistList/PlaylistList";
import styles from "./Sidebar.module.css";

export default function Sidebar({ playlists, onCreatePlaylist }) {
  return (
    <aside className={styles.sidebar} aria-label="Library Navigation">
      <div className={styles.libraryHeader}>
        <Link
          to="/library"
          className={styles.libraryTitle}
          title="Open Library"
        >
          YOUR LIBRARY
        </Link>
        <button
          type="button"
          onClick={onCreatePlaylist}
          className={styles.addButton}
          aria-label="Create playlist"
          title="Create new playlist"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>

      <nav className={styles.navGroup} aria-label="Main sidebar links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
          }
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Home
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
          }
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          Search
        </NavLink>

        <NavLink
          to="/library"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
          }
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m16 6 4 14" />
            <path d="M12 6v14" />
            <path d="M8 8v12" />
            <path d="M4 4v16" />
          </svg>
          Library
        </NavLink>
      </nav>

      <div className={styles.playlistContainer}>
        <PlaylistList playlists={playlists} />
      </div>

      <p className={styles.tipText}>
        Tip: open any song and use &quot;Add to playlist&quot;.
      </p>
    </aside>
  );
}
