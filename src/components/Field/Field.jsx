import { useSelector } from "react-redux";
import styles from "./field.module.css";
import { selectField } from "../../selectors";

export default function Field({ clickCell }) {
  const field = useSelector(selectField);

  return (
    <div className={styles.fieldContainer}>
      {field.map((fi, index) => (
        <div
          className={styles.cellField}
          key={index}
          onClick={() => clickCell(index)}
        >
          {fi}
        </div>
      ))}
    </div>
  );
}
