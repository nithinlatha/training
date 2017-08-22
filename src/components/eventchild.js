import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';


 class Eventchild extends Component {
  updateValue(event){
    this.props.changeValue(event.target.value);
  }
  ongraph(){
    this.props.changeValue("it is from button");
  }
  practicegraph(){
    this.props.changebtnvalue("i am practice button");

  }

  render() {
    return (
      <div>
      <p className="sample">{this.props.value}</p>
        <input onChange={this.updateValue.bind(this)} type="text"  />
        <Button bsStyle="success" bsSize="large" onClick={this.ongraph.bind(this)} type="button" > Click to update </Button>
        <input className="messageCheckbox" onChange={this.updateValue.bind(this)} type="checkbox" value="1" name="mailId[]" />Kishore
        <input className="messageCheckbox" onChange={this.updateValue.bind(this)} type="checkbox" value="2" name="mailId[]" />Prasanth
            <Button bsStyle="success" bsSize="large" onClick={this.practicegraph.bind(this)} type="button" > Click to practice </Button>
        /*  <div className="bullet-img">
             <h1>Hi..</h1>
             <div className="image-div">
                 <Image src="../images/light.jpg" />
             </div>
         </div>*/
      </div>
    );
  }
}
export default Eventchild;
