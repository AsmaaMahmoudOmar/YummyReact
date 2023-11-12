import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Style from "./SideBar.module.css"
import logo from"../../assets/logo.png"
export default function SideBar() {
    let sideMain = useRef(null);
    let menuSide = useRef(null);
    let menuIcon = useRef(null);

    function toggleMenu(){
        let left = window.getComputedStyle(sideMain.current).getPropertyValue('left');
        if( left =="0px"){
            closeSide();
        }else{
            openSide();
        }
    }
    function closeSide(){
        let width = menuSide.current.offsetWidth;
        sideMain.current.style.left= `-${width}px`; 
        menuIcon.current.classList.replace('fa-close','fa-bars') ;

    }
    function openSide(){
        sideMain.current.style.left="0px";  
        menuIcon.current.classList.replace('fa-bars','fa-close') ;
    }

  return (
    <>
      <nav ref={sideMain} className={`${Style.mainNav} position-fixed text-white min-vh-100`}>
        <div ref={menuSide} className='Menu d-flex flex-column justify-content-between py-4 px-3 bg-black'>
            <ul className='list-unstyled'>
                <li className='mb-2 pointer'>
                    <Link className='text-decoration-none text-white' to={'/search'}>Search</Link>
                </li>
                <li className='mb-2 pointer'>
                    <Link onClick={closeSide} className='text-decoration-none text-white' to={"/categories"}>Categories</Link>
                </li>
                <li className='mb-2 pointer'>
                    <Link onClick={closeSide} className='text-decoration-none text-white'to={"/area"}>Area</Link>
                </li>
                <li className='mb-2 pointer'>
                    <Link onClick={closeSide} className='text-decoration-none text-white'to={"/ingredient"} >Ingredients</Link>
                </li>
               
            </ul>
            
            <div className="footer">
                <div>
                    <i className="fa-brands fa-facebook me-1"></i>
                    <i className="fa-brands fa-twitter me-1"></i>
                    <i className="fa-solid fa-globe me-1"></i>
                </div>
                <p className="py-2"> Copyright Â© 2019 All Rights </p>
            </div>
            
        </div>
        <div className="aside-nav d-flex flex-column justify-content-between py-4 text-center px-2 bg-white text-black m-0">
            <img  src={logo} alt="logo" loading="lazy" width="50px"/>
            <i ref={menuIcon} onClick={toggleMenu} className="fa-solid fa-bars fa-2x pointer"></i>
            <div className="d-grid pb-4">
                <i className="fa-solid fa-globe mb-2"></i>
                <i className="fa-solid fa-share-nodes"></i>
            </div>
        </div>
      </nav>
    </>
  )
}
