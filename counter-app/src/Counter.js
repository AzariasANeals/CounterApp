import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // The "Increment" button should increase the count by 1.
  const handleIncrement = () => {
    setCount(count => count + 1);
    console.log(count);
  };

  // The "Increment After Delay" button should increase the count by 1 after a 2-second delay.
  const handleIncrementAfterDelay = () => {
    setTimeout(() => {
      setCount(count => count + 1);
    }, 2000);
    console.log(count);
  };

  // The "Increment Twice" button attempts to increment the count by 2 immediately. This is to demonstrate batching and how React treats multiple state updates.
  const handleIncrementTwice = () => {
    setCount(count => count + 1);
    setCount(count => count + 1); // React will batch both of these updates together
    console.log(count);
  };

  // The "Correct Increment Twice" button should correctly increments the count by 2 using a state updater function
  const handleCorrectIncrementTwice = () => {
    setCount(count => count + 2);
    console.log(count);
  };

  const buttonStyle = {
    fontSize: '18px',
    padding: '10px 20px', 
    margin: '5px', 
    cursor: 'pointer', 
    borderRadius: '5px', 
    border: 'none', 
    backgroundColor: '#4CAF50', 
    color: 'white', 
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement} style={buttonStyle}>Increment</button>
      <button onClick={handleIncrementAfterDelay } style={buttonStyle}>Increment After Delay</button>
      <button onClick={handleIncrementTwice} style={buttonStyle}>Increment Twice</button>
      <button onClick={handleCorrectIncrementTwice} style={buttonStyle}>Correct Increment Twice</button>
    </div>
  );
}

export default Counter;
