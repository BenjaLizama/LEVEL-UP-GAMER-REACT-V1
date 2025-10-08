import styles from "../../styles/Button.module.css";

export default function Button({ type = "button", text, onClick }) {
  return (
    <button className={styles.btn} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
