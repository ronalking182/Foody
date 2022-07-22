import React from "react";
import './Menu.css'
import { useMyContext } from "../store/CreateContext";


import {HiOutlineMenuAlt2} from "react-icons/hi";
// import {AiOutlineHeart, AiTwotoneHeart, AiOutlineHome, AiOutlineShoppingCart} from 'react-icons/ai'
import { NavLink } from "react-router-dom";

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
         <div onClick={handleNavOpen}>Up</div>
         {/* <NavLink><span> 
            <HiOutlineMenuAlt2/>
         </span></NavLink>

         <NavLink><span>
        </span></NavLink>

         <NavLink><span>
        </span></NavLink>

         <NavLink><span>
        </span></NavLink>

         <NavLink><span>
        </span></NavLink>

         <NavLink><span>
        </span></NavLink> */}
  </div>;
};

export default MenuBar;
