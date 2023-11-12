import React from 'react'
import Style from "./Card.module.css"
import { Link } from 'react-router-dom';
export default function Card({meal}) {
    console.log(meal);
  return (
    <>
     <div className="col-10 col-sm-11 col-lg-3 col-md-6 offset-2 offset-sm-1 offset-md-0 " key={meal.idMeal}>
              <Link to={`/${meal.idMeal}`}>
                <div
                  className={`${Style.inner} position-relative overflow-hidden `}
                >
                  <img src={meal.strMealThumb} alt="meal.strMeal" className="w-100 rounded-3" />
                  <div
                    className={`position-absolute d-flex align-items-center rounded-3`}
                  >
                    <h2 className="p-2 text-black" >{meal.strMeal}</h2>
                  </div>
                </div>
              </Link>
            </div>
    </>
  )
}
