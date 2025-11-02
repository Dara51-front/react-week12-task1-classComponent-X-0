import { OldField } from "./components/Field/Field.jsx";
import { OldInformation } from "./components/Information/Information.jsx";
import { OldButton } from "./components/Button/Button.jsx";
import "./App.css";
import { connect } from "react-redux";

import {
  SET_CURRENT_PLAYER,
  SET_FIELD,
  IS_DRAW,
  IS_GAME_END,
} from "./actions.js";

export function AppContainer({ dispatch, currentPlayer, isGameEnded, field }) {
  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8],
    [2, 4, 6], // Варианты побед по диагонали
  ];

  const checkWin = (field) => {
    for (let i = 0; i < WIN_PATTERNS.length; i++) {
      let check1 = field[WIN_PATTERNS[i][0]];
      let check2 = field[WIN_PATTERNS[i][1]];
      let check3 = field[WIN_PATTERNS[i][2]];
      if (check1 === check2 && check1 === check3 && check1 !== "") {
        dispatch(SET_CURRENT_PLAYER("X"));
        dispatch(IS_GAME_END(true));
        return;
      } else if (!field.includes("") && !isGameEnded) {
        dispatch(IS_GAME_END(true));
        dispatch(IS_DRAW(true));
      }
    }
  };

  const clickCell = (index) => {
    if (currentPlayer === "X" && !isGameEnded && field[index] === "") {
      dispatch(SET_CURRENT_PLAYER("O"));
    } else if (currentPlayer === "O" && !isGameEnded && field[index] === "") {
      dispatch(SET_CURRENT_PLAYER("X"));
    }
    if (field[index] === "" && !isGameEnded) {
      const newFields = field.slice();
      newFields[index] = currentPlayer;
      dispatch(SET_FIELD(newFields));
      checkWin(newFields);
    }
    if (!field.includes("")) {
      dispatch(IS_GAME_END(true));
    }
  };

  return (
    <>
      <OldInformation />
      <OldField clickCell={clickCell} />
      <OldButton />
    </>
  );
}

const mapStateToProps = (state) => ({
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  field: state.field,
});

export const App = connect(mapStateToProps)(AppContainer);
