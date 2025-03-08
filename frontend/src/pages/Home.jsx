import React from "react";
import "./home.css"; // Ensure you have a CSS file for styling

const Home = () => {
  // ✅ Fix image paths
  const categoryImages = {
    "Quick and Easy": "/easy recipe.jpg",
    "Vegan": "/vegan recipe.jpg",
    "Meal Prep": "/veg prep.jpg",
    "Breakfast":"/winter2.jpg",
    "Lunch":"/healthy2.jpg",
    "Dinner": "/dinner recipe.jpg"
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h2 className="hero-title">
          SIMPLE RECIPES MADE FOR EVERYDAY LIFE{" "}
        </h2>
      </div>

      {/* Featured Recipe Categories */}
      <div className="featured-recipes">
        <div className="recipe-category">
          <img src="/healthy recipe.jpg" alt="Healthy" />
          <button className="category-label">HEALTHY</button>
        </div>
        <div className="recipe-category">
          <img src="/soup.jpg" alt="Soups" />
          <button className="category-label">SOUPS</button>
        </div>
        <div className="recipe-category">
          <img src="/winter recipe.jpg" alt="Winter" />
          <button className="category-label">NON VEGETARIAN</button>
        </div>
        <div className="recipe-category">
          <img src="/veg recipe.jpg" alt="Vegetarian" />
          <button className="category-label">VEGETARIAN</button>
        </div>
      </div>


      {/* Circular Recipe Categories - Responsive Grid */}
      <div className="recipe-thumbnails">
        {Object.keys(categoryImages).map((category, index) => (
          <div key={index} className="thumbnail-item">
            <img src={categoryImages[category]} alt={category} />
            <p>{category}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Home;
