import React, { useState } from "react";

const NameChange = () => {
  //use hooks at the top level and dont call hooks inside loops, conditions or nexsted functions
  const [firstName, setFirstName] = useState("Harry");
  const [lastName, setLastName] = useState("Potter");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div>
      <input value={firstName} onChange={handleFirstNameChange} />
      <input value={lastName} onChange={handleLastNameChange} />
      <p>
        <span>
          You Entered : {firstName} {lastName}
        </span>
      </p>
    </div>
  );
};

export default NameChange;
