import React, { Component } from 'react';

class Latha extends Component {
shouldComponentUpdate(nextProps, nextState) {
      if(nextProps.color.lathaColor === this.props.color.yellowcolor){
        return true;
      }
      return false;
    }
  render() {
      return(
        <div>
            <h1>hi skdfjksljfsk</h1>
              <p className="sample" style={{backgroundColor:this.props.color.lathaColor}}>Hey i am Latha</p>
        </div>
      );
  }
}
export default Latha;
