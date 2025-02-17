import React from 'react'

export const Company = (props) => {
    const{data}=props
  return (
    <>
    <div className="company">
       <h3>Company</h3>
       <h6>{data.name}</h6>
       <p>{data.catchPhrase}</p>
       <p>{data.bs}</p> 
    
    </div>
    </>
  )
}
