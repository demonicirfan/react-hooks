import React, { useState, useEffect } from "react";

const FunctionCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`use Effect - updating document.title`)
    document.title = `${name}`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>click {count} times</button>
    </div>
  );
};

export default FunctionCounterOne;
 