import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './components/sample.js';
import update from 'react-addons-update';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     welcome:'Task 2 : Lifecycle with multi-components',
     color: {
       sampleColor : '#fff',
       lathaColor: '',
       madhuriColor: '',
       prasanthColor: ''
     }
    };
    this.updateSample = this.updateSample.bind(this);
    this.updateLatha = this.updateLatha.bind(this);
    this.updateMadhuri = this.updateMadhuri.bind(this);
    this.updatePrasanth = this.updatePrasanth.bind(this);
  }
  updateSample(event){
    this.setState({
      color:update(this.state.color, {
        sampleColor:{$set: event.target.value}
      })
    });
  }
  updateLatha(event){
    this.setState({
      color:update(this.state.color, {
        lathaColor:{$set: event.target.value}
      })
    });
  }
  updateMadhuri(event){
    this.setState({
      color:update(this.state.color, {
        prasanthColor:{$set: event.target.value}
      })
    });
  }
  updatePrasanth(event){
    this.setState({
      color:update(this.state.color, {
        sampleColor:{$set: event.target.value}
      })
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.welcome}</h2>
          <h3>Enter Hex Value for Component</h3>

          Sample:<input   type="text" onChange={this.updateSample}    value={this.state.color.sampleColor} />
          Latha:<input    type="text" onChange={this.updateLatha}     value={this.state.color.lathaColor} />
          Madhuri:<input  type="text" onChange={this.updateMadhuri}   value={this.state.color.madhuriColor} />
          Prasanth:<input type="text" onChange={this.updatePrasanth}  value={this.state.color.prasanthColor} />

          <Sample color={this.state.color}/>
        </div>
      </div>
    );
  }

}

export default App;
