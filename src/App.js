import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Latha from './Latha.js';
import Kishore from './Kishore.js';

const element = (
  <h1>
    Hello Prasanth!
  </h1>
);


class App extends Component {
    constructor(props) {
      super(props);
      console.log(this.props);
      this.state ={
        name: 'Prasanth',
        id:'0'
      }
    }
    componentDidMount(){
      console.log('Hey im first');
    }
    componentWillMount(){
      console.log('hey im second');
    }
    componentWillReceiveProps (){
      console.log('hey there is uodate');
    }
    handleClick(){
      this.setState(
        {
          id : 2,
          name : 'Latha'
        }
      )
    }
    render() {
        console.log(this.props);
        return ( <
            div className = "App" >
            <
            div className = "App-header" >
            <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <
            h2 > Welcome to React < /h2> < /
            div > <
            p className = "App-intro" >
            To get started, edit < code > src / App.js < /code> and save to reload. < /
            p >
            {element}
            <Latha name={this.state.name}/>
            <Kishore  name={this.state.name} animal="fox"  id={this.state.id}/>
            <p onClick={()=>{this.handleClick()}}>Click to Update</p>
            </div>
        );
    }
}

export default App;
