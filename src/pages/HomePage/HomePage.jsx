import { useState } from "react";
import TrackItem from "../../components/playlist/TrackItem/TrackItem";
import styles from "./HomePage.module.css";

const categories = ["All", "Rap", "Hip-Hop", "Trap", "Classics"];

const popularTracks = [
  {
    id: "1",
    index: "01",
    title: "Guilt Trip",
    artist: "Kanye West",
    genre: "CLASSICS",
    duration: "4:03",
    imageSrc: "/assets/images/guilt-trip.jpg",
  },
  {
    id: "2",
    index: "02",
    title: "Rockstar Made",
    artist: "Playboi Carti",
    genre: "RAP",
    duration: "3:07",
    imageSrc: "/assets/images/rockstar-made.jpg",
  },
  {
    id: "3",
    index: "03",
    title: "Relevant",
    artist: "Lil Uzi Vert",
    genre: "TRAP",
    duration: "2:02",
    imageSrc: "/assets/images/relevant.jpg",
  },
  {
    id: "4",
    index: "04",
    title: "RATHER LIE",
    artist: "Playboi Carti",
    genre: "RAP",
    duration: "3:21",
    imageSrc: "/assets/images/rather-lie.jpg",
  },
  {
    id: "5",
    index: "05",
    title: "Flashing Lights",
    artist: "Kanye West",
    genre: "CLASSICS",
    duration: "3:57",
    imageSrc: "/assets/images/flashing-lights.jpg",
  },
  {
    id: "6",
    index: "06",
    title: "You Broke My Heart",
    artist: "Drake",
    genre: "HIP-HOP",
    duration: "2:56",
    imageSrc: "/assets/images/you-broke-my-heart.jpg",
  },
];

const recommendedTracks = [
  {
    id: "r1",
    index: "01",
    title: "Houdini",
    artist: "Eminem",
    genre: "RAP",
    duration: "3:47",
    imageSrc: "/assets/images/houdini.jpg",
  },
  {
    id: "r2",
    index: "02",
    title: "A Milli",
    artist: "Lil Wayne",
    genre: "CLASSICS",
    duration: "3:41",
    imageSrc: "/assets/images/a-milli.jpg",
  },
  {
    id: "r3",
    index: "03",
    title: "FE!N",
    artist: "Travis Scott ft. Playboi Carti",
    genre: "TRAP",
    duration: "3:11",
    imageSrc: "/assets/images/fein.jpg",
  },
  {
    id: "r4",
    index: "04",
    title: "Not Like Us",
    artist: "Kendrick Lamar",
    genre: "HIP-HOP",
    duration: "4:34",
    imageSrc: "/assets/images/not-like-us.jpg",
  },
  {
    id: "r5",
    index: "05",
    title: "Like That",
    artist: "Future & Metro Boomin",
    genre: "TRAP",
    duration: "4:27",
    imageSrc: "/assets/images/like-that.jpg",
  },
  {
    id: "r6",
    index: "06",
    title: "fukumean",
    artist: "Gunna",
    genre: "TRAP",
    duration: "2:05",
    imageSrc: "/assets/images/fukumean.jpg",
  },
];

