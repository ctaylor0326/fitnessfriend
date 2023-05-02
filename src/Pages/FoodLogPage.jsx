import React, { useState } from 'react';
import FoodLogList from '../components/FoodLogList';
import FoodForm from '../components/FoodForm';
import RecipeList from '../components/RecipeList';

function FoodLogPage({ foods, recipes, onAddFood, onAddRecipe, onAddToFoodLog, onDeleteFoodLog }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function handleSelectRecipe(recipe) {
    setSelectedRecipe(recipe);
  }

  function handleDeselectRecipe() {
    setSelectedRecipe(null);
  }

  return (
    <div>
      <h2>Food Log</h2>
      <FoodForm onAddFood={onAddFood} />
      <FoodLogList foods={foods} onDeleteFoodLog={onDeleteFoodLog} />
      <h2>Recipes</h2>
      <RecipeList recipes={recipes} onAddToFoodLog={onAddToFoodLog} onSelectRecipe={handleSelectRecipe} />
      {selectedRecipe && (
        <div>
          <h3>{selectedRecipe.name}</h3>
          <button onClick={handleDeselectRecipe}>Back to Recipes</button>
        </div>
      )}
    </div>
  );
}

export default FoodLogPage;
