import React, { Component } from 'react';
import Eventchild from './components/eventchild.js';
import update from 'react-addons-update';

class Event extends Component {
 constructor(props){
   super(props);
   this.state = {
     initial : 'hai',
     practise : {
       yamuna : 'android-developer',
       mayank : 'Back-end',
     },
     eventcolor : 'blue',
   };
   this.changeState = this.changeState.bind(this);
   this.practicestate=this.practicestate.bind(this);
   this.eventstate=this.eventstate.bind(this);
 }
eventstate(value){
  this.setState(
    {eventcolor: value}
  );
}
 changeState(value){
   this.setState(
     {initial : value}
   );
   console.log(this.state.initial);
 }
 practicestate(value){
   console.log(value);
   this.setState({
     practise:update(this.state.practise, {
         yamuna:{$set:value}
     })
   });
 }

  render() {
    return (
      <div>
        <h1>Im parent</h1>
          <p>{this.state.eventcolor}</p>
        <Eventchild  changeValue={this.changeState} changebtnvalue={this.practicestate} eventvalue={this.eventstate}
          value2={this.state.eventcolor} value={this.state.initial} value1={this.state.practise.yamuna} />
      </div>
    );
  }
}

export default Event;
