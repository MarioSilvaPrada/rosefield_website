import React from "react";
import "./App.css";

import Advertisment from "./components/Advertisment";
import Header from "./components/Header";
import Main from "./components/Main";
import Story from "./components/Story";

function App() {
  return (
    <div className="App">
      <Advertisment />
      <Header />
      <Main />
      <Story />
    </div>
  );
}

export default App;
