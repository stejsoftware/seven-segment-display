# React Seven Segment Display

A React 7-segment display widget.

## Install

### yarn

```bash
$ yarn add seven-segment-display
```

### npm

```bash
$ npm install seven-segment-display --save
```

## Usage

### Browser

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>7-Segment Display</title>

    <script src="//unpkg.com/react@latest/dist/react.js"></script>
    <script src="//unpkg.com/react-dom@latest/dist/react-dom.js"></script>
    <script src="//unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    <script src="7-seg-display.js"></script>
</head>

<body>
    <div id="root"></div>
    <script type="text/babel">
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
                        <Display 
                          value={this.state.count} 
                          color="blue" 
                          digitCount={3}/>
                    </div>
                );
            }
        }

        ReactDOM.render(
            <Test />, 
            document.getElementById("root")
        );
    </script>
</body>

</html>
```

### Node
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