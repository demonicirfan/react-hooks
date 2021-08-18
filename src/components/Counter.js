import React, { useState } from "react";

const Counter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const resetHandler = () => {
    setCount(initialCount);
  };
  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandler = () => {
    setCount(count - 1);
  };
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div>
      Count {count}
      <button onClick={resetHandler}>Reset</button>
      <button onClick={incrementHandler}>Increase</button>
      <button onClick={decrementHandler}>Decrease</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
};

export default Counter;
