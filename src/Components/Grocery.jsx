import React from "react";
import { v4 as uuid } from "uuid";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";

export const Grocery = () => {
  const [data, setData] = React.useState([]);

  const handleAdd = (title) => {
    const payload = {
      title,
      id: uuid(),
    };
    const updatedData = [...data, payload];
    setData(updatedData);
  };

  const handleDelete = (id) => {
    const UpdatedData = data.filter((item) => (item.id !== id ? item : null));
    setData(UpdatedData);
  };

  return (
    <div>
      <GroceryInput onAdd={handleAdd} />
      {data.map((item) => (
        <GroceryList item={item.title} onDel={handleDelete} id={item.id} />
      ))}
    </div>
  );
};
