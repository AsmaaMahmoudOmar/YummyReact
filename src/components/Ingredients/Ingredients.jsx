import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function Ingredients() {
  let [ingredients, setIngredients] = useState([]);
  async function getIngredient() {
    let { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    console.log(data.meals);
    setIngredients(data.meals);
  }
  useEffect(() => {
    getIngredient();
  }, []);
  return (
    <>
      <Helmet>
        <title>Ingredients</title>
      </Helmet>
      {ingredients.length?
      <div className="row">
        {ingredients.map((ingredient) => (
          <div key={ingredient.idIngredient} className="col-md-3 text-center">
            <Link  to={`/typeingredients/${ingredient.strIngredient}`}className="text-decoration-none text-white">
              <i class="fa-solid fa-drumstick-bite fa-4x"></i>
              <h3>{ingredient.strIngredient}</h3>
              <p>
                {ingredient.strDescription?.split(" ").slice(0, 20).join(" ") ||
                  " "}
              </p>
            </Link>
          </div>
        ))}
      </div>:<Loading/>}
    </>
  );
}
