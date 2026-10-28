import { Link, NavLink, useMatch } from "react-router";
import styles from "./Header.module.css";

export default function Header({
  searchQuery = "",
  onSearchChange,
  isLoggedIn = false,
  userProfile = null,
  onLogout,
}) {
  const isSearchPage = Boolean(useMatch("/search"));
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main Navigation">
        <div className={styles.brandGroup}>
          <Link to="/" className={styles.logo} aria-label="YZY Home">
            <span>YZY</span>
            <span className={styles.logoDot}>•</span>
          </Link>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.homeIconBtn} ${isActive ? styles.homeIconActive : ""}`
            }
            aria-label="Home"
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
          </NavLink>
        </div>

        <form
          className={styles.searchForm}
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            onSearchChange(searchQuery);
          }}
        >
          <span className={styles.searchIcon}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </span>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => {
              if (!isSearchPage) onSearchChange(searchQuery);
            }}
            placeholder="What do you want to listen to?"
            className={styles.searchInput}
            aria-label="Search tracks"
          />
        </form>

        <div className={styles.rightGroup}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#premium" className={styles.navLink}>
                Premium
              </a>
            </li>
            <li>
              <a href="#support" className={styles.navLink}>
                Support
              </a>
            </li>
            <li>
              <a href="#download" className={styles.navLink}>
                Download
              </a>
            </li>
          </ul>

          <div className={styles.divider} />

          <div className={styles.authGroup}>
            {isLoggedIn ? (
              <div className={styles.userProfile}>
                <Link
                  to="/profile"
                  className={styles.userName}
                  aria-label="Open profile"
                >
                  {userProfile?.name || "Demo Listener"}
                </Link>
                <button
                  type="button"
                  className={styles.logoutBtn}
                  onClick={onLogout}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <Link to="/auth?mode=signup" className={styles.signUpBtn}>
                  Sign Up
                </Link>
                <Link to="/auth" className={styles.logInBtn}>
                  Log In
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
