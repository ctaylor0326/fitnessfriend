const API_URL = "https://api.nutritionapi.com";
const API_KEY = "YOUR_API_KEY";

function getNutritionInfo(foodName) {
  return fetch(
    `${API_URL}/v3/nutrition-data?appKey=${API_KEY}&nutrition-type=cooking&ingr=${foodName}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.totalWeight === 0) {
        throw new Error("Food not found.");
      } else {
        return {
          calories: data.calories.total,
          protein: data.totalNutrients.PROCNT.quantity,
          carbohydrates: data.totalNutrients.CHOCDF.quantity,
          fat: data.totalNutrients.FAT.quantity,
        };
      }
    })
    .catch((error) => console.error(error));
}

export { getNutritionInfo };
