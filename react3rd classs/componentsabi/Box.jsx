import React from 'react'
import { Skills } from './Skills'
export const Box = (props) => {
    const {data}=props
  return (
  <>
    <div id='box'>
     
      Name{data.name} 
     
      
      
    </div>

    <ul>
       {
        data.skills.map((item,index)=>(<Skills item={item}/>))
       } 
    </ul>
    </>
  )
}
