import React from 'react';
import FoodItem from './FoodItem';

function FoodLogList({ foodLog, onDeleteFood }) {
  const foodItems = foodLog.map((food) => (
    <FoodItem key={food.id} food={food} onDeleteFood={onDeleteFood} />
  ));

  return (
    <div>
      <h2>Food Log</h2>
      {foodItems.length > 0 ? (
        <ul>{foodItems}</ul>
      ) : (
        <p>Your food log is empty</p>
      )}
    </div>
  );
}

export default FoodLogList;
