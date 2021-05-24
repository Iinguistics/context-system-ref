import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import { GlobalStateProvider, StateContext } from "../contexts/ClassProvider";
import A from "../contexts/A";
import B from "../contexts/B";

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
                  <h1>Name: {context.name}</h1>
                  <A></A>
                  <br />
                  <B></B>
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
