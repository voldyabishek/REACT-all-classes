import React from 'react'
import {useState} from 'react'
const Content = () => {
  // useState setNum
       const[num,setnum]=useState(0)
       const handleincrease=()=>{
        setnum(num+1)
       }
       const handledecrease=()=>{
        setnum(num-1)
       }
// useState setname
 const[name,setname]=useState("")

  return (
    <>
    {/* usestate setname */}
    <div>
      <h1>UseState,setNum</h1>
      <button onClick={handleincrease}>+</button>
      <button onClick={handledecrease}>-</button>
      {num}
    </div><br /><br />
    {/* usestate setname */  }
       
      <div>
        {name}
        </div>
       <input type="text"  name="" id="" onChange={(e)=>{setname(e.target.value)}} />
      
     

    </>
  )
}

export default Content












































































































































































































