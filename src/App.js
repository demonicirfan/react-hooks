import React, { useState } from "react";
const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("lightblue");
  const getRandomColor = () => {
    return "#" + Math.random().toString(16).slice(2, 8);
  };
  const changeBackgroundColor = () => {
    setBackgroundColor(getRandomColor());
  };
  return (
    <main>
      <div style={{ backgroundColor: backgroundColor }} >
      <button onClick={changeBackgroundColor}>Change Color</button>
      </div>
    </main>
  );
};

export default App;
