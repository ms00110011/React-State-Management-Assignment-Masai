import React from "react";

export const GroceryInput = ({onAdd}) => {
  const [item, setItem] = React.useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Add Items"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button
        onClick={() => {
          onAdd(item);
          setItem("");
        }}
      >
        ADD
      </button>
    </div>
  );
};
