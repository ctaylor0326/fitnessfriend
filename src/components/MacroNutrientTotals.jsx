import React from 'react';

function MacroNutrientTotals({ foodLog }) {
  const totalProtein = foodLog.reduce((acc, curr) => acc + curr.protein, 0);
  const totalCarbohydrate = foodLog.reduce((acc, curr) => acc + curr.carbohydrate, 0);
  const totalFat = foodLog.reduce((acc, curr) => acc + curr.fat, 0);
  const totalCalories = foodLog.reduce((acc, curr) => acc + curr.calories, 0);

  return (
    <div>
      <h2>Macro Nutrient Totals</h2>
      <p>Total Protein: {totalProtein}g</p>
      <p>Total Carbohydrate: {totalCarbohydrate}g</p>
      <p>Total Fat: {totalFat}g</p>
      <p>Total Calories: {totalCalories}kcal</p>
    </div>
  );
}

export default MacroNutrientTotals;
