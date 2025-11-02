import styles from "./button.module.css";

export default function Button({ handleClick }) {
  return (
    <button className={styles.button} onClick={handleClick}>
      Начать заново
    </button>
  );
}
