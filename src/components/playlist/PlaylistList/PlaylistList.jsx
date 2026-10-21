import PlaylistCard from "../PlaylistCard/PlaylistCard";
import { mockPlaylists } from "../../../data/mockPlaylists";
import styles from "./PlaylistList.module.css";

export default function PlaylistList({ playlists = mockPlaylists }) {
  return (
    <ul className={styles.list}>
      {playlists.map((pl) => (
        <li key={pl.id}>
          <PlaylistCard id={pl.id} title={pl.title} songCount={pl.songCount} />
        </li>
      ))}
    </ul>
  );
}
