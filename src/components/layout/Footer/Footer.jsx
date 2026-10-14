import Button from "../../ui/Button/Button";

export default function Footer() {
  return (
    <footer>
      <section>
        <h4>Зараз грає</h4>
        <p>Виберіть трек для відтворення</p>
      </section>

      <section>
        <Button>Попередня</Button>
        <Button>Відтворити</Button>
        <Button>Наступна</Button>
        <input type="range" defaultValue="0" />
      </section>

      <section>
        <label htmlFor="volume">Гучність</label>
        <input id="volume" type="range" defaultValue="70" />
      </section>
    </footer>
  );
}
