import { useState } from "react";
import styles from "./LibraryPage.module.css";

const tabs = ["Playlists", "Liked Songs", "Albums", "Artists"];

const libraryPlaylists = [
  {
    id: "1",
    title: "Roadtrip Mix",
    count: 6,
    imageSrc: "/assets/images/guilt-trip.jpg",
  },
  {
    id: "2",
    title: "Redesign Demo",
    count: 2,
    imageSrc: "/assets/images/rockstar-made.jpg",
  },
  {
    id: "3",
    title: "Late Night Hip-Hop",
    count: 18,
    imageSrc: "/assets/images/rather-lie.jpg",
  },
  {
    id: "4",
    title: "Workout Energy",
    count: 24,
    imageSrc: "/assets/images/fein.jpg",
  },
  {
    id: "5",
    title: "Chill Focus",
    count: 32,
    imageSrc: "/assets/images/relevant.jpg",
  },
  {
    id: "6",
    title: "Summer Vibe",
    count: 15,
    imageSrc: "/assets/images/flashing-lights.jpg",
  },
];

const likedSampleTrack = {
  id: "1",
  index: "01",
  title: "Guilt Trip",
  artist: "Kanye West",
  genre: "CLASSICS",
  duration: "4:03",
  imageSrc: "/assets/images/guilt-trip.jpg",
};

export default function LibraryPage({
  currentTrack = null,
  isPlaying = false,
  onPlayTrack,
  onNavigate,
}) {
  const [activeTab, setActiveTab] = useState("Playlists");

  const isPlayingLiked = isPlaying && currentTrack?.id === likedSampleTrack.id;

  const handlePlayLiked = () => {
    onPlayTrack && onPlayTrack(likedSampleTrack);
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Your Library</h1>

        <div className={styles.tabsGroup} role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Liked Songs banner */}
      <section className={styles.likedBanner} aria-label="Liked Songs">
        <div className={styles.likedMeta}>
          <h2 className={styles.likedTitle}>Liked Songs</h2>
          <span className={styles.likedCount}>12 favorite songs</span>
        </div>
        <button
          type="button"
          onClick={handlePlayLiked}
          className={styles.likedPlayButton}
          aria-label={isPlayingLiked ? "Pause Liked Songs" : "Play Liked Songs"}
        >
          {isPlayingLiked ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
          )}
        </button>
      </section>

      {/* Playlists grid */}
      <section className={styles.section} aria-label="All Playlists">
        <h2 className={styles.sectionTitle}>All Playlists</h2>

        <div className={styles.playlistsGrid}>
          {libraryPlaylists.map((pl) => (
            <button
              key={pl.id}
              type="button"
              onClick={() => onNavigate && onNavigate("playlist", pl)}
              className={styles.playlistItem}
            >
              <div className={styles.playlistCover}>
                <img
                  src={pl.imageSrc}
                  alt={pl.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className={styles.playlistInfo}>
                <h3 className={styles.playlistName}>{pl.title}</h3>
                <span className={styles.playlistSongs}>
                  Playlist · {pl.count} songs
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
