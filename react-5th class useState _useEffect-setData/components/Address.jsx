import React from 'react'
import { Location } from './Location';
export const Address = (props) => {
    const {data} = props;
  return (
    <>
    <div className="address">
  <address>
    <h3>address</h3>
    <h6>{data.street}</h6>
    <p>{data.city}-{data.suite}-{data.zipcode}</p>
    
   
    
  </address>
 
  </div>
  </>
  )
}
