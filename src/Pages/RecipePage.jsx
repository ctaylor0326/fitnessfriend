import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';
import RecipeForm from '../components/RecipeForm';
import SearchBar from '../components/SearchBar';
import RecipeItem from '../components/RecipeItem';

function RecipePage({ recipes, onAddRecipe, onSelectRecipe }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSelectRecipe(recipe) {
    setSelectedRecipe(recipe);
    onSelectRecipe(recipe);
  }

  function handleDeselectRecipe() {
    setSelectedRecipe(null);
    onSelectRecipe(null);
  }

  const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h2>Recipes</h2>
      <SearchBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
      <RecipeList recipes={filteredRecipes} onSelectRecipe={handleSelectRecipe} />
      {selectedRecipe && (
        <div>
          <RecipeItem recipe={selectedRecipe} />
          <button onClick={handleDeselectRecipe}>Back to Recipes</button>
        </div>
      )}
      <RecipeForm onAddRecipe={onAddRecipe} />
    </div>
  );
}

export default RecipePage;
