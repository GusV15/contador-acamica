import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("El componente se ha cargado en el DOM");
  }
  componentDidUpdate() {
    console.log("El componente se ha actualizado");
  }
  componentWillUnmount() {
    console.log("El componente ya no existe");
  }
  handleClick = e => {
    this.setState({
      count: +e.target.value
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h2>{count}</h2>
        <div className="container">
          <button className="btn" value={count + 1} onClick={this.handleClick}>
            Increment
          </button>
            <button className="btn" value={count - 1} onClick={this.handleClick}>
              Decrement
          </button>
            <button className="btn" value={0} onClick={this.handleClick}>
              Reset
          </button>
        </div>
      </div>
    );
  }
}


