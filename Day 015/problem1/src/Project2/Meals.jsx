import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./Meal.css";
const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        setMeals(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="meals">
      {meals.map((meal) => (
        <div className="img-meal" key={meal.idMeal}>
          <p>{meal.strMeal}</p>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="meal-img"
          />
        </div>
      ))}
    </div>
  );
};

export default Meals;
