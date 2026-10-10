export default function Input({ type = "text", placeholder, id }) {
  return <input type={type} id={id} placeholder={placeholder} />;
}
