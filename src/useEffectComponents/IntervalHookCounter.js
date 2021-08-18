import React, { useState, useEffect } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(
    "#" + Math.random().toString(16).slice(2, 8)
  );

  const tick = () => {
    setCount(count + 1);
    setColor("#" + Math.random().toString(16).slice(2, 8));
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
    //create an interval and destroy the intervel after once it is rendered then new interval with increased time
  });

  return <div style={{ color: color }}>{count}</div>;
};

export default IntervalHookCounter;
