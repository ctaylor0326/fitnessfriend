import React from 'react';

function FoodItem({ food, onDelete }) {
  const handleDelete = () => {
    onDelete(food);
  };

  return (
    <li>
      <span>{food.name}</span>
      <span>{food.category}</span>
      <span>{food.calories}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default FoodItem;
