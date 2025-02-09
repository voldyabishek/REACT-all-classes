import React from 'react'
import { Home } from './Home'

export const Wapp = () => {
  
     const info=[
        {
            name:"abishek",
            age:23,
            student:true,
            image:"vite.svg",
            skills:["new","data","java"]
        },
        {
            name:"abi",
            age:23,
            student:false,
            image:"vite.svg",
            skills:["new","data","java"]
        },
        {
            name:"nila",
            age:23,
            student:true,
            image:"vite.svg",
            skills:["new","data","java"]
        },
       
     ]  
  return (
   <Home info={info}/>
  )
}
