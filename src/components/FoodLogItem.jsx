import React from 'react';

function FoodItem({ food, onDeleteFood }) {
  const handleDeleteClick = () => {
    onDeleteFood(food.id);
  };

  return (
    <li>
      <div>
        <h3>{food.name}</h3>
        <p>Category: {food.category}</p>
        <p>Calories: {food.calories}</p>
        <p>Protein: {food.protein}g</p>
        <p>Carbohydrate: {food.carbohydrate}g</p>
        <p>Fat: {food.fat}g</p>
      </div>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default FoodItem;
