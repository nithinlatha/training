import React, { Component } from 'react';

export class Timer extends Component {
  render() {
    console.log(this.props.user);
    this.props.friends.map(function(index){
      return(<p>{index}</p>);
    })
  }
}

export class Phone extends Component {
  render() {
    if(false){
      return (
      <p>Hai</p>
      );
    }else{
      return (
        <div>
      <p>Phone Logout</p>
      <p>sdfds</p> </div>
      );
    }

  }
}
