import React, { useState } from "react";

const Count2 = () => {
  const [name, setName] = useState({ firstName: " ", lastName: " " });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ lastName: e.target.value })}
      />
      <h2>Your first Name is - {name.firstName}</h2>
      <h2>Your first Name is - {name.lastName}</h2>
    </div>
  );
};

export default Count2;
