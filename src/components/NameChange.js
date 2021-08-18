import React, { useState } from "react";

const NameChange = () => {
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
