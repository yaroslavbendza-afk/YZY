import Button from "../../ui/Button/Button";
import PlaylistList from "../../playlist/PlaylistList/PlaylistList";

export default function Sidebar() {
  return (
    <aside>
      <nav>
        <h2>Моя бібліотека</h2>
        <Button>+</Button>

        <ul>
          <li>
            <a href="/">Головна</a>
          </li>
        </ul>

        <section>
          <h3>Плейлисти</h3>
          <PlaylistList />
        </section>

        <p> додавайте треки до плейлистів</p>
      </nav>
    </aside>
  );
}
