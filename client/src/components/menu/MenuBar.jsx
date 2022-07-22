import React from "react";
import './Menu.css'
import { useMyContext } from "../store/CreateContext";


import {HiOutlineMenuAlt2} from "react-icons/hi";
import {FiSettings} from "react-icons/fi";
import {GiMeal} from "react-icons/gi";
import {
    AiOutlineHeart, 
    // AiTwotoneHeart, 
    AiOutlineHome, 
    // AiOutlineShoppingCart
} from 'react-icons/ai'
// import { NavLink } from "react-router-dom";
import ModeDisplay from "../UI/ModeDisplay";

const MenuBar = () => {
const {openNav, setOpenNav} = useMyContext()
    const handleNavOpen = () =>{
        if(openNav){
          setOpenNav(false);
        }else{
          setOpenNav(true);
        }
      }


  return <div className="nav-overall-container">
    <div className={openNav ? "nav-menu1":"nav-menu2"}><HiOutlineMenuAlt2 className='Men' onClick={handleNavOpen}/></div>
        <span className={openNav ? "my-link1" : "my-link2"}><GiMeal className='con'/> {openNav ? <p>Meals</p>: ''}</span>
        <span className={openNav ? "my-link1" : "my-link2"}><ModeDisplay className='con'/></span>
        <span className={openNav ? "my-link1" : "my-link2"}><AiOutlineHeart className='con'/> {openNav ?<p>Favorites</p> : ''}</span>
        <span className={openNav ? "my-link1" : "my-link2"}><AiOutlineHome className='con'/> { openNav? <p>Home</p>: ''}</span>
        <span className={openNav ? "my-link1" : "my-link2"}><FiSettings className='con'/> { openNav ? <p>Settings</p>: ''}</span>
        {/* <span className="my-link">hello</span> */}
  </div>;
};

export default MenuBar;
