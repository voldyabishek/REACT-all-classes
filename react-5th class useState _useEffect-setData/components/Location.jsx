import React from 'react'

export const Location = (props) => {
    const{data}=props;
  return (
    <>
    <div className="location">
        <h3>Location</h3>
        <p>{data.lat}</p>
        <p>{data.lag}</p>
        <Location data={item.geo}></Location>
    </div>
    </>
  )
}
