import React, { Component } from 'react';
 class Eventchild extends Component {
  updateValue(event){
    this.props.changeValue(event.target.value);
  }
  ongraph(){
    this.props.changeValue("it from button");
  }
  render() {
    return (
      <div>
      <p className="sample">{this.props.value}</p>
        <input onChange={this.props.changeValue.bind(this)} type="text"  />
        <button onClick={this.ongraph.bind(this)} type="button" > Click to update </button>
        <input className="messageCheckbox" onChange={this.props.changeValue.bind(this)} type="checkbox" value="Kishore" name="mailId[]" />Kishore
        <input className="messageCheckbox" onChange={this.props.changeValue.bind(this)} type="checkbox" value="Prasanth" name="mailId[]" />Prasanth
      </div>
    );
  }
}
export default Eventchild;
