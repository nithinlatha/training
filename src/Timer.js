import React, { Component } from 'react';

class Timer extends Component {
      // componentWillMount (){
      //     console.log('Going to mount');
      // }
      // componentDidMount (){
      //   console.log('Yes Mounted');
      // }
      // componentWillReceiveProps(){
      //   console.log('Someone updated');
      // }
      // componentWillUpdate(){
      //   console.log('Ok, im planned to update myself');
      // }
    shouldComponentUpdate (){
      console.log('You can stop me');
      if(this.props.timer >= 5){
  return true;
      }
      console.log('Okay, i stopped');
      return false;
    }
    componentDidUpdate (){
      console.log('Yes! im updated');
    }
    componentWillUnmount (){
      console.log('Unmount');
    }

    handleClick(){
      this.props.update();
    }
    render() {
        return (
          <div>
          {this.props.timer}
           <button  onClick={()=>{this.handleClick();}}>Latha</button>
          </div>
        );
    }
}

export default Timer;
