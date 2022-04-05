import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [readMore, setReadMore] = useState(false);
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

  const checkedNum = (num) => {
    if (num > meal.length - 1) {
      return 0;
    }
    if (num < 0) {
      return meal.length - 1;
    }
    return num;
  }

  const nextMeal = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkedNum(newIndex);
    })
  }

  const prevMeal = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkedNum(newIndex);
    })
  }

  const randomMeal = () => {
    let randomNum = Math.floor(Math.random() * meal.length);
    if (randomNum === index) {
      randomNum = index - 1;
    }
    setIndex(checkedNum(randomNum));
  }

  return (
    <article className="w-2/4 flex flex-col place-items-center p-4 bg-white shadow-2xl rounded-md">
      <div>
        <img 
          src={meal[index].strMealThumb}
          alt={meal[index].strArea} 
          className="rounded-full h-48 w-48"
        />
      </div>
      <h4 className="text-2xl font-bold">{meal[index].strArea}</h4>
      <h4 className="text-3xl font-bold text-blue-400">{meal[index].strCategory}</h4>
      <p>
        {readMore ? meal[index].strInstructions : meal[index].strInstructions.slice(0, 200)}
        <button 
          className="text-blue-400"
          onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Show less' : 'Read more'}
        </button>
      </p>
      <div>
        <button className="mr-4 text-blue-400" onClick={prevMeal}>
          <FaChevronLeft />
        </button>
        <button className="ml-4 text-blue-400" onClick={nextMeal}>
          <FaChevronRight />
        </button>
      </div>
      <button 
        className="text-xl capitalize bg-blue-400 px-2 my-2 text-white rounded"
        onClick={randomMeal}
      >
        select random
      </button>
    </article>
  )
}

export default Review;
