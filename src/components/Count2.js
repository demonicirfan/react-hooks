import React from "react";

const Count2 = () => {
  const [name, setName] = React.useState({ firstName: " ", lastName: " " });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your first Name is - {name.firstName}</h2>
      <h2>Your first Name is - {name.lastName}</h2>
    </div>
  );
};

export default Count2;

//the useState hook does not automatically merge and update objects you have to manually merge it and then pass the value to setState funciton
