import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

export default function AuthModal() {
  return (
    <dialog open>
      <header>
        <h2>Вхід до облікового запису</h2>
        <p>Увійдіть, щоб слухати музику</p>
      </header>

      <form>
        <div>
          <label htmlFor="email">Email</label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>

        <div>
          <label htmlFor="password">Пароль</label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>

        <Button>Увійти</Button>
      </form>
    </dialog>
  );
}
