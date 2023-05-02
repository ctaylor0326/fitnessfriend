import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to your Nutrition Tracker</h1>
      <p>This app allows you to track your daily food intake and monitor your macro nutrient totals.</p>
      <div>
        <h2>Quick Links:</h2>
        <ul>
          <li><Link to="/foodlog">Food Log</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
