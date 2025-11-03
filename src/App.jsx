import { OldField } from "./components/Field/Field.jsx";
import { OldInformation } from "./components/Information/Information.jsx";
import { OldButton } from "./components/Button/Button.jsx";
import { connect } from "react-redux";
import { Component } from "react";

export class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <OldInformation />
        <OldField />
        <OldButton />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  field: state.field,
});

export const App = connect(mapStateToProps)(AppContainer);
