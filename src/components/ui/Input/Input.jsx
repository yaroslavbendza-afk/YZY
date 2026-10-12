import styles from "./Input.module.css";

export default function Input({
  type = "text",
  placeholder,
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${styles.input} ${className}`.trim()}
      {...props}
    />
  );
}
