import { useState } from "react";
import styles from "./AuthModal.module.css";

export default function AuthModal({
  isOpen = false,
  initialMode = "login",
  mode: controlledMode,
  onModeChange,
  onClose,
  isPage = false,
  onLogin,
}) {
  const [localMode, setLocalMode] = useState(initialMode);
  const mode = controlledMode ?? localMode;
  const setMode = onModeChange ?? setLocalMode;
  const [name, setName] = useState("Alex Carter");
  const [email, setEmail] = useState("you@example.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen && !isPage) return null;

  const isSignUp = mode === "signup";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin({
        name: isSignUp ? name : email.split("@")[0] || "YZY User",
        email,
      });
    }
    if (onClose) onClose();
  };

  const handleDemoListener = () => {
    if (onLogin) {
      onLogin({
        name: "Demo Listener",
        email: "listener@yzy.music",
      });
    }
    if (onClose) onClose();
  };

  const content = (
    <div className={styles.authWrapper} onClick={(e) => e.stopPropagation()}>
      {!isPage && onClose && (
        <button
          type="button"
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close"
          title="Close"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}

      <header className={styles.header}>
        <div className={styles.brandRow}>
          <div className={styles.logoSquareBadge}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
          <span className={styles.brandName}>YZY</span>
        </div>

        <h1 className={styles.title}>
          {isSignUp ? "Create your YZY account" : "Log in to keep listening"}
        </h1>
        <p className={styles.subtitle}>
          {isSignUp
            ? "Sign up free and build your own library of playlists in seconds."
            : "Your playlists and liked songs are waiting."}
        </p>
      </header>

      <div className={styles.card}>
        <nav className={styles.tabNav} aria-label="Mode switcher">
          <button
            type="button"
            className={`${styles.tabButton} ${!isSignUp ? styles.activeTab : ""}`}
            onClick={() => setMode("login")}
          >
            Log In
          </button>
          <button
            type="button"
            className={`${styles.tabButton} ${isSignUp ? styles.activeTab : ""}`}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </nav>

        <form className={styles.form} onSubmit={handleSubmit}>
          {isSignUp && (
            <div className={styles.field}>
              <label htmlFor="auth-name" className={styles.label}>
                Name
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <input
                  id="auth-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Carter"
                  className={styles.input}
                />
              </div>
            </div>
          )}

          <div className={styles.field}>
            <label htmlFor="auth-email" className={styles.label}>
              Email
            </label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <input
                id="auth-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="auth-password" className={styles.label}>
              Password
            </label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                id="auth-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={isSignUp ? "At least 6 characters" : "••••••••"}
                className={styles.inputWithToggle}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className={styles.passwordToggle}
                aria-label={showPassword ? "Hide password" : "Show password"}
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            {isSignUp ? "Create account" : "Log In"}
          </button>
        </form>

        <div className={styles.divider}>OR</div>

        <button
          type="button"
          onClick={handleDemoListener}
          className={styles.demoBtn}
        >
          Continue as demo listener
        </button>
      </div>
    </div>
  );

  if (isPage) {
    return content;
  }

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {content}
    </div>
  );
}
