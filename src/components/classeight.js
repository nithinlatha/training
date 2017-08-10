import React, { Component } from 'react';

export default class Classeight extends Component {
  constructor(props){
    super(props);
    // var x= 10;
    // x = x+1;
    this.activateLasers = this.activateLasers.bind(this);
  }
  activateLasers(e){
    e.preventDefault();
    console.log(this);
  }
  render() {
      return(
        <div>
        <a href="/link" onClick={this.activateLasers.bind(this)}>
          Click me
        </a>
        <a href="/link" onClick={this.activateLasers.bind(this)}>
          Click me
        </a>
        </div>
      );
  }
}
