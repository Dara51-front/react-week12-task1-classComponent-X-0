import styles from "./information.module.css";
import { connect } from "react-redux";
import { Component } from "react";

export class OldInformationContainer extends Component {
  constructor(props) {
    super(props);
    this.announceWinner = this.announceWinner.bind(this);
  }

  announceWinner() {
    if (this.props.isDraw === true && this.props.isGameEnded === true) {
      return "Ничья";
    } else if (this.props.isDraw === false && this.props.isGameEnded === true) {
      return `Победа: ${this.props.currentPlayer}`;
    } else if (
      this.props.isDraw === false &&
      this.props.isGameEnded === false
    ) {
      return `Ходит: ${this.props.currentPlayer}`;
    } else return null;
  }

  render() {
    return (
      <>
        <p className={styles.information}>{this.announceWinner()}</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isDraw: state.isDraw,
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
});

export const OldInformation = connect(mapStateToProps)(OldInformationContainer);
