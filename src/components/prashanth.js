import React, { Component } from 'react';


 class Prashanth extends Component {
  render() {
    return (
      <div>
      <p className="sample" style={{backgroundColor:this.props.color.prasanthColor}}>Hey im Prashanth</p>
        <input type="text"  onChange={this.props.onChange}  />
      </div>
    );
  }
}
export default Prashanth;
