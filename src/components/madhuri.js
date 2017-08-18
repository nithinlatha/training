import React, { Component } from 'react';
import update from 'react-addons-update';


class Madhuri extends Component {
  constructor(props){
    super(props);
    this.state = {
     colorname: {
       madColor: this.props.color.madhuriColor
     }
    };
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.color.madhuriColor);
    this.setState({
      colorname:update(this.state.colorname, {
        madColor:{$set:nextProps.color.madhuriColor}
      })
    });
  }
  shouldComponentUpdate(nextProps, nextState){
    // console.log(nextState.colorname.madColor);
    if(nextState.colorname.madColor==="pink"){
      // console.log("yes i'm pink");
      return true;
    }
    else{
    //   console.log("Sorry i'm not pink");
    //   setTimeout(function() {
    //       this.setState({
    //         madhuriColor: "pink"
    //   });
    // }.bind(this),3000);

    setTimeout(function() {
      this.setState({
        colorname:update(this.state.colorname, {
          madColor:{$set:"pink"}
        })
      });
    }.bind(this),5000);
      return true;
  }
    }
  render() {
      return(
        <div>
            <h1>hi skdfjksljfsk</h1>
              <p className="sample" style={{backgroundColor:this.state.colorname.madColor}}>Hey i am Madhuri</p>
        </div>
      );
  }
}
export default Madhuri;
