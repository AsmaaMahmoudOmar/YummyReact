import axios from "axios";
import React, {useState } from "react";
import Card from "../Card/Card";

export default function Search() {
  let [termsName, setTermName] = useState([]);
  async function SearchByName(type,term) {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?${type}=${term}`
    );
    console.log(data);
   term && data.meals && setTermName(data.meals);
  }
 
  return (
    
    <>
      <div className="row py-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Search By Meal Name"
            onChange={(e) => {
              if (/^[a-zA-Z]+/.test(e.target.value)) {
                SearchByName("s",e.target.value);
              }
            }}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            maxLength="1"
            className="form-control shadow-none"
            placeholder="Search By First letter"
            onChange={(e) => {
              if (/^[a-zA-Z]+/.test(e.target.value)) {
                SearchByName("f",e.target.value);
              }
            }}
          />
        </div>
      </div>
      {termsName.length ? (
        <div className="row g-3 py-4">
          {termsName.map((termName) => (
            <Card meal={termName} key={termName.idMeal} />
          ))}
        </div>
      ) : (
        <h4 className="text-white">Not Found Meals</h4>
      )}
    </>
  );
}
