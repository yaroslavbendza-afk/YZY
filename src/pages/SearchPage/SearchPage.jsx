import { useState } from "react";
import TrackItem from "../../components/playlist/TrackItem/TrackItem";
import styles from "./SearchPage.module.css";

const browseCategories = [
  {
    id: "c1",
    title: "Hip-Hop",
    color: "linear-gradient(135deg, #ef4444, #991b1b)",
  },
  {
    id: "c2",
    title: "Rap Anthems",
    color: "linear-gradient(135deg, #f59e0b, #b45309)",
  },
  {
    id: "c3",
    title: "Trap Nation",
    color: "linear-gradient(135deg, #8b5cf6, #5b21b6)",
  },
  {
    id: "c4",
    title: "Classics",
    color: "linear-gradient(135deg, #10b981, #047857)",
  },
  {
    id: "c5",
    title: "New Releases",
    color: "linear-gradient(135deg, #06b6d4, #0e7490)",
  },
  {
    id: "c6",
    title: "Workout",
    color: "linear-gradient(135deg, #ec4899, #be185d)",
  },
];

const allSearchableTracks = [
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
  {
    id: "r1",
    index: "07",
    title: "Houdini",
    artist: "Eminem",
    genre: "RAP",
    duration: "3:47",
    imageSrc: "/assets/images/houdini.jpg",
  },
  {
    id: "r2",
    index: "08",
    title: "A Milli",
    artist: "Lil Wayne",
    genre: "CLASSICS",
    duration: "3:41",
    imageSrc: "/assets/images/a-milli.jpg",
  },
  {
    id: "r3",
    index: "09",
    title: "FE!N",
    artist: "Travis Scott ft. Playboi Carti",
    genre: "TRAP",
    duration: "3:11",
    imageSrc: "/assets/images/fein.jpg",
  },
  {
    id: "r4",
    index: "10",
    title: "Not Like Us",
    artist: "Kendrick Lamar",
    genre: "HIP-HOP",
    duration: "4:34",
    imageSrc: "/assets/images/not-like-us.jpg",
  },
  {
    id: "r5",
    index: "11",
    title: "Like That",
    artist: "Future & Metro Boomin",
    genre: "TRAP",
    duration: "4:27",
    imageSrc: "/assets/images/like-that.jpg",
  },
  {
    id: "r6",
    index: "12",
    title: "fukumean",
    artist: "Gunna",
    genre: "TRAP",
    duration: "2:05",
    imageSrc: "/assets/images/fukumean.jpg",
  },
];

export default function SearchPage({
  currentTrack = null,
  isPlaying = false,
  onPlayTrack,
  searchQuery = "",
  onSearchChange,
}) {
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const activeQuery = searchQuery || localQuery;

  const handleQueryChange = (val) => {
    setLocalQuery(val);
    if (onSearchChange) onSearchChange(val);
  };

  const results = allSearchableTracks.filter(
    (t) =>
      !activeQuery ||
      t.title.toLowerCase().includes(activeQuery.toLowerCase()) ||
      t.artist.toLowerCase().includes(activeQuery.toLowerCase()) ||
      t.genre.toLowerCase().includes(activeQuery.toLowerCase()),
  );

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Search</h1>
        <div className={styles.searchBarWrapper}>
          <span className={styles.searchIcon}>
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
          </span>
          <input
            type="search"
            value={activeQuery}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Artists, songs, or genres..."
            className={styles.searchInput}
            aria-label="Search music"
          />
          {activeQuery && (
            <button
              type="button"
              onClick={() => handleQueryChange("")}
              className={styles.clearBtn}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </header>

      {activeQuery ? (
        <section className={styles.resultsSection} aria-label="Search results">
          <h2 className={styles.sectionTitle}>
            Results for &quot;{activeQuery}&quot; ({results.length})
          </h2>

          {results.length > 0 ? (
            <div className={styles.resultsList}>
              {results.map((t) => (
                <TrackItem
                  key={t.id}
                  trackIndex={t.index}
                  title={t.title}
                  artist={t.artist}
                  genre={t.genre}
                  duration={t.duration}
                  imageSrc={t.imageSrc}
                  viewMode="list"
                  isActive={currentTrack?.id === t.id}
                  isPlaying={isPlaying && currentTrack?.id === t.id}
                  onSelect={() => onPlayTrack && onPlayTrack(t)}
                />
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <p>No results found for &quot;{activeQuery}&quot;</p>
              <span>Please check the spelling or browse categories below.</span>
            </div>
          )}
        </section>
      ) : (
        <section
          className={styles.browseSection}
          aria-label="Browse all genres"
        >
          <h2 className={styles.sectionTitle}>Browse All</h2>
          <div className={styles.browseGrid}>
            {browseCategories.map((c) => (
              <div
                key={c.id}
                className={styles.browseCard}
                style={{ background: c.color }}
                onClick={() => handleQueryChange(c.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleQueryChange(c.title);
                  }
                }}
              >
                <h3 className={styles.browseCardTitle}>{c.title}</h3>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
