import React, { useContext, useReducer,useEffect } from "react"
import reducer from "./reducer"


//create a context(warehouse)
const AppContext=React.createContext()
const API="./data.json"
//create a provider(provide data to consumer)
const intialState={
    name:"",
    image:"",
    services:[]
}


const AppProvider=({children})=>{
    const updateHomePage=()=>{
        return dispatch(
            {
                type:"HOME_UPDATE",
                payload:{
                    name:"Shivam",
                    image:"./images/hero.svg"
    
                }
            }
        )
    }
    
    const updateAboutPage=()=>{
        return dispatch(
            {
                type:"ABOUT_UPDATE",
                payload:{
                    name:"Shivam",
                    image:"./images/about1.svg"
    
                }
            }
        )
    }
    
    const [state,dispatch]=useReducer(reducer,intialState)


    //to get the api data

    const getServices= async(url)=>{
            try {

             const res=await fetch(url)
                const data=await res.json()
                dispatch({type:"GET_SERVICES",payload:data})

                
            } catch (error) {
                console.log(error);
                
            }
    }

    //to call the api
    useEffect(() => {
     getServices(API)
    }, [])
    


    return <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>
    {children}
    
    </AppContext.Provider>

}

//global custom hook

const useGlobalContext=()=>{
    return useContext(AppContext)
}



export {AppContext,AppProvider,useGlobalContext}