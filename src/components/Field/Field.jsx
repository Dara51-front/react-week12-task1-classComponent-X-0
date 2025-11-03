import { Component } from "react";
import { connect } from "react-redux";
import {
  SET_CURRENT_PLAYER,
  SET_FIELD,
  IS_DRAW,
  IS_GAME_END,
} from "../../actions.js";

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

export class OldFieldContainer extends Component {
  constructor(props) {
    super(props);

    this.clickCell = this.clickCell.bind(this);
    this.checkWin = this.checkWin.bind(this);
  }

  checkWin(newFields) {
    for (let i = 0; i < WIN_PATTERNS.length; i++) {
      let check1 = newFields[WIN_PATTERNS[i][0]];
      let check2 = newFields[WIN_PATTERNS[i][1]];
      let check3 = newFields[WIN_PATTERNS[i][2]];
      if (check1 === check2 && check1 === check3 && check1 !== "") {
        this.props.dispatch(IS_GAME_END(true));
        this.props.dispatch(SET_CURRENT_PLAYER("X"));

        return;
      } else if (!newFields.includes("") && !this.props.isGameEnded) {
        this.props.dispatch(IS_GAME_END(true));
        this.props.dispatch(IS_DRAW(true));
      }
    }
  }

  clickCell(index) {
    if (
      this.props.currentPlayer === "X" &&
      !this.props.isGameEnded &&
      this.props.field[index] === ""
    ) {
      this.props.dispatch(SET_CURRENT_PLAYER("O"));
    } else if (
      this.props.currentPlayer === "O" &&
      !this.props.isGameEnded &&
      this.props.field[index] === ""
    ) {
      this.props.dispatch(SET_CURRENT_PLAYER("X"));
    }
    if (!this.props.field.includes("")) {
      this.props.dispatch(IS_GAME_END(true));
    }
    if (this.props.field[index] === "" && !this.props.isGameEnded) {
      const newFields = this.props.field.slice();
      newFields[index] = this.props.currentPlayer;
      this.props.dispatch(SET_FIELD(newFields));
      this.checkWin(newFields);
    }
  }

  render() {
    return (
      <div className="grid grid-cols-3 grid-rows-3 gap-0.5">
        {this.props.field.map((fi, index) => (
          <div
            className="border-1 w-20 h-20 border-green-600 text-center content-center text-red-300 text-2xl"
            key={index}
            onClick={() => this.clickCell(index)}
          >
            {fi}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  field: state.field,
});

export const OldField = connect(mapStateToProps)(OldFieldContainer);
