import { Component } from "react";
import { RESTART_GAME } from "../../actions";
import { connect } from "react-redux";

export class OldButtonContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        id="back-button"
        className="button-back focus:border-green-600 border-2 hover:bg-green-700 "
        onClick={this.props.handleClick}
      >
        Начать заново
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(RESTART_GAME),
});

export const OldButton = connect(null, mapDispatchToProps)(OldButtonContainer);
