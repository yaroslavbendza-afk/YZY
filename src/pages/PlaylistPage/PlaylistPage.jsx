import Button from "../../components/ui/Button/Button";
import TrackItem from "../../components/playlist/TrackItem/TrackItem";

export default function PlaylistPage() {
  return (
    <main>
      <header>
        <span>Плейлист</span>
        <h1>Roadtrip Mix</h1>
        <p>Добірка треків для подорожей</p>
        <Button>Відтворити все</Button>
      </header>

      <section>
        <h2>Список треків</h2>
        <ul>
          <li>
            <TrackItem />
          </li>
          <li>
            <TrackItem />
          </li>
        </ul>
      </section>
    </main>
  );
}
