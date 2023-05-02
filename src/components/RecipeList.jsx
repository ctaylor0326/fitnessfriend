import React from 'react';

function RecipeList({ recipes, onDeleteRecipe, onAddToFoodLog }) {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>
            <button onClick={() => onDeleteRecipe(recipe)}>Delete</button>
            <button onClick={() => onAddToFoodLog(recipe)}>Add to Food Log</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
