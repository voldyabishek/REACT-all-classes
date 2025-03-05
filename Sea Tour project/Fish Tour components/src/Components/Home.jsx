import React from 'react'
import Header from './Header'
import './Mainsection.css'
import { Link } from 'react-router-dom'
const Home = () => {

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
};
  return (
    <>
      <Header/>
  
            {/* Section 1 */}
            <section className='section-1'>
                <img src="MainImg-4.jpg" className='section1img' alt="Main" />
                <div className='maintext'>
                    <h3>Experience Fisherman Life & Adventures!</h3>
                    <img src="fishing_adventure.jpg" alt="Fishing Adventure" className='adventure-img' />
                    <p>
                        Thrilling sea tours with<br />
                        scenic resort stays, where fishing,<br />
                        fun, and unforgettable beach memories await!
                    </p>
                    <Link to="/Booking"><button className="btn btn-primary book-now" onClick={scrollToBooking}>Book Now</button></Link>
                </div>
            </section>

            {/* card1 review Section */}
            <section className="card1">
                <h4>What Our Guests Say</h4>
                <p>"An unforgettable experience! The fishing was incredible and the views were breathtaking!" - Jane D.</p>
                <p>"The best vacation ever! Can't wait to come back!" - John S.</p>
            </section>
            
        </>

  )
}

export default Home
