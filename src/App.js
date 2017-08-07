import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Timer,Phone} from './components/Timer.js';
import Latha from './Latha.js';
import Kishore from './Kishore.js';

const elem =(
  <p>Hi it's stateless </p>
);

const element = (
  <h1>
    Hello Prasanth!
  </h1>
);

class App extends Component {

  constructor(props) {
   super(props);
   this.state = {
     timer : 0
  };
   };
   componentWillMount(){
     setInterval(function(){
       this.setState(
         {
           timer : ++this.state.timer
         }
       )
     }.bind(this), 1000);
     }
  render() {



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {this.state.timer}</h2>

        </div>
        <p></p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
  }

export default App;
