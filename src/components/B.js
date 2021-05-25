import React, { Component } from "react";
//import { StateContext } from "./ClassProvider";
import { StateContext } from "../contexts/FunctionalProvider";

class B extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "100px",
          flexDirection: "column",
          background: "#333",
          color: "white",
          fontSize: "1.2rem",
        }}
      >
        B
        <StateContext.Consumer>
          {(context) => <h2>Name: {context.state.name}</h2>}
        </StateContext.Consumer>
        {this.props.children}
      </div>
    );
  }
}

export default B;
