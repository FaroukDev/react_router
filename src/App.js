import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import Navigation from "./components/Navigation";


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <BrowserRouter>
            <div>
            <Navigation />
              <Route path="/" component={Home} exact/>
              <Route path="/history" component={History}/>
              </div>
            </BrowserRouter>
          </header>
      </div>
    );
  }
}

export default App;
