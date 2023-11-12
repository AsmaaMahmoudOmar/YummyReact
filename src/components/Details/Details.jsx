import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function Details() {
  let { id } = useParams();
  let [detail, setDetail] = useState({});
  async function getDetails() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    // setDetail(data.meals[0]);
    console.log(data);
    return data.meals[0];
  }
  
  async function getIngredient() {
    let detailsObject = await getDetails();
    detailsObject.Ingredient = [];
    const detailMap = new Map(Object.entries(detailsObject));
    for (let i = 0; i < detailMap.size; i++) {
      if (detailMap.get(`strIngredient${i}`)) {
        detailsObject.Ingredient.push(
          `${detailMap.get(`strMeasure${i}`)} ${detailMap.get(
            `strIngredient${i}`
          )}`
        );
      }
    }
    setDetail(detailsObject);
  }
  useEffect(() => {
    getIngredient();
  }, []);
  return (
    <>
      <Helmet>
        <title> Details Meal</title>
      </Helmet>
      {detail? (
        <div className="row text-white g-3">
          <div className="col-md-4">
            <img
              src={detail.strMealThumb}
              alt={detail.strMeal}
              className="w-100 rounded-3 mb-2"
            />
            <h2>{detail.strMeal}</h2>
            <Link to="/">
              <button className="btn btn-outline-warning mt-4">Back To Home</button>
            </Link>
          </div>
          <div className="col-md-8">
            <h3>instruction</h3>
            <p>{detail.strInstructions}</p>
            <div className="d-flex align-items-center py-2">
              <h4 className="me-2">Area:</h4>
              <h4>{detail.strArea}</h4>
            </div>
            <div className="d-flex align-items-center py-2">
              <h4 className="me-2">Category:</h4>
              <h4>{detail.strCategory}</h4>
            </div>
            <div className="py-2">
              <h4 className="py-2">Recipes:</h4>
              {detail.Ingredient &&
                detail.Ingredient.map((item, index) => (
                  <span
                    key={index}
                    className="bg-info-subtle rounded-2 p-2 d-inline-block m-2 text-green "
                  >
                    {item}
                  </span>
                ))}
            </div>
            {detail.strTags && (
              <div className="py-2">
                <h4>Tags:</h4>
                {detail.strTags &&
                  detail.strTags.split(",").map((tag, index) => (
                    <span
                      key={index}
                      className="bg-pink rounded-2 p-2 my-2 m-2 d-inline-block text-brown"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            )}
            <div>
              <a
                className="btn btn-outline-warning me-3"
                target="_blank"
                href={detail.strSource}
              >
                Source
              </a>
              <a
                className="btn btn-outline-danger"
                target="_blank"
                href={detail.strYoutube}
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
