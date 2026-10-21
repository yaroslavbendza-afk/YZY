import { useSearchParams } from "react-router";
import AuthModal from "../../components/auth/AuthModal/AuthModal";
import styles from "./AuthPage.module.css";

export default function AuthPage({ onLogin }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode") === "signup" ? "signup" : "login";
  return (
    <main className={styles.page}>
      <AuthModal
        isPage={true}
        mode={mode}
        onModeChange={(nextMode) =>
          setSearchParams(nextMode === "signup" ? { mode: "signup" } : {})
        }
        onLogin={onLogin}
      />
    </main>
  );
}