export default function HomePage({
  currentTrack = null,
  isPlaying = false,
  onPlayTrack,
  searchQuery = "",
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [isFeaturedLiked, setIsFeaturedLiked] = useState(false);

  const filterTracks = (tracks) => {
    return tracks.filter((t) => {
      const matchesCategory =
        selectedCategory === "All" ||
        t.genre.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.artist.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const visiblePopular = filterTracks(popularTracks);
  const visibleRecommended = filterTracks(recommendedTracks);

  const isFeaturedActive = currentTrack?.id === "1";

  const handleFeaturedPlay = () => {
    onPlayTrack && onPlayTrack(popularTracks[0]);
  };

  return (
    <main className={styles.page}>
      <section className={styles.featuredCard} aria-label="Featured Song">
        <div className={styles.featuredContent}>
          <span className={styles.featuredBadge}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            FEATURED
          </span>
          <h1 className={styles.featuredTitle}>Guilt Trip</h1>
          <p className={styles.featuredMeta}>Kanye West · Yeezus</p>
          <div className={styles.featuredActions}>
            <button
              type="button"
              className={styles.playBtn}
              onClick={handleFeaturedPlay}
            >
              {isFeaturedActive && isPlaying ? (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                  Pause
                </>
              ) : (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                  Play
                </>
              )}
            </button>
            <button
              type="button"
              className={`${styles.heartBtn} ${isFeaturedLiked ? styles.heartBtnActive : ""}`}
              onClick={() => setIsFeaturedLiked((prev) => !prev)}
              aria-label="Favorite"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill={isFeaturedLiked ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
            <span className={styles.trackDuration}>4:03</span>
          </div>
        </div>

        <div className={styles.featuredCoverWrapper}>
          <img
            src="/assets/images/guilt-trip.jpg"
            alt="Guilt Trip artwork"
            className={styles.featuredCoverImg}
          />
        </div>
      </section>

      <section
        className={styles.controlsRow}
        aria-label="Filters and View Controls"
      >
        <div className={styles.genreList} role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.genreChip} ${selectedCategory === cat ? styles.activeGenre : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.viewToggle} aria-label="Toggle layout">
          <button
            type="button"
            className={`${styles.viewButton} ${viewMode === "grid" ? styles.activeView : ""}`}
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
          <button
            type="button"
            className={`${styles.viewButton} ${viewMode === "list" ? styles.activeView : ""}`}
            onClick={() => setViewMode("list")}
            aria-label="List view"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="popular-heading">
        <header className={styles.sectionHeader}>
          <h2 id="popular-heading" className={styles.sectionTitle}>
            Popular songs
          </h2>
          <span className={styles.counterBadge}>{visiblePopular.length}</span>
        </header>

        {visiblePopular.length > 0 ? (
          <div
            className={
              viewMode === "grid" ? styles.tracksGrid : styles.tracksList
            }
          >
            {visiblePopular.map((t) => (
              <TrackItem
                key={t.id}
                trackIndex={t.index}
                title={t.title}
                artist={t.artist}
                genre={t.genre}
                duration={t.duration}
                imageSrc={t.imageSrc}
                viewMode={viewMode}
                isActive={currentTrack?.id === t.id}
                isPlaying={isPlaying && currentTrack?.id === t.id}
                onSelect={() => onPlayTrack && onPlayTrack(t)}
              />
            ))}
          </div>
        ) : (
          <p className={styles.emptyNotice}>
            No popular songs found matching &quot;
            {searchQuery || selectedCategory}&quot;
          </p>
        )}
      </section>

      <section className={styles.section} aria-labelledby="recommended-heading">
        <header className={styles.sectionHeader}>
          <h2 id="recommended-heading" className={styles.sectionTitle}>
            Recommended songs
          </h2>
          <span className={styles.counterBadge}>
            {visibleRecommended.length}
          </span>
        </header>

        {visibleRecommended.length > 0 ? (
          <div
            className={
              viewMode === "grid" ? styles.tracksGrid : styles.tracksList
            }
          >
            {visibleRecommended.map((t) => (
              <TrackItem
                key={t.id}
                trackIndex={t.index}
                title={t.title}
                artist={t.artist}
                genre={t.genre}
                duration={t.duration}
                imageSrc={t.imageSrc}
                viewMode={viewMode}
                isActive={currentTrack?.id === t.id}
                isPlaying={isPlaying && currentTrack?.id === t.id}
                onSelect={() => onPlayTrack && onPlayTrack(t)}
              />
            ))}
          </div>
        ) : (
          <p className={styles.emptyNotice}>
            No recommended songs found matching &quot;
            {searchQuery || selectedCategory}&quot;
          </p>
        )}
      </section>
    </main>
  );
}
