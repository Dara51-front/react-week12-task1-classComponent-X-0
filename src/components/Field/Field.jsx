import styles from "./field.module.css";
import { Component } from "react";
import { connect } from "react-redux";

export class OldFieldContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.fieldContainer}>
        {this.props.field.map((fi, index) => (
          <div
            id={`cell-${index}`}
            className={`${styles.cellField} cell`}
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
