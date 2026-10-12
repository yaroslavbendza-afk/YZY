import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "secondary",
  size,
  className = "",
  type = "button",
  ...props
}) {
  const variantClass = styles[variant] || styles.secondary;
  const sizeClass = size ? styles[size] : "";
  const combinedClassName =
    `${styles.button} ${variantClass} ${sizeClass} ${className}`.trim();

  return (
    <button type={type} className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
