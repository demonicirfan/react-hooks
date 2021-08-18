import React, { useState, useEffect } from "react";
import ClassCounterTwo from "./ClassCounterTwo";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);

  
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Togge Display 😱</button>
      {display && <ClassCounterTwo/>}
    </div>
  );
};

export default MouseContainer;
