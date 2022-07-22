import { createContext, useContext, useState, } from "react";


export const myContext = createContext()


export const ContextProvider = (props) => {
 const [openNav, setOpenNav] = useState(false);
 
 



    const contextValue = {
        openNav, 
        setOpenNav,
    }
   return (<myContext.Provider  value={contextValue}>
         {props.children}
    </myContext.Provider>)
}


export const useMyContext = () => useContext(myContext)