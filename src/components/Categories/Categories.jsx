import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Navigate } from "react-router-dom";
import Style from "./Categories.module.css"
import Loading from "../Loading/Loading";
import TypeCategories from "../TypCategories/TypeCategories";

export default function Categories() {
    let [category,setCategory]=useState([]);
    let [type,setType]=useState([]);
        async function getCategory() {
            let { data } = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
            setCategory(data.categories);
            console.log(data.categories);
        }
       
  useEffect(() => {
    getCategory();
  }, []);

  
  return (
    <>
      <Helmet>
        <title>Categories</title>
      </Helmet>
      {category.length?
      <div className="row g-3">
        {category.map((Cate)=>
        <div key={Cate.idCategory} className="col-10 col-sm-11 col-lg-3 col-md-6 offset-2 offset-sm-1 offset-md-0">
           <Link to={`/typecategory/${Cate.strCategory}`} >
                <div
                  className={`${Style.inner} position-relative overflow-hidden overflow-hidden `}
                >
                  <img src={Cate.strCategoryThumb} alt="" className="w-100 rounded-3" />
                  <div
                    className={`position-absolute text-center rounded-3`}
                  >
                    <h2 className=" text-black" >{Cate.strCategory}</h2>

                    <p className=" text-black" >{Cate.strCategoryDescription?.split(" ").slice(0,20).join(" ")||" "}</p>
                  </div>
                </div>
              </Link>
        </div>
        
        )}
      </div>
      :<Loading/>}
      
    </>
  );
}
