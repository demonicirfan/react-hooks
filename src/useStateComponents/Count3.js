import React, { useState } from "react";

const Count3 = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10 + 1),
        color: "#" + Math.random().toString(16).slice(2, 8),
        code: "#" + Math.random().toString(16).slice(2, 8)
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add a colour</button>
      <ul>
        {items.map((items) => (
          <li key={items.id} style={{ color: items.color }}>
            {" "}
            {items.code}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Count3;
