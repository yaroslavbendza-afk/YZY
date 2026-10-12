import TrackItem from "../../components/playlist/TrackItem/TrackItem";
import styles from "./PlaylistPage.module.css";

const playlistTracks = [
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

export default function PlaylistPage({
  currentTrack = null,
  isPlaying = false,
  onPlayTrack,
  playlist = null,
}) {
  const displayTitle = playlist?.title || "Roadtrip Mix";
  const displayCount = playlist?.songCount || playlist?.count || 6;
  const displayCover = playlist?.imageSrc || "/assets/images/guilt-trip.jpg";

  const isPlayingThisPlaylist =
    isPlaying && playlistTracks.some((t) => t.id === currentTrack?.id);

  const handlePlayAll = () => {
    onPlayTrack && onPlayTrack(playlistTracks[0]);
  };

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.cover}>
          <img
            src={displayCover}
            alt={`${displayTitle} cover`}
            className={styles.coverImg}
          />
        </div>

        <div className={styles.meta}>
          <span className={styles.typeBadge}>PLAYLIST</span>
          <h1 className={styles.title}>{displayTitle}</h1>
          <p className={styles.description}>
            The ultimate soundtrack for highway journeys, rap anthems and high
            energy beats.
          </p>
          <div className={styles.details}>
            <strong>YZY Curated</strong>
            <span>•</span>
            <span>{displayCount} songs</span>
            <span>•</span>
            <span>19 min 26 sec</span>
          </div>
        </div>
      </header>

      <div className={styles.actionsBar}>
        <button
          type="button"
          onClick={handlePlayAll}
          className={styles.playAllBtn}
        >
          {isPlayingThisPlaylist ? (
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
              Play All
            </>
          )}
        </button>
      </div>

      <section className={styles.tracksSection} aria-label="Tracks in playlist">
        <h2 className={styles.sectionTitle}>Tracks</h2>

        <div className={styles.tableHeader}>
          <span>#</span>
          <span>Cover</span>
          <span>Title</span>
          <span className={styles.alignRight}>Genre</span>
          <span className={styles.alignRight}>Time</span>
        </div>

        <div className={styles.tracksList}>
          {playlistTracks.map((t) => (
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
      </section>
    </main>
  );
}
