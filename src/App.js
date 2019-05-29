import React from "react";
import "./App.css";

import Advertisment from "./components/Advertisment";
import Header from "./components/Header";
import Main from "./components/Main";
import Story from "./components/Story";

import { animateHTML } from "./config/animation";

class App extends React.Component {

  // Call animation function
  componentDidMount() {
    animateHTML().init();
  }

  render() {
    return (
      <div className="App">
        <Advertisment />
        <Header />
        <Main />
        <Story />
      </div>
    );
  }
}

export default App;
