import React from "react";
import Digit from "./Digit";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg viewBox={[-1, -1, 12 * this.props.digitCount, 20]}>
        {this.props.value
          .toString()
          .padStart(this.props.digitCount, " ")
          .split("")
          .slice(-this.props.digitCount)
          .map((digit, key) =>
            <Digit
              key={key}
              value={digit}
              x={key * 12}
              color={this.props.color}
            />
          )}
      </svg>
    );
  }
}

Display.defaultProps = {
  digitCount: 4,
  value: ""
};

export default Display;
