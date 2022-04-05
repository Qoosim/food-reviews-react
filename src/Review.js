import React, { useState, useEffect } from 'react';

const Review = () => {
  const [index, setIndex] = useState(0);
  const [meal, setMeal] = useState([]);

  const fetchMealFromApi = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
      const data = await response.json();
      setMeal(data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMealFromApi();
  }, [])

  return (
    <article className="w-3/5 border-2 border-green-300">
      {
        meal.map((meal) => {
          const { idMeal, strArea, strCategory, strMealThumb } = meal
        
          return (
            <main>
              <h4>{idMeal}</h4>
              <h2>{strArea}</h2>
              <h2>{strCategory}</h2>
              <img src={strMealThumb} alt={idMeal} />
            </main>
          );
        })
      }
    </article>
  )
}

export default Review;
