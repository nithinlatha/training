import React, { Component } from 'react';

class Child extends Component {
  render() {
    if(!this.props.data.hasData){
      return (null);
    }
    return (
      <p>{this.props.data.name}</p>

    )
  }
}

export default Child;
