import React, { useState } from 'react';

function RecipeForm({ onAddRecipe }) {
  const [name, setName] = useState('');
  const [foods, setFoods] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      name,
      foods,
    };
    onAddRecipe(recipe);
    setName('');
    setFoods([]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFoodChange = (e) => {
    const selectedFoodId = e.target.value;
    const selectedFood = foods.find((food) => food.id === selectedFoodId);
    if (selectedFood) {
      return;
    }
    const foodToAdd = {
      id: selectedFoodId,
      servingSize: '',
    };
    setFoods([...foods, foodToAdd]);
  };

  const handleServingSizeChange = (e, foodId) => {
    const updatedFoods = foods.map((food) => {
      if (food.id === foodId) {
        return {
          ...food,
          servingSize: e.target.value,
        };
      }
      return food;
    });
    setFoods(updatedFoods);
  };

  return (
    <div>
      <h2>Create a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="foods">Foods:</label>
          <select id="foods" onChange={handleFoodChange}>
            <option value="">--Select a Food--</option>
            {/* Map through the list of all foods to display as options */}
          </select>
        </div>
        {foods.map((food) => (
          <div key={food.id}>
            <label htmlFor={food.id}>{food.name} - Serving Size:</label>
            <input type="text" id={food.id} value={food.servingSize} onChange={(e) => handleServingSizeChange(e, food.id)} />
          </div>
        ))}
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default RecipeForm;
