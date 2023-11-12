import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

export default function TypeIngredients() {
    let [type,setType] = useState([]);
  let { id } = useParams();
  async function getNameIngredients() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`
    );
    setType(data.meals)
  }
  useEffect(()=>{
getNameIngredients();
  },[])

  return <>
  <Helmet>
    <title>Type Ingredients</title>
  </Helmet>
  {type.length?
  <div className="row g-3">
    {type.map((ingName)=>
    <Card meal={ingName} key={ingName.idMeal}/>
    )}
  </div>
:<Loading/>}
  </>;
}
