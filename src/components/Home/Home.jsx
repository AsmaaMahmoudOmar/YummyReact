import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Style from "./Home.module.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
export default function Home() {
  const [meals, setMeals] = useState([]);
  async function getData() {
    let { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    setMeals(data.meals);
    console.log(data.meals);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {meals.length?
      <div  className="row g-3 d-flex align-items-center">
        {meals.map((mealInfo)=>
        <Card meal={mealInfo}  />
        )}
            
      </div>
:<Loading/>}
      {/* {meals.length ? (
        <div className="row g-3">
          {meals.map((meal) => (
            <div className="col-md-3" key={meal.idMeal}>
              <Link to={`/${meal.idMeal}`}>
                <div
                  className={`${Style.inner} position-relative overflow-hidden `}
                >
                  <img src={meal.strMealThumb} alt="" className="w-100" />
                  <div
                    className={`position-absolute d-flex align-items-center`}
                  >
                    <h2 className="p-2 text-black" >{meal.strMeal}</h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )} */}
    </>
  );
}
