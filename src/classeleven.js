import React, { Component } from 'react';

export const numbers = [1, 2, 3, 4, 5];
export const user = "welocome texct";
export const alpha = ['a', 'b', 'c', 'd', 'e'];
export const userlists = <ul><li>water bottle</li><li>key chain</li></ul>;


export const listuser = ['pallavi', 'raju', 'anadhakrishnan', 'bineeth', 'sudhan'];

export const listItems = numbers.map((number,index) =>
    <li key={index}>{number}</li>
  );

export default class Demo extends Component {
  render() {
    return (
      <p>welocome kishoe</p>
    );
}
}

export  class Demotwo extends Component {
  render() {
    return (
      <p>demo</p>
    );
}
}

export  class Demothree extends Component {
  render() {
    return (
      <p>demo</p>
    );
}
}
