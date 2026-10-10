import Button from "../../ui/Button/Button";

export default function SoundbarDrawer() {
  return (
    <aside>
      <header>
        <h3>Еквалайзер</h3>
        <Button>Закрити</Button>
      </header>

      <section>
        <h4>Попередній перегляд сигналу</h4>
        <p>Трек не грає</p>
      </section>

      <section>
        <div>
          <label htmlFor="mids">Середні частоти</label>
          <input id="mids" type="range" defaultValue="50" />
        </div>
        <div>
          <label htmlFor="bass">Бас</label>
          <input id="bass" type="range" defaultValue="50" />
        </div>
        <div>
          <label htmlFor="highs">Високі частоти</label>
          <input id="highs" type="range" defaultValue="50" />
        </div>
      </section>

      <footer>
        <Button>Скинути</Button>
      </footer>
    </aside>
  );
}
