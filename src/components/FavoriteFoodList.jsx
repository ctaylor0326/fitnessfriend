import React, { useState, useEffect } from 'react';
import FoodItem from './FoodItem';
import FoodForm from './FoodForm';
import api from '../services/api';

function FavoriteFoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    api.get('/foods').then((response) => setFoods(response.data));
  }, []);

  const handleAddFood = (food) => {
    api.post('/foods', food).then((response) =>
      setFoods([...foods, response.data])
    );
  };

  const handleDeleteFood = (food) => {
    api.delete(`/foods/${food.id}`).then(() =>
      setFoods(foods.filter((f) => f.id !== food.id))
    );
  };

  return (
    <div>
      <h2>Favorite Foods</h2>
      <ul>
        {foods.map((food) => (
          <FoodItem key={food.id} food={food} onDelete={handleDeleteFood} />
        ))}
      </ul>
      <FoodForm onSubmit={handleAddFood} />
    </div>
  );
}

export default FavoriteFoodList;
