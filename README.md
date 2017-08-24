# React Seven Segment Display

A React seven segment display widget

## install

```bash
$ npm install seven-segment-display
```

## usage

```jsx
import React from "react";
import { render } from "react-dom";
import Display from "seven-segment-display";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    return (
      <div style={{ width: "200px" }}>
        <Display value={this.state.count} color="blue" digitCount={3} />
      </div>
    );
  }
}

render(<Test />, document.getElementById("root"));
```