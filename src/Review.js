import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const [meal, setMeal] = useState([{
    strArea: '',
    strCategory: '',
    strMealThumb: '',
    strInstructions: '',
  }]);

  const fetchMealFromApi = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
      const data = await response.json();
      console.log(data.meals);
      setMeal(data.meals);
    } catch (err) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    fetchMealFromApi();
  }, [])

  return (
    <article className="w-2/3 flex flex-col place-items-center border-2 border-green-300">
      <div>
        <img src={meal[index].strMealThumb} alt={meal[index].strArea} />
      </div>
      <h4>{meal[index].strArea}</h4>
      <h4>{meal[index].strCategory}</h4>
      <div>
        <button>
          <FaChevronLeft />
        </button>
        <button>
          <FaChevronRight />
        </button>
      </div>
      <button>select random</button>
    </article>
  )
}

export default Review;

/*
  {
    meal.map((meal) => {
      const { idMeal, strArea, strCategory, strMealThumb } = meal
      return (
        <div>
          <img
            src={strMealThumb}
            alt={idMeal}
            className="rounded-full h-48 w-48"
          />
          <h4>{idMeal}</h4>
          <h2>{strArea}</h2>
          <h2>{strCategory}</h2>
        </div>
      );
    })
  }
*/

