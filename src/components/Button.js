import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
  renderSubmit(val) {
    return val === "english" ? "Submit" : "Voorleggen";
  }

  renderButtonColor(color) {
    return (
      <button className={`ui inverted button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButtonColor(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
