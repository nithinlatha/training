import React, { Component } from 'react';
import Eventchild from './components/eventchild.js';

class Event extends Component {
 constructor(props){
   super(props);
   this.state = {
     initial : 'hai'
   };
   this.changeState = this.changeState.bind(this);
 }
 changeState(value){
   console.log(value);
   this.setState(
     {initial : value}
   );
 }
  render() {
    return (
      <div>
        <h1>Im parent</h1>
        <Eventchild changeValue={this.changeState} value={this.state.initial} />
      </div>
    );
  }
}

export default Event;
