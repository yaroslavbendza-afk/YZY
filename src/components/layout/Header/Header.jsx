import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

export default function Header() {
  return (
    <header>
      <nav>
        <a href="/">YZY</a>

        <form role="search">
          <Input type="search" placeholder="Пошук треків..." />
        </form>

        <ul>
          <li>
            <a href="#premium">Premium</a>
          </li>
          <li>
            <a href="#support">Support</a>
          </li>
          <li>
            <a href="#download">Download</a>
          </li>
        </ul>

        <div>
          <Button>Sign Up</Button>
          <Button>Log In</Button>
        </div>
      </nav>
    </header>
  );
}
