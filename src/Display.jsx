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
          .map((digit, key) => (
            <Digit
              key={key}
              value={digit}
              x={key * 12}
              onOpacity={this.props.digitProps.onOpacity}
              offOpacity={this.props.digitProps.offOpacity}
              color={this.props.digitProps.color}
              nullDisplay={this.props.nullDisplay}
            />
          ))}
      </svg>
    );
  }
}

Display.defaultProps = {
  digitCount: 4,
  value: "",
  nullDisplay: []
};

export default Display;
