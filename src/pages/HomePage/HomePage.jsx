import Button from "../../components/ui/Button/Button";
import TrackItem from "../../components/playlist/TrackItem/TrackItem";

export default function HomePage() {
  return (
    <main>
      <section>
        <header>
          <span>Рекомендований трек</span>
          <h1>Guilt Trip</h1>
          <p>Kanye West · Yeezus</p>
        </header>
        <Button>Слухати</Button>
      </section>

      <section>
        <h2>Категорії</h2>
        <ul>
          <li>
            <Button>Всі</Button>
          </li>
          <li>
            <Button>Реп</Button>
          </li>
          <li>
            <Button>Хіп-хоп</Button>
          </li>
          <li>
            <Button>Класика</Button>
          </li>
        </ul>
      </section>

      <section>
        <h2>Популярні треки</h2>
        <ul>
          <li>
            <TrackItem />
          </li>
          <li>
            <TrackItem />
          </li>
          <li>
            <TrackItem />
          </li>
        </ul>
      </section>

      <section>
        <h2>Рекомендовані треки</h2>
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
