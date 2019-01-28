import React, { Component } from 'react';
import Landing from "./components/Landing";
import Appbar from "./Appbar";
import Main from "./Main";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar/>
        <Main />
      </div>
    );
  }
}
export default App;
