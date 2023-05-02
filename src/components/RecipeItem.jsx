import React from 'react';

function RecipeItem({ recipe, onDeleteRecipe, onAddToFoodLog }) {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <ul>
        {recipe.foodItems.map((food) => (
          <li key={food.id}>
            {food.name} - {food.calories} calories, {food.protein}g protein, {food.carbs}g carbs, {food.fat}g fat
          </li>
        ))}
      </ul>
      <button onClick={() => onDeleteRecipe(recipe)}>Delete Recipe</button>
      <button onClick={() => onAddToFoodLog(recipe)}>Add to Food Log</button>
    </div>
  );
}

export default RecipeItem;
