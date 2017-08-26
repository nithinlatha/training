import React, { Component } from 'react';
import Child from './components/condition-child.js';
import Childtwo from './components/children-two.js';
import './App.css';

class Yamuna extends React.Component {
  render() {
    return (              <input type="email" className="form-control" id="email" />
);
  }
}

class Forms extends Component {
  constructor(props){
    super(props);
    this.state = {
     welcome:'Task 2 : Lifecycle with multi-components',
     validation :true,
     email:"",
     data:{
       hasData:true,
       name:"kishore",
     },
      childVisible: false,
    };
  }
  validate(){
    if(!this.state.email){
      this.setState({
        validation:true
      })
    }else{
      this.setState({
        validation:false
      })
    }
  }
  change(event){
    this.setState({
      email:event.target.value
    })
  }
  onClick() {
    this.setState({childVisible: !this.state.childVisible});
  }

  render() {
    if(!this.state.validation){
      return(null);
    }
    return (
<div>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input onChange={this.change.bind(this)} type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <div className="checkbox">
            <label><input type="checkbox"/> Remember me</label>
          </div>
          <button onClick={this.validate.bind(this)} type="button" className="btn btn-default">Submit</button>
          {
            this.state.data.hasData ?
            <Child  data={this.state.data}/>
            :
            <Childtwo />
          }
        </form>
            <button onClick={() => this.onClick()} type="button" className="btn btn-default">Submit</button>
              {
           this.state.childVisible
             ? <Yamuna />
             : null
         }
</div>

    );
  }

}

export default Forms;
