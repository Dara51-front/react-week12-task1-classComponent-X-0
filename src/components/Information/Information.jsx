import styles from "./information.module.css";
import { useSelector } from "react-redux";

import {
  selectCurrentPlayer,
  selectIsDraw,
  selectIsGameEnded,
} from "../../selectors";

export default function Information() {
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);
  const isDraw = useSelector(selectIsDraw);

  const announceWinner = () => {
    if (isDraw === true && isGameEnded === true) {
      return "Ничья";
    } else if (isDraw === false && isGameEnded === true) {
      return `Победа: ${currentPlayer}`;
    } else if (isDraw === false && isGameEnded === false) {
      return `Ходит: ${currentPlayer}`;
    } else return null;
  };

  return (
    <>
      <p className={styles.information}>{announceWinner()}</p>
    </>
  );
}
