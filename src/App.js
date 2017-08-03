import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Timer,Phone} from './components/Timer.js';
import Latha from './Latha.js';
import Kishore from './Kishore.js';

const elem =(
  <p>Hi it's stateless </p>


const element = (
  <h1>
    Hello Prasanth!
  </h1>
);


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'kishore',
      id : 0,
      friends : ["Prasanth","Latha"]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to {this.state.id} {this.state.name} friends: {
              this.state.friends.map(function(index){
                return(<p>{index}</p>)
              })
            } Training</h2><Timer user={this.state} na="prasanth" name={this.state.name} style={{backgroundColor:"#cdcdcd"}} /> <Phone />,
        </div>
        <p className="App-intro">
          {elem}
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

}

export default App;
