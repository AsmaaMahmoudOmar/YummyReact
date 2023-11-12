import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function Area() {
  let [areas, setAreas] = useState([]);
  async function getAreas() {
    let { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    console.log(data);
    setAreas(data.meals);
  }

  useEffect(() => {
    getAreas();
  }, []);
  return (
    <>
    <Helmet>
        <title>Area</title>
    </Helmet>
    {areas.length?
      <div className="row g-3">
        {areas.map((area, index) => (
          <div key={index} className="col-md-3 pointer text-center" >
            <Link to={`/nameArea/${area.strArea}`} className="text-decoration-none text-white">

            <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h3>{area.strArea}</h3>
          </Link>
          </div>
        ))}
      </div>:<Loading/>}
    </>
  );
}
