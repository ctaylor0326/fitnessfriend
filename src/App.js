import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FoodLogPage from "./Pages/FoodLogPage";
import RecipePage from "./Pages/RecipePage";

function App() {
  const [favoriteFoods, setFavoriteFoods] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [foodLog, setFoodLog] = useState([]);

  const handleAddFavoriteFood = (food) => {
    setFavoriteFoods([...favoriteFoods, food]);
  };

  const handleDeleteFavoriteFood = (index) => {
    const newFavoriteFoods = [...favoriteFoods];
    newFavoriteFoods.splice(index, 1);
    setFavoriteFoods(newFavoriteFoods);
  };

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const handleDeleteRecipe = (index) => {
    const newRecipes = [...recipes];
    newRecipes.splice(index, 1);
    setRecipes(newRecipes);
  };

  const handleAddFoodToLog = (food) => {
    setFoodLog([...foodLog, food]);
  };

  const handleDeleteFoodFromLog = (index) => {
    const newFoodLog = [...foodLog];
    newFoodLog.splice(index, 1);
    setFoodLog(newFoodLog);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage
            favoriteFoods={favoriteFoods}
            recipes={recipes}
            handleAddFavoriteFood={handleAddFavoriteFood}
            handleDeleteFavoriteFood={handleDeleteFavoriteFood}
            handleAddRecipe={handleAddRecipe}
            handleDeleteRecipe={handleDeleteRecipe}
          />
        </Route>
        <Route path="/food-log">
          <FoodLogPage
            favoriteFoods={favoriteFoods}
            foodLog={foodLog}
            handleAddFoodToLog={handleAddFoodToLog}
            handleDeleteFoodFromLog={handleDeleteFoodFromLog}
          />
        </Route>
        <Route path="/recipes">
          <RecipePage
            recipes={recipes}
            handleAddRecipe={handleAddRecipe}
            handleDeleteRecipe={handleDeleteRecipe}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
