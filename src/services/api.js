const API_URL = "https://api.nutritiontracker.com";

function getFoods() {
  return fetch(`${API_URL}/foods`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

function searchFoods(query) {
  return fetch(`${API_URL}/foods?search=${query}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

function addFood(food) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(food),
  };

  return fetch(`${API_URL}/foods`, options)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

function getRecipes() {
  return fetch(`${API_URL}/recipes`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

function searchRecipes(query) {
  return fetch(`${API_URL}/recipes?search=${query}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

function addRecipe(recipe) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  };

  return fetch(`${API_URL}/recipes`, options)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export { getFoods, searchFoods, addFood, getRecipes, searchRecipes, addRecipe };
