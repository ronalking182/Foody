import React from "react";
import './ModeDisplay.css'
import {BsSun, BsFillMoonFill} from 'react-icons/bs'
import {useMyContext} from '../store/CreateContext'

const ModeDisplay = () => {
    const {openNav} = useMyContext()
  return <><BsSun className="con"/> { openNav ? <p>Light</p> : ''}</>;
};

export default ModeDisplay;
