import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './components/sample.js';
import update from 'react-addons-update';
import Classeight from './components/classeight';
import Latha from './components/latha.js';
import Prashanth from './components/prashanth.js';
import Madhuri from './components/madhuri.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     welcome:'Task 2 : Lifecycle with multi-components',
     color: {
       sampleColor : '#fff',
       madhuriColor: 'pink',
       prasanthColor: 'orange',
       lathaColor: '',
       yellowcolor:"yellow"
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
        madhuriColor:{$set: event.target.value}
      })
    });
  }
  updatePrasanth(event){
    this.setState({
      color:update(this.state.color, {
        prasanthColor:{$set: event.target.value}
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
        Prasanth:<input type="text"  onChange={this.updatePrasanth} value={this.state.color.prasanthColor} />
          <Madhuri color={this.state.color}/>

          <Sample color={this.state.color}/>
            <Latha color={this.state.color}/>
              <Prashanth color={this.state.color}/>
          <Classeight />
        </div>
      </div>
    );
  }

}

export default App;
