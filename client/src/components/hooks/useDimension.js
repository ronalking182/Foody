import {useState, useEffect} from "react";

const getDimension = () =>{
  const {innerWidth, innerHeight} = window
  return{
    innerWidth, 
    innerHeight
  }
}

const useDimension = () => {
const [Dimension, setDimension] = useState(getDimension());


useEffect(()=>{
  const handleSize = () => {
    setDimension(getDimension());
  }
  window.addEventListener('resize', handleSize)
  return ()=>{
    window.removeEventListener('resize', handleSize)
  }
},[])

  return Dimension;
};

export default useDimension;
