import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Child} from "./components/Child";


class App extends React.Component{
  constructor(props){
    super(props);
        this.state={
          visable: true
        }
  }
  render(){
    return(
      <div className="container">
            <button onClick={()=>this.onClick()}>Click me</button>
      </div>

    )
  }
  onClick(){
    console.log(this.state.visable);
    alert(this.state.visable);
    {
      this.state.visable ? <Child/> : null
}
    this.setState({visable: !this.state.visable});
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
