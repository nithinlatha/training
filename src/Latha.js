import React, { Component } from 'react';

class Latha extends Component {
    componentWillReceiveProps (){
      console.log('Yes Latha updated');
    }
    render() {
        return (
          
          <div>This is Latha component Name : {this.props.name}</div>
        );
    }
}

export default Latha;
