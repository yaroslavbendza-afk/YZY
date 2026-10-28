import AuthModal from "../../components/auth/AuthModal/AuthModal";
import styles from "./AuthPage.module.css";

export default function AuthPage({ onLogin, onNavigate }) {
  return (
    <main className={styles.page}>
      <AuthModal
        isPage={true}
        initialMode="login"
        onLogin={onLogin}
        onClose={() => onNavigate && onNavigate("home")}
      />
    </main>
  );
}
