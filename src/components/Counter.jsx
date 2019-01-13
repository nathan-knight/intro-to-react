import React from 'react';
import './Counter.css';

export default class Counter extends React.Component {
  render() {
    const { incrementCount, decrementCount, count } = this.props;
    return (
      <div className="counter-container">
        <button onClick={decrementCount}>-</button>
        {count}
        <button onClick={incrementCount}>+</button>
      </div>
    )
  }
}