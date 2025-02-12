import React from 'react'

export const Content = (props) => {
    const{user}=props
    console.log(user)
  return (
    <>
  {/* <div className="content">
    <h1>Content</h1>
    <p>This is the content section</p>
  </div> */}
  
  <div className='content'>
      <h2>Name:{props.user.name}</h2>
      <p>Age: {user.age}</p>
      <p> Profession:{user.profession}</p>
    </div>
  </>
  )
}
