import './App.css';
import React, {Component} from "react";
import Car from "./Car/Car";

class App extends Component {
  render() {
    const divStyle = {
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>
        <h1>Hello world!</h1>

        <Car />
      </div>
    );
  }
}

export default App;
