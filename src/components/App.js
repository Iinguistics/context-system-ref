import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
//import { GlobalStateProvider, StateContext } from "../contexts/ClassProvider";
import {
  GlobalStateProvider,
  StateContext,
} from "../contexts/FunctionalProvider";
import A from "./A";
import B from "./B";
import C from "./C";
class App extends Component {
  state = { language: "english" };

  onLanguageChange = (lang) => {
    this.setState({ language: lang });
  };

  render() {
    return (
      <div className="ui container ">
        <div>
          <h5>Select a language:</h5>
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value={"red"}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>

        <GlobalStateProvider>
          <StateContext.Consumer>
            {(context) => {
              console.log(context);
              return (
                <>
                  <input
                    type="text"
                    value={context.state.name}
                    onChange={(e) => context.handleChange(e)}
                  />
                  <h1>Name: {context.state.name}</h1>
                  <A></A>
                  <br />
                  <B></B>
                  <br />
                  <C></C>
                </>
              );
            }}
          </StateContext.Consumer>
        </GlobalStateProvider>
      </div>
    );
  }
}

export default App;
