import React, { useState } from "react";
const Color = () => {
  const [backgroundColor2, setBackgroundColor2] = useState("lightblue");
  const [hexCode, sethexCode] = useState("#000");

  let code = "#" + Math.random().toString(16).slice(2, 8);

  const changeBackgroundColor2 = () => {
    setBackgroundColor2(code);
  };

  const newHexcode = () => {
    sethexCode(code);
  };

  return (
    <main>
      <div>
        <button
          onClick={() => {
            changeBackgroundColor2();
            newHexcode();
          }}
          style={{ backgroundColor: backgroundColor2 }}
        >
          {hexCode}
        </button>
      </div>
    </main>
  );
};

export default Color;
