import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

export default function NameArea() {
  let [name, setName] = useState([]);
  let { id } = useParams();
  async function getTypeArea() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`
    );
    console.log(data);
    setName(data?.meals);
  }
  useEffect(() => {
    getTypeArea();
  }, []);
  return (
    <>
      <Helmet>
        <title></title>
      </Helmet>
      {name.length ? (
        <div className="row g-3">
          {name.map((name) => (
            <Card meal={name} key={name.idMeal} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
