import React from 'react'
import { Box } from './Box'


export const Home = (props) => {
  const{info}=props
  console.log(info)
  return (
    <>
    <main>
     {/* { info.map((i,j)=>(<Box data={i}></Box>))} */
       info.map((item,index)=>(<Box data={item}/>))
     }
    </main>
  
    </>
  )
}
