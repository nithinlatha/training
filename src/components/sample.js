import React, { Component } from 'react';


export default class Sample extends Component {

  render() {
    return (
      <p className="sample" style={{backgroundColor:this.props.color.sampleColor}}>Hey im Sample</p>

    );
  }

}
