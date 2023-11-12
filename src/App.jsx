import { useState } from 'react'
import {RouterProvider, createBrowserRouter, createHashRouter} from "react-router-dom"
import './App.css'
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import Search from "./components/Search/Search"
import Details from './components/Details/Details'
import Categories from './components/Categories/Categories'
import TypeCategories from './components/TypCategories/TypeCategories'
import Area from './components/Area/Area'
import NameArea from './components/NameArea/NameArea'
import Ingredients from './components/Ingredients/Ingredients'
import TypeIngredients from './components/TypeIngredients/TypeIngredients'

let routers = createHashRouter([
  {
    path:"/",element:<Layout/>,children:[
     { index:true,element:<Home/>},
     { path:"/search",element:<Search />},
     {path:"/:id",element:<Details/>},
     {path:"/categories",element:<Categories/>},
     {path:"/typecategory/:id",element:<TypeCategories/>},
     {path:"/area",element:<Area/>},
     {path:"/namearea/:id",element:<NameArea/>},
     {path:"/ingredient",element:<Ingredients/>},
     {path:"/typeingredients/:id",element:<TypeIngredients/>},


    ]
  }
])
function App() {
 

  return (
    <>
  <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
