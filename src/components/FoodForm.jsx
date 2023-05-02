import React, { useState } from 'react';

function FoodForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbohydrate, setCarbohydrate] = useState('');
  const [fat, setFat] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, category, calories, protein, carbohydrate, fat });
    setName('');
    setCategory('');
    setCalories('');
    setProtein('');
    setCarbohydrate('');
    setFat('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Food name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Food category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(event) => setCalories(event.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Protein (grams)"
        value={protein}
        onChange={(event) => setProtein(event.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Carbohydrate (grams)"
        value={carbohydrate}
        onChange={(event) => setCarbohydrate(event.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Fat (grams)"
        value={fat}
        onChange={(event) => setFat(event.target.value)}
        required
      />
      <button type="submit">Add Food</button>
    </form>
  );
}

export default FoodForm;
