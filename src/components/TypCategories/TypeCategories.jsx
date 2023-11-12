import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

export default function TypeCategories() {
  let [meals, setMeals] = useState([]);
  let { id } = useParams();
  console.log(id);
  async function getTypeCategory() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
    );
    console.log(data.meals);
    setMeals(data.meals);
  }

  useEffect(() => {
    getTypeCategory();
  }, []);
  return (
    <>
      <Helmet>
        <title>Type Categories</title>
      </Helmet>
      {meals.length ? (
        <div className="row g-3">
          {meals.map((meal) => (
            <Card meal={meal} key={meal.idMeal} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
