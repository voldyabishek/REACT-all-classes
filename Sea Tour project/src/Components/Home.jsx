import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <>
      <Header/>

       <main>

        {/* section1 */}
    <section className='section-1'>
    
    {/* <img src='mainimg-1.webp' className='section1img'></img>  */}

    <img src="MainImg-4.jpg"  className='section1img'></img>
{/* <div class="video-container">
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/nWXHdKYhDQ4?si=EG6AX5G0Sh9fW0kD&amp;start=962&amp;clip=Ugkxgi4ofhs6NxbPqkTOU4HCTat-sX9ykTJd&amp;clipt=ELjpOhj40zs" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
  </iframe>
</div>*/}

{/* main section text */}
<div className='maintext'>
         <h1>Experience the Best of Sea & Adventures!</h1>
         <p>Thrilling sea tours with scenic resort stays, where fishing, fun, and unforgettable beach memories await!</p>

         </div>
        
      </section>

         
       </main>
    
    </>
  )
}

export default Home

