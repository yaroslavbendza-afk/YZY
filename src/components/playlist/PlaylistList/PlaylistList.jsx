import PlaylistCard from "../PlaylistCard/PlaylistCard";
import styles from "./PlaylistList.module.css";

const defaultPlaylists = [
  { id: "p1", title: "Roadtrip Mix", songCount: 1 },
  { id: "p2", title: "Redesign Demo", songCount: 2 },
];

export default function PlaylistList({
  playlists = defaultPlaylists,
  onNavigate,
}) {
  return (
    <ul className={styles.list}>
      {playlists.map((pl) => (
        <li key={pl.id}>
          <PlaylistCard
            title={pl.title}
            songCount={pl.songCount}
            onNavigate={onNavigate}
          />
        </li>
      ))}
    </ul>
  );
}
