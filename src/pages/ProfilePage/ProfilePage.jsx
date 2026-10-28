import { Link } from "react-router";
import styles from "./ProfilePage.module.css";

export default function ProfilePage({ userProfile, onLogout }) {
  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="profile-heading">
        <div className={styles.avatar} aria-hidden="true">
          {userProfile.name.charAt(0).toUpperCase()}
        </div>
        <p className={styles.eyebrow}>YOUR ACCOUNT</p>
        <h1 id="profile-heading">Profile</h1>
        <dl className={styles.details}>
          <div>
            <dt>Name</dt>
            <dd>{userProfile.name}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{userProfile.email}</dd>
          </div>
        </dl>
        <div className={styles.actions}>
          <Link to="/library" className={styles.libraryLink}>
            Open your library
          </Link>
          <button type="button" onClick={onLogout} className={styles.logout}>
            Log Out
          </button>
        </div>
      </section>
    </main>
  );
}
