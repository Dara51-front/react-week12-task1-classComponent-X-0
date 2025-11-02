import { Component } from "react";
import { connect } from "react-redux";

export class OldFieldContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid grid-cols-3 grid-rows-3 gap-0.5">
        {this.props.field.map((fi, index) => (
          <div
            id={`cell-${index}`}
            className="border-1 w-20 h-20 border-green-600 text-center content-center text-red-300 text-2xl"
            key={index}
            onClick={() => this.props.clickCell(index)}
          >
            {fi}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  field: state.field,
});

export const OldField = connect(mapStateToProps)(OldFieldContainer);
