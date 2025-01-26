// src/Counter.js
import React, { useState } from 'react';
import './Counter.css'; // We'll add styling in the next step.

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      
      <div className="counter-value">{count}</div>

      <div className="button-container">
        <button className="counter-button" onClick={increment}>+</button>
        <button className="counter-button" onClick={decrement}>-</button>
        <button className="counter-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
