import ReactDom from 'react-dom';
import './NavPortal.css'
import './ModeDisplay'
import React from "react";

import {HiOutlineMenuAlt2} from "react-icons/hi";
// import {AiOutlineHeart, AiTwotoneHeart, AiOutlineHome, AiOutlineShoppingCart} from 'react-icons/ai'
import { NavLink } from "react-router-dom";

const NavPortal = () => {
    const content = (
        <div>
         <NavLink><span> 
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
        </span></NavLink>

        </div>
    )
  return ReactDom.createPortal(content, document.getElementById('portal'));
};

export default NavPortal;
