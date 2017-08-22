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
       mayank : 'BED'
     }
   };
   this.changeState = this.changeState.bind(this);
   this.practicestate=this.practicestate.bind(this);
 }
 changeState(value){
   console.log(value);
   this.setState(
     {initial : value}
   );
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
        <Eventchild  changeValue={this.changeState} changebtnvalue={this.practicestate}
          value={this.state.initial} value1={this.state.practise.yamuna} />
      </div>
    );
  }
}

export default Event;
