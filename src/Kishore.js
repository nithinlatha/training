import React, { Component } from 'react';

class Kishore extends Component {
    componentWillReceiveProps (){
      console.log('Yes kishore updated');
    }
    shouldComponentUpdate(newProps, newState){
      console.log(newProps);
      if(newProps.id == 1){
        return false;
      }else{
        return true;
      }
    }
    render() {
        return (
          <div>This is Kishore component Id : {this.props.id} {this.props.name} {this.props.animal}</div>
        );
    }
}
export default Kishore;
