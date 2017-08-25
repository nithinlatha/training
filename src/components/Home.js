import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component{
  render(){
    return(
        <div>
            <p>In a new component {this.props.name}</p>
            <p>Yor age is {this.props.age}</p>
            {this.props.children}
        </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  children: PropTypes.element.isRequired
}
